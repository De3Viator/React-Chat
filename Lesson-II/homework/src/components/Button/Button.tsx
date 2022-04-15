import React, { memo } from 'react';
import ButtonUI from '@mui/material/Button';
// for tests - { handleClick }
type Props = {
  addMessage: () => void;
};

export const Button = memo(function Button(props: Props) {
  return (
    <ButtonUI onClick={props.addMessage} variant="contained">
      click
    </ButtonUI>
  );
});

/*Button.propTypes = {
  addMessage: propTypes.func,
  import propTypes from 'prop-types';
};*/
