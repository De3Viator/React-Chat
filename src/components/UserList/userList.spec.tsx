import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';
import { User } from '../shared/user';
import { nanoid } from 'nanoid';
//для добавления в pr
describe('testing list messages', () => {
  it('render list message', () => {
    const users: User[] = [
      {
        name: 'test',
        id: nanoid(),
      },
    ];
    render(<UserList userList={users} />);
    const userEl = screen.getAllByTestId('message');
    expect(userEl).toHaveLength(1);
  });
});
