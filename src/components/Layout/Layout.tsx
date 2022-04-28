import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header>
        <Link to="/chats">Chats</Link>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
