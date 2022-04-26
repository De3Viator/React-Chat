import React, { memo } from 'react';
import TextField from '@mui/material/TextField';
import './Input.scss';

type Props = {
  setField?: (field: string) => void;
};
export const Input = memo(function Input(props: Props) {
  return (
    <TextField
      autoFocus
      onChange={(e) => props.setField(e.target.value)}
      data-testid="inputName"
      id="outlined-basic"
      type="text"
      label="Message"
      variant="outlined"
      className="input"
    />
  );
});
