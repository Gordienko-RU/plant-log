import { takeLatest, put, call } from 'redux-saga/effects';
import { checkConnection, readAll } from '../../db-api';
import { GET_LIST_REQUEST } from '../actions';
import {
  getListSuccess,
  getListFailure,
} from '../actions-creators';

function * getListHandler(action) {
  try {
    yield call(checkConnection);
    const response = yield call(readAll);
    yield put(getListSuccess(response));
  } catch (e) {
    yield put(getListFailure(e.message));
  }
}

function * watchGetListRequest() {
  yield takeLatest(GET_LIST_REQUEST, getListHandler);
}

export default watchGetListRequest;
