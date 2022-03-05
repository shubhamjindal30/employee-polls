import { GET_QUESTIONS, SET_QUESTIONS, QuestionsObj, GetQuestionsAction, SetQuestionsAction } from './types';

export const getQuestions = (): GetQuestionsAction => ({ type: GET_QUESTIONS });
export const setQuestions = (users: QuestionsObj): SetQuestionsAction => ({
  type: SET_QUESTIONS,
  payload: users
});
