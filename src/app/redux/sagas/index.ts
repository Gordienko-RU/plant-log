// TODO: implement universal saga for handling request - success/failure sequence
import { all } from 'redux-saga/effects';
import watchAddCardRequest from './add-card';
import watchGetCardRequest from './get-card';
import watchDeleteCardRequest from './delete-card';
import watchEditCardRequest from './edit-card';
import watchGetListRequest from './get-list';

function * rootSaga() {
  yield all([
    watchAddCardRequest(),
    watchGetCardRequest(),
    watchDeleteCardRequest(),
    watchEditCardRequest(),
    watchGetListRequest()
  ])
}

export default rootSaga;
