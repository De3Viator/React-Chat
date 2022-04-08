import { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/classes/Button';
import Input from './components/classes/Input';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');
  const formAction = useRef(null);
  const [send,setSend] = useState(false);

  useEffect( () => {
    if(send === true) {
      const botAnswer = {
        name:'bot',
        message:'Ваше сообщение было отправлено!'
      }
      setTimeout(() => {
        setMessageList(prevValue => [...prevValue,botAnswer]);
      },1500);
    }
  },[send])

  function changeValue(value,changeElement) {
    if(changeElement === 'message') {
      setName(value);
    } else if(changeElement === 'name') {
      setMessage(value);
    }
  }

  function addMessage() {
    setSend(true);
    setMessageList(prevValue => [...prevValue,{name,message}]);
    setTimeout(() => {
      setSend(false)
    }, 2000)
  }

  return (
    <>
    <form className={send ? 'sended' : 'notSended'} ref={formAction} action='#'>
      <Button addMessage={addMessage}/>
      Name:<Input changeValue={changeValue} element={'message'}/>
      Message<Input message={message} changeValue={changeValue} element={'name'}/>
    </form>
    <ul>
      {messageList.map((message) => (
          <li>{message.name}:{message.message}</li>
      ))}
    </ul>
    </>
  );
}

export default App;
