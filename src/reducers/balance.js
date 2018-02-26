import {SET_BALANCE} from '../actions/constants';

const balanceReducer = (state = 0, action) => {
  switch(action.type) {
    case SET_BALANCE:
      return state + action.payload;
  }

  return state;
}

export default balanceReducer;