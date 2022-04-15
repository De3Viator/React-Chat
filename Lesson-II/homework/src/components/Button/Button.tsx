import React, { memo } from 'react';
import ButtonUI from '@mui/material/Button';
// for tests - { handleClick }
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

/*Button.propTypes = {
  addMessage: propTypes.func,
  import propTypes from 'prop-types';
};*/
