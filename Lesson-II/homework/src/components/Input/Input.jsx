import React, { useRef } from 'react';
export function Input({ props, handleChange }) {
  const message = useRef(null);
  // eslint-disable-next-line no-unused-vars
  function setValue() {
    props.changeValue(message.current.value, props.element);
  }
  return (
    <input
      data-testid="inputName"
      ref={message}
      type="text"
      onChange={handleChange}
    />
  );
}
