import {
  GET_QUESTIONS,
  SET_QUESTIONS,
  SAVE_QUESTION,
  SET_QUESTION,
  QuestionsObj,
  Question,
  ISaveQuestion,
  GetQuestionsAction,
  SetQuestionsAction,
  SaveQuestionAction,
  SetQuestionAction
} from './types';

export const getQuestions = (): GetQuestionsAction => ({ type: GET_QUESTIONS });

export const setQuestions = (questions: QuestionsObj): SetQuestionsAction => ({
  type: SET_QUESTIONS,
  payload: questions
});

export const saveQuestion = (question: ISaveQuestion): SaveQuestionAction => ({
  type: SAVE_QUESTION,
  payload: question
});

export const setQuestion = (question: Question): SetQuestionAction => ({
  type: SET_QUESTION,
  payload: question
});
