import React, { useRef } from 'react';
export function Input(props) {
  const message = useRef(null);
  function setValue() {
    props.changeValue(message.current.value, props.element);
  }
  return <input ref={message} type="text" onChange={setValue} />;
}
