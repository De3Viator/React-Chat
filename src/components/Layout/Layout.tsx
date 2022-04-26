import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header>
        <Link to="/chats">Chats</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
