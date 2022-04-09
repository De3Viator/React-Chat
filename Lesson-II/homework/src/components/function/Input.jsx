import React, { useRef, useState } from 'react';
export default function Input(props) {
  const message = useRef(null);
  const [test,setTest] = useState(0);
  function setValue() {
    props.changeValue(message.current.value, props.element);
  }
  return <input ref={message} type="text" onChange={setValue} />;
}
