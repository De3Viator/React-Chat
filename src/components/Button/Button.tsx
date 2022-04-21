import React, { memo } from 'react';
import ButtonUI from '@mui/material/Button';
type Props = {
  addMessage: () => void;
};

export const Button = memo(function Button(props: Props) {
  return (
    <ButtonUI variant="contained" onClick={props.addMessage}>
      click
    </ButtonUI>
  );
});
