import { IAppState, initialState } from '..';
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from '../actions';

const { list: listInitialState } = initialState;

const list = (state = listInitialState, action) => {
  const { payload, type } = action;

  switch(type) {
    case GET_LIST_REQUEST: {
      return { ...state, loading: true, }
    };
    case GET_LIST_SUCCESS: {
      return { ...state, loading: false, items: payload, }
    };
    case GET_LIST_FAILURE: {
      return { ...state, loading: false, error: payload, }
    };
    default:
      return state;
  }
};

export default list;
