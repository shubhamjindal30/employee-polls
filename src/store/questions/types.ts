export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';

export interface Question {
  id: string;
  author: string;
  timestamp: number;
  optionOne: {
    votes: string[];
    text: string;
  };
  optionTwo: {
    votes: string[];
    text: string;
  };
}

export interface QuestionsObj {
  [k: string]: Question;
}

export interface GetQuestionsAction {
  type: typeof GET_QUESTIONS;
}

export interface SetQuestionsAction {
  type: typeof SET_QUESTIONS;
  payload: QuestionsObj;
}

export type QuestionActionType = GetQuestionsAction | SetQuestionsAction;
