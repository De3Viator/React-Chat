import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="chats" element={<Chat />}>
            <Route path=":id" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
