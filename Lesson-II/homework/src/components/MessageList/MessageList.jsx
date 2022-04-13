import React from 'react';
export function MessageList(props) {
  return (
    <ul>
      {props.messageList.map((message, index) => (
        <li key={index}>
          {message.name}:{message.message}
        </li>
      ))}
    </ul>
  );
}
