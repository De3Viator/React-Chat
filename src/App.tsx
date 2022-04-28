import React, { useReducer } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import { Layout } from './components/Layout/Layout';
import { Profile } from './components/Profile/Profile';
import { Home } from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import { checkReducer } from './components/context/checkReduser';
import { CheckContext, initialState } from './components/context/checkContext';

function App() {
  const [visibility, dispatch] = useReducer(checkReducer, initialState);
  return (
    //<Provider store={store}>
    <CheckContext.Provider
      value={{
        visibility,
        dispatch,
      }}
    >
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
    </CheckContext.Provider>
    //</Provider>
  );
}

export default App;
