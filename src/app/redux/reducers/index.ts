import { combineReducers, Reducer } from 'redux';
import { IAppState } from '..';
import list from './list';
import targetCard from './target-card';

const rootReducer: Reducer<IAppState> = combineReducers({
  list,
  targetCard,
});

export default rootReducer;
