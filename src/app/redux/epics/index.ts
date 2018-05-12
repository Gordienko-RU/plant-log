import { combineEpics } from 'redux-observable';
import addCard from './add-card';

const rootEpic = combineEpics(
  addCard
);

export default rootEpic;
