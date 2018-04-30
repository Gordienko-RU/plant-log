import rootReducer from './reducers';
import { createStore, applyMidlleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export interface IAppState {};

const store: Store<IAppState> = createStore(rootReducer, composeWithDevTools());

export default store;
