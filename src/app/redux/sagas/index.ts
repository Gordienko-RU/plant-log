import { all } from 'redux-saga/effects';
import watchAddCardRequest from './add-card';
import watchGetCardRequest from './get-card';
import watchDeleteCardRequest from './delete-card';
import watchGetListRequest from './get-list';

function * rootSaga() {
  yield all([
    watchAddCardRequest(),
    watchGetCardRequest(),
    watchDeleteCardRequest(),
    watchGetListRequest()
  ])
}

export default rootSaga;
