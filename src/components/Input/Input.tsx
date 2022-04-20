import React, { memo } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  setMessage?: (message: string) => void;
  element?: string;
};
export const Input = memo(function Input(props: Props) {
  return (
    <TextField
      autoFocus
      onChange={(e) => props.setMessage(e.target.value)}
      data-testid="inputName"
      id="outlined-basic"
      type="text"
      label="Message"
      variant="outlined"
    />
  );
});
