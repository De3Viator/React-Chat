import React, { useRef, memo } from 'react';
// eslint-disable-next-line no-unused-vars
export const Input = memo(function Input(props, { handleChange }) {
  const message = useRef(null);
  function setValue() {
    props.changeValue(message.current.value, props.element);
  }
  return (
    <label>
      <input
        data-testid="inputName"
        ref={message}
        type="text"
        onChange={setValue}
      />
    </label>
  );
});
