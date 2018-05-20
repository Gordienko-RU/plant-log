import { takeLatest, put, call } from 'redux-saga/effects';
import { create, read, readAll } from '../../db-api';
import {
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
} from '../actions';

function * addCardHandler(action) {
  const card = {
    id: '100',
    title: 'test',
  };
  const response = yield call(create, action.payload);
  console.log(response);
  const records = yield call(readAll);
  console.log(records);
  yield put({ type: ADD_CARD_SUCCESS });
}

function * watchAddCardRequest() {
  // read();
  yield takeLatest(ADD_CARD_REQUEST, addCardHandler);
}

export default watchAddCardRequest;
