import React, { memo } from 'react';
import ButtonUI from '@mui/material/Button';
type Props = {
  addField: () => void;
  disabled: boolean;
};

export const Button = memo(function Button(props: Props) {
  return (
    <ButtonUI
      disabled={props.disabled}
      variant="contained"
      onClick={props.addField}
    >
      enter
    </ButtonUI>
  );
});
