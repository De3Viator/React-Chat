export const checkReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CHECK': {
      console.log(state.check);
      return {
        ...state,
        check: !state.check,
      };
    }
    default:
      return state;
  }
};
