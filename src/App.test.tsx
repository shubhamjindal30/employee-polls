// @ts-nocheck
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import store from './store';
import { _saveQuestion, _saveQuestionAnswer } from './store/_DATA';
import { Login, NewQuestion } from './views';

jest.spyOn(window, 'alert').mockImplementation(() => {});

const testUser = {
  id: 'tylermcginnis',
  password: 'abc321',
  name: 'Tyler McGinnis',
  avatarURL: '/assets/avatars/tyler.jpg',
  answers: {
    vthrdm985a262al8qx3do: 'optionOne',
    xj352vofupe1dqz9emx13r: 'optionTwo'
  },
  questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
};

const testQuestion = {
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'Build our new application with Javascript'
  },
  optionTwo: {
    votes: [],
    text: 'Build our new application with Typescript'
  }
};

describe('_saveQuestion()', () => {
  const newQuestion = {
    optionOneText: 'True',
    optionTwoText: 'False'
  };
  it('returns new question when correct data is passed', async () => {
    const response = await _saveQuestion({ author: testUser.id, ...newQuestion });
    expect(response).toMatchObject({
      id: expect.any(String),
      author: testUser.id,
      optionOne: {
        text: newQuestion.optionOneText,
        votes: []
      },
      optionTwo: {
        text: newQuestion.optionTwoText,
        votes: []
      }
    });
  });

  it('throws error when incorrect data is passed', async () => {
    await expect(_saveQuestion(newQuestion)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer()', () => {
  const newQuestionAnswer = {
    qid: testQuestion.id,
    answer: 'optionOne'
  };
  it('returns users & questions when correct data is passed', async () => {
    const response = await _saveQuestionAnswer({ authedUser: testUser.id, ...newQuestionAnswer });
    expect(response.users[testUser.id].answers[testQuestion.id]).toEqual(newQuestionAnswer.answer);
    expect(response.questions[testQuestion.id][newQuestionAnswer.answer].votes).toContain(
      testUser.id
    );
  });

  it('throws error when incorrect data is passed', async () => {
    await expect(_saveQuestionAnswer(newQuestionAnswer)).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});

describe('rendered login page', () => {
  it('matches the snapshot', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('rendered new question page', () => {
  it('matches the snapshot', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('new question page', () => {
  it('gives alert when empty form is submitted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );
    const submitButton = screen.getByTestId('submitNewQuestion');
    submitButton.click();
    expect(window.alert).toBeCalledWith('First option cannot be empty!');
  });

  it('gives alert when partially filled form is submitted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );
    const optionOneField = screen.getByTestId('fieldOptionOne').childNodes[0].childNodes[0];
    fireEvent.change(optionOneField, { target: { value: 'True' } });
    const submitButton = screen.getByTestId('submitNewQuestion');
    submitButton.click();
    expect(window.alert).toBeCalledWith('Second option cannot be empty!');
  });
});
