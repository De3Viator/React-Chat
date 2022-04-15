import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { MessageList } from './components/MessageList/MessageList';
import { UserList } from './components/UserList/UserList';
import { nanoid } from 'nanoid';

import { createTheme, ThemeProvider } from '@mui/material';
import { Message } from './components/shared/message';
import { User } from './components/shared/user';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const formAction = useRef<HTMLFormElement>(null);
  const [send, setSend] = useState<boolean>(false);
  const [userList] = useState<User[]>([
    {
      name: 'Charlie',
      id: nanoid(),
    },
    {
      name: 'Chloe',
      id: nanoid(),
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
        setMessageList((prevValue: Message[]) => [...prevValue, botAnswer]);
      }, 1500);
    }
  }, [send]);

  function changeValue(value: string, changeElement: string): void {
    if (changeElement === 'message') {
      setName(value);
    } else if (changeElement === 'name') {
      setMessage(value);
    }
  }

  function addMessage(): void {
    setSend(true);
    const newMessage: Message = { name, message, id: nanoid() };
    setMessageList((prevValue) => [...prevValue, newMessage]);
    setTimeout(() => {
      setSend(false);
    }, 2000);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <form
          className={send ? 'sended' : 'notSended'}
          ref={formAction}
          action="#"
        >
          <label>
            <p>Name:</p>
            <Input changeValue={changeValue} element={'message'} />
          </label>
          <label>
            <p>Message:</p>
            <Input changeValue={changeValue} element={'name'} />
          </label>
          <div>
            <Button addMessage={addMessage} />
          </div>
        </form>
        <div className="board">
          <div className="board__item">
            <UserList userList={userList} />
          </div>
          <div className="board__item">
            <MessageList messageList={messageList} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
