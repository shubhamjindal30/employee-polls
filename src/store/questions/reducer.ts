import { QuestionActionType, SET_QUESTIONS, SET_QUESTION, QuestionsObj } from './types';

interface QuestionState {
  questions: QuestionsObj;
}

const initialState: QuestionState = {
  questions: {}
};

const reducer = (state = initialState, action: QuestionActionType): QuestionState => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case SET_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export default reducer;
