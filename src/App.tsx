import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import { Layout } from './components/Layout/Layout';
import { Profile } from './components/Profile/Profile';
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './components/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="home" element={<Home />} />
            <Route path="chats" element={<Chat />}>
              <Route path=":id" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
