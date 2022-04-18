import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Message } from '../shared/message';
// for test = { handleMessages }
type Props = {
  messageList: Message[];
};
export function MessageList(props: Props) {
  return (
    <List>
      {props.messageList.map((message) => (
        <ListItem key={message.id} data-testid="message">
          {message.name}:{message.message}
        </ListItem>
      ))}
    </List>
  );
}
