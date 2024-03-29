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
  DELETE_CARD_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from './actions';

export const addCardRequest = card => ({
  type: ADD_CARD_REQUEST,
  payload: card,
});

export const addCardSuccess = entity => ({
  type: ADD_CARD_SUCCESS,
  payload: entity,
});

export const addCardFailure = error => ({
  type: ADD_CARD_FAILURE,
  payload: error
});

export const getCardRequest = id => ({
  type: GET_CARD_REQUEST,
  payload: id,
});

export const getCardSuccess = entity => ({
  type: GET_CARD_SUCCESS,
  payload: entity,
});

export const getCardFailure = error => ({
  type: GET_CARD_FAILURE,
  payload: error
});

export const editCardRequest = id => ({
  type: EDIT_CARD_REQUEST,
  payload: id,
});

export const editCardSuccess = entity => ({
  type: EDIT_CARD_SUCCESS,
  payload: entity,
});

export const editCardFailure = error => ({
  type: EDIT_CARD_FAILURE,
  payload: error
});

export const deleteCardRequest = id => ({
  type: DELETE_CARD_REQUEST,
  payload: id,
});

export const deleteCardSuccess = ()=> ({
  type: DELETE_CARD_SUCCESS,
});

export const deleteCardFailure = error => ({
  type: DELETE_CARD_FAILURE,
  payload: error
});

export const getListRequest = () => ({
  type: GET_LIST_REQUEST,
});

export const getListSuccess = cards => ({
  type: GET_LIST_SUCCESS,
  payload: cards,
});

export const getListFailure = error => ({
  type: GET_LIST_FAILURE,
  payload: error
});
