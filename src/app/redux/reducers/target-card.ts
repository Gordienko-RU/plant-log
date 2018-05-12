import { IAppState, initialState } from '..';
import {
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
} from '../actions';

const { targetCard: cardInitialState } = initialState;

const targetCard = (state: IAppState, action) => {
  const { payload, meta, type } = action;

  switch(type) {
    case ADD_CARD_REQUEST: {
      console.log('adding');
      return { ...state, loading: true }
    };
    case ADD_CARD_SUCCESS: {
      console.log('success');
      break;
    };
    case ADD_CARD_FAILURE: {
      console.log('failure');
      break;
    };
    default:
      return cardInitialState;
  }
};

export default targetCard;
