import {
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
} from './actions';

export const addCardRequest = card => ({
  type: ADD_CARD_REQUEST,
  payload: card,
});

export const addCardSuccess = id => ({
  type: ADD_CARD_SUCCESS,
  payload: id,
});

export const addCardFailure = error => ({
  type: ADD_CARD_FAILURE,
  payload: error
});
