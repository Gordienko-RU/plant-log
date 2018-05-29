import { takeLatest, put, call } from 'redux-saga/effects';
import { checkConnection, update } from '../../db-api';
import { EDIT_CARD_REQUEST } from '../actions';
import {
  editCardSuccess,
  editCardFailure,
  getListRequest
} from '../actions-creators';

function * editCardHandler(action) {
  try {
    yield call(checkConnection);
    const response = yield call(update, action.payload);
    yield put(editCardSuccess(action.payload));
    yield put(getListRequest());
  } catch (e) {
    yield put(editCardFailure(e.message));
  }
}

function * watchEditCardRequest() {
  yield takeLatest(EDIT_CARD_REQUEST, editCardHandler);
}

export default watchEditCardRequest;
