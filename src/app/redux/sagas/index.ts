import { all } from 'redux-saga/effects';
import watchAddCardRequest from './add-card';

function * rootSaga() {
  yield all([
    watchAddCardRequest()
  ])
}

export default rootSaga;
