import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckContext } from '../context/checkContext';
import { toggleCheck } from '../store/action';
import { CheckState } from '../store/profileReducer';

export function Profile() {
  // const visible = useSelector((state: CheckState) => state.check);
  //const dispatch = useDispatch();
  const { visibility, dispatch } = useContext(CheckContext);
  return (
    <>
      <h2>Profile</h2>
      <input
        type="checkbox"
        checked={visibility.check}
        //onClick={() => dispatch(toggleCheck())}
        onClick={() =>
          dispatch({
            type: 'CHANGE_CHECK',
          })
        }
      />
    </>
  );
}
