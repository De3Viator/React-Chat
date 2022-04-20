import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { User } from '../shared/user';
import { Link } from 'react-router-dom';
import './userList.scss';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  userList: User[];
  deleteUser: (user: User) => void;
};
export function UserList(props: Props) {
  return (
    <>
      <List>
        {props.userList.map((user) => (
          <Link className="user-link" key={user.id} to={`/chats/${user.id}`}>
            <ListItem disablePadding data-testid="message">
              <ListItemButton>
                <ListItemIcon onClick={() => props.deleteUser(user)}>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText>{user.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
