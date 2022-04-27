import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { Message } from '../shared/message';
import { User } from '../shared/user';
import { UserList } from '../UserList/UserList';
import createTheme from '@material-ui/core/styles/createTheme';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useParams } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store/store';
import {
  addMessageSlice,
  addUserSlice,
  ChatState,
  deleteUserSlice,
} from '../store/chats/chatSlice';

const theme = createTheme({
  palette: {
    background: {
      default: '#6f5eb8',
    },
  },
});

export function Chat() {
  const [message, setMessage] = useState<string>('');
  const { id } = useParams<string>();
  const [send, setSend] = useState<boolean>(false);
  const [userFinded, setUserFinded] = useState<User>({
    name: '',
    messages: [],
    id: nanoid(),
  });
  const [userAdded, setUserAdded] = useState<string>('');
  const dispatch = useDispatch();
  const chat = useSelector((state: StoreState) => state.chat.users);

  useEffect(() => {
    if (send) {
      const botAnswer: Message = {
        name: 'bot',
        message: 'Ваше сообщение было отправлено!',
        id: nanoid(),
      };
      setTimeout(() => {
        updateUser(botAnswer);
      }, 1500);
    }
  }, [send]);

  useEffect(() => {
    chat.find((user) => {
      if (user.id === id) {
        setUserFinded(user);
      }
    });
  }, [id]);

  function addMessage(): void {
    setSend(true);
    const newMessage: Message = { name: 'user', message, id: nanoid() };
    updateUser(newMessage);
    setTimeout(() => {
      setSend(false);
    }, 2000);
  }

  function addUser(): void {
    const payload = {
      userName: userAdded,
    };
    dispatch(addUserSlice(payload));
  }

  function updateUser(message: Message): void {
    const payload = {
      user: userFinded,
      message,
    };
    dispatch(addMessageSlice(payload));
    setUserFinded({
      name: userFinded.name,
      id: userFinded.id,
      messages: [...userFinded.messages, message],
    });
  }

  function deleteUser(user: User) {
    const payload = {
      user,
    };
    dispatch(deleteUserSlice(payload));
    setUserFinded({ name: '', messages: [], id: nanoid() });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="board">
          <div className="board__item-chats">
            <UserList deleteUser={deleteUser} userList={chat} />
            <Input setField={setUserAdded} />)
            <Button disabled={userAdded.length === 0} addField={addUser} />
          </div>
          <div className="board__item-messages">
            <MessageList messageList={userFinded.messages} />
            <label>
              <form action="#">
                <Input setField={setMessage} />
                <Button disabled={message.length === 0} addField={addMessage} />
              </form>
            </label>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}