import { takeLatest, put, call } from 'redux-saga/effects';
import { checkConnection, deleteItem } from '../../db-api';
import { DELETE_CARD_REQUEST } from '../actions';
import {
  deleteCardSuccess,
  deleteCardFailure,
  getListRequest
} from '../actions-creators';

function * deleteCardHandler(action) {
  try {
    yield call(checkConnection);
    yield call(deleteItem, action.payload);
    yield put(deleteCardSuccess());
    yield put(getListRequest());
  } catch (e) {
    yield put(deleteCardFailure(e.message));
  }
}

function * watchDeleteCardRequest() {
  yield takeLatest(DELETE_CARD_REQUEST, deleteCardHandler);
}

export default watchDeleteCardRequest;
