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

const theme = createTheme({
  palette: {
    background: {
      default: '#6f5eb8',
    },
  },
});

export function Chat() {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const { id } = useParams<string>();
  const [send, setSend] = useState<boolean>(false);
  const [userFinded, setUserFinded] = useState<User>();
  const [userList, setUserList] = useState<User[]>([
    {
      name: 'Charlie',
      id: nanoid(),
      messages: [
        {
          name: 'Charlie',
          message: 'Hello, user!',
          id: nanoid(),
        },
      ],
    },
    {
      name: 'Chloe',
      id: nanoid(),
      messages: [
        {
          name: 'Chloe',
          message: 'Hello, user!',
          id: nanoid(),
        },
      ],
    },
  ]);

  useEffect(() => {
    if (send === true) {
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
    userList.find((user) => {
      if (user.id === id) {
        setUserFinded(user);
        setMessageList([...user.messages]);
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

  function updateUser(message: Message): void {
    setMessageList((prevValue: Message[]) => [...prevValue, message]);
    userList[userList.indexOf(userFinded)].messages.push(message);
    setUserList([...userList]);
  }

  function deleteUser(user: User) {
    userList.splice(userList.indexOf(user), 1);
    setUserList([...userList]);
    setMessageList([]);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="board">
          <div className="board__item-chats">
            <UserList deleteUser={deleteUser} userList={userList} />
          </div>
          <div className="board__item-messages">
            <MessageList messageList={messageList} />
            <label>
              <form action="#">
                <Input setMessage={setMessage} element="message" />
                <Button addMessage={addMessage} />
              </form>
            </label>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
