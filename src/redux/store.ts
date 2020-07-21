import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
