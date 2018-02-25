import {SET_BALANCE} from '../actions/constants';

export const balanceReducer = (state = 0, action) => {
  switch(action.type) {
    case SET_BALANCE:
      return state + action.payload;
  }

  return state;
}