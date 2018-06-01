import { takeLatest, put, call } from 'redux-saga/effects';
import { checkConnection, read } from '../../db-api';
import { GET_CARD_REQUEST } from '../actions';
import {
  getCardSuccess,
  getCardFailure,
} from '../actions-creators';

function * getCardHandler(action) {
  try {
    yield call(checkConnection);
    console.log('action payload', action.payload);
    const response = yield call(read, action.payload);
    yield put(getCardSuccess(response));
  } catch (e) {
    yield put(getCardFailure(e.message));
  }
}

function * watchGetCardRequest() {
  yield takeLatest(GET_CARD_REQUEST, getCardHandler);
}

export default watchGetCardRequest;
