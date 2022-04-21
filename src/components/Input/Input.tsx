import React, { useRef, memo } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  changeValue: (message: string, element: string) => void;
  element: string;
};
export const Input = memo(function Input(props: Props) {
  const message = useRef(null);
  function setValue() {
    props.changeValue(
      message.current.children[1].children[0].value,
      props.element
    );
  }
  return (
    <TextField
      autoFocus
      onChange={setValue}
      data-testid="inputName"
      id="outlined-basic"
      ref={message}
      type="text"
      label="Outlined"
      variant="outlined"
    />
  );
});
