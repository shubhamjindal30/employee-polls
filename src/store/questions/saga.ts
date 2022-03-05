import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setQuestions } from './actions';
import { _getQuestions } from '../_DATA';
import { GET_QUESTIONS, QuestionsObj } from './types';

function* handleGetQuestions() {
  try {
    const response: QuestionsObj = yield call(_getQuestions);
    yield put(setQuestions(response));
  } catch (error) {
    console.log(`Error in handleGetQuestions: ${error}`);
  }
}

export function* watchQuestionRequests() {
  yield all([takeLatest(GET_QUESTIONS, handleGetQuestions)]);
}
