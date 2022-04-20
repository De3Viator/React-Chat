import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { User } from '../shared/user';
import { Link } from 'react-router-dom';
//для добавления в pr
type Props = {
  userList: User[];
};
export function UserList(props: Props) {
  return (
    <List>
      {props.userList.map((user) => (
        <ListItem key={user.id} data-testid="message">
          <Link to={`/chats/${user.id}`}>{user.name} </Link>
        </ListItem>
      ))}
    </List>
  );
}
