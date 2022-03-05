import { all, call, select, put, takeLatest } from 'redux-saga/effects';

import { setQuestions, setQuestion } from './actions';
import { _getQuestions, _saveQuestion } from '../_DATA';
import { GET_QUESTIONS, SAVE_QUESTION, QuestionsObj, SaveQuestionAction, Question } from './types';
import { getAuthUserFromState } from '../auth/selectors';
import { User } from '../users/types';

function* handleGetQuestions() {
  try {
    const response: QuestionsObj = yield call(_getQuestions);
    yield put(setQuestions(response));
  } catch (error) {
    console.log(`Error in handleGetQuestions: ${error}`);
  }
}

function* handleSaveQuestion(action: SaveQuestionAction) {
  try {
    const authUser: User | null = yield select(getAuthUserFromState);
    if (authUser) {
      const { optionOneText, optionTwoText } = action.payload;
      const response: Question = yield call(_saveQuestion, {
        optionOneText,
        optionTwoText,
        author: authUser.id
      });

      if (response) yield put(setQuestion(response));
    }
  } catch (error) {
    console.log(`Error in handleSaveQuestion: ${error}`);
  }
}

export function* watchQuestionRequests() {
  yield all([
    takeLatest(GET_QUESTIONS, handleGetQuestions),
    takeLatest(SAVE_QUESTION, handleSaveQuestion)
  ]);
}
