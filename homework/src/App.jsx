import { useState } from 'react';
import './App.css';
//import { Message } from './components/functions/Message';
import { Message } from './components/classes/Message';

function App() {
  const [text,setText]=useState('232');

  function changeValue(event) {
    setText(event.target.value);
  }

  return (
    <>
    <Message text={text} changeValue={changeValue}/>
    </>
  );
}

export default App;
