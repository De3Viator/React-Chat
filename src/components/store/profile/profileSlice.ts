import { createSlice, Slice } from '@reduxjs/toolkit';

export interface CheckState {
  check: boolean;
}

export interface ProfileAction {
  changeCheck: () => void;
}

export const profileSlice: Slice = createSlice({
  name: 'PROFILE',
  initialState: {
    check: false,
  },
  reducers: {
    changeCheck(state) {
      state.check = !state.check;
    },
  },
});

export const { changeCheck } = profileSlice.actions;
export default profileSlice.reducer;
