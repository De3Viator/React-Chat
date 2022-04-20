import React, { memo } from 'react';
import ButtonUI from '@mui/material/Button';
type Props = {
  addField: () => void;
};

export const Button = memo(function Button(props: Props) {
  return (
    <ButtonUI variant="contained" onClick={props.addField}>
      enter
    </ButtonUI>
  );
});
