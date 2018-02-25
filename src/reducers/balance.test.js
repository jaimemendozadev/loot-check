import {balanceReducer} from './balance';
import { SET_BALANCE } from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;
    const state = 0;
    const returnedAction = {type: SET_BALANCE, payload: balance};
    
    expect(balanceReducer(state, returnedAction)).toEqual(balance);
    
  });
});