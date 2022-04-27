import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCheck } from '../store/profile/action';
import { CheckState } from '../store/profile/profileReducer';

export function Profile() {
  const visible = useSelector((state: CheckState) => state.check);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Profile</h2>
      <input
        type="checkbox"
        checked={visible}
        onClick={() => dispatch(toggleCheck())}
      />
    </>
  );
}
