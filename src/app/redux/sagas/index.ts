import { all } from 'redux-saga/effects';
import test from './test';

function * runSagas () {
  all([
    test()
  ])
}

export default runSagas;
