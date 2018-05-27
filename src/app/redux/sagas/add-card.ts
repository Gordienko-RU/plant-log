import { takeLatest, put, call } from 'redux-saga/effects';
import { checkConnection, create } from '../../db-api';
import { ADD_CARD_REQUEST } from '../actions';
import {
  addCardSuccess,
  addCardFailure,
  getListRequest
} from '../actions-creators';

function * addCardHandler(action) {
  try {
    yield call(checkConnection);
    const response = yield call(create, action.payload);
    yield put(addCardSuccess(action.payload));
    yield put(getListRequest());
  } catch (e) {
    yield put(addCardFailure(e.message));
  }
}

function * watchAddCardRequest() {
  yield takeLatest(ADD_CARD_REQUEST, addCardHandler);
}

export default watchAddCardRequest;
