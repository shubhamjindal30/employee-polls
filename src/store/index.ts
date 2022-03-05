import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { watcherSaga } from './rootSaga';
import userReducer from './users/reducer';
import authReducer from './auth/reducer';
import questionReducer from './questions/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  questions: questionReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
