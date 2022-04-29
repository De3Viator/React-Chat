import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './components/store/store';

const Chat = lazy(() =>
  import('./components/Chat/Chat').then((module) => ({
    default: module.Chat,
  }))
);

const Profile = lazy(() =>
  import('./components/Profile/Profile').then((module) => ({
    default: module.Profile,
  }))
);

const Home = lazy(() =>
  import('./components/Home/Home').then((module) => ({
    default: module.Home,
  }))
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="home" element={<Home />} />
              <Route path="chats" element={<Chat />}>
                <Route path=":id" />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
