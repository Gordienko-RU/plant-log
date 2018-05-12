import {
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
} from '../actions';
import 'rxjs/add/operator/mapTo';
import { ofType } from 'redux-observable';

const addCard = action$ =>
  action$.ofType(ADD_CARD_REQUEST)
    .mapTo({ type: ADD_CARD_SUCCESS });

export default addCard;
