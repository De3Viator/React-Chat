import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { UserList } from './UserList';
import { User } from '../shared/user';
import { nanoid } from 'nanoid';
import { MemoryRouter } from 'react-router-dom';
describe('testing list users', () => {
  it('render user list', () => {
    const deleteUser = jest.fn();
    const users: User[] = [
      {
        name: 'test',
        id: nanoid(),
        messages: [],
      },
    ];
    render(<UserList deleteUser={deleteUser} userList={users} />, {
      wrapper: MemoryRouter,
    });
    const userEl = screen.getAllByTestId('message');
    expect(userEl).toHaveLength(1);
  });

  it('delete user', () => {
    const users: User[] = [
      {
        name: 'test',
        id: nanoid(),
        messages: [],
      },
    ];
    const deleteUser = jest.fn((user: User) => {
      users.splice(users.indexOf(user), 1);
    });

    render(<UserList deleteUser={deleteUser} userList={users} />, {
      wrapper: MemoryRouter,
    });

    fireEvent.click(screen.getByTestId('deleteUser'));
    expect(deleteUser).toBeCalledTimes(1);
    expect(users).toHaveLength(0);
  });
});
