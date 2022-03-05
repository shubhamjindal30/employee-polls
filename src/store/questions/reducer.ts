import { QuestionActionType, SET_QUESTIONS, QuestionsObj } from './types';

interface QuestionState {
  questions: QuestionsObj
}

const initialState: QuestionState = {
  questions: {}
};

const reducer = (state = initialState, action: QuestionActionType): QuestionState => {
  switch (action.type) {
    case SET_QUESTIONS:
      const { payload } = action;
      return {
        ...state,
        questions: payload
      };
    default:
      return state;
  }
};

export default reducer;
