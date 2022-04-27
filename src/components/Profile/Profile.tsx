import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCheck } from '../store/profile/profileSlice';
import { StoreState } from '../store/store';

export function Profile() {
  const visible = useSelector((state: StoreState) => state.profile.check);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Profile</h2>
      <input
        type="checkbox"
        checked={visible}
        onClick={() => dispatch(changeCheck(0))}
      />
    </>
  );
}
