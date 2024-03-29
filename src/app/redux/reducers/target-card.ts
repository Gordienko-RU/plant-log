import { IAppState, initialState } from '..';
import {
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  GET_CARD_REQUEST,
  GET_CARD_SUCCESS,
  GET_CARD_FAILURE,
  EDIT_CARD_REQUEST,
  EDIT_CARD_SUCCESS,
  EDIT_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE
} from '../actions';

const { targetCard: cardInitialState } = initialState;

const targetCard = (state = cardInitialState, action) => {
  const { payload, type } = action;

  switch(type) {
    case ADD_CARD_REQUEST: {
      return { ...state, loading: true, }
    };
    case ADD_CARD_SUCCESS: {
      return { ...state, loading: false, entity: payload, }
    };
    case ADD_CARD_FAILURE: {
      return { ...state, loading: false, error: payload, }
    };
    case GET_CARD_REQUEST: {
      return { ...state, loading: true, }
    };
    case GET_CARD_SUCCESS: {
      return { ...state, loading: false, entity: payload, }
    };
    case GET_CARD_FAILURE: {
      return { ...state, loading: false, error: payload, }
    };
    case DELETE_CARD_REQUEST: {
      return { ...state, loading: true, }
    };
    case DELETE_CARD_SUCCESS: {
      return { ...state, loading: false }
    };
    case DELETE_CARD_FAILURE: {
      return { ...state, loading: false, error: payload, }
    };
    case EDIT_CARD_REQUEST: {
      return { ...state, loading: true, }
    };
    case EDIT_CARD_SUCCESS: {
      return { ...state, loading: false, entity: payload, }
    };
    case EDIT_CARD_FAILURE: {
      return { ...state, loading: false, error: payload, }
    };
    default:
      return state;
  }
};

export default targetCard;
