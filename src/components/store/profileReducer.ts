import { Reducer } from 'react';
import { Action } from 'redux';
import { CHANGE_CHECK } from './action';

export interface CheckState {
  check: boolean;
}

const initialState: CheckState = {
  check: false,
};

export const profileReducer: Reducer<CheckState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CHANGE_CHECK:
      return {
        ...state,
        check: !state.check,
      };
    default:
      return state;
  }
};
