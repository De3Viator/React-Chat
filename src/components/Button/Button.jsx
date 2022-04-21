import React, { memo } from 'react';

// eslint-disable-next-line no-unused-vars
export const Button = memo(function Button(props, { handleClick }) {
  return <button onClick={props.addMessage}>click</button>;
});
