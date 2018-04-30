import { combineReducers } from 'redux';
import list from './list';
import targetPlant from './target-plant';

const rootReducer = combineReducers({
  list,
  targetPlant,
});

export default rootReducer;
