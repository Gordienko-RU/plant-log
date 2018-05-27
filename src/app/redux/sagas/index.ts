import { all } from 'redux-saga/effects';
import watchAddCardRequest from './add-card';
import watchGetCardRequest from './get-card';
import watchGetListRequest from './get-list';

function * rootSaga() {
  yield all([
    watchAddCardRequest(),
    watchGetCardRequest(),
    watchGetListRequest()
  ])
}

export default rootSaga;
