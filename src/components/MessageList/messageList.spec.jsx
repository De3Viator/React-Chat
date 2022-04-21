import React from 'react';
import { render, screen } from '@testing-library/react';
import { MessageList } from './MessageList';
describe('testing list messages', () => {
  it('render list message', () => {
    const handleMessages = [
      {
        name: 'test',
        message: 'test',
      },
    ];
    render(<MessageList handleMessages={handleMessages} />);
    let messages = screen.getAllByTestId('message');
    expect(messages).toHaveLength(1);
  });

  it('add new message', () => {
    const handleMessages = [];
    render(<MessageList handleMessages={handleMessages} />);
    handleMessages.push({
      name: 'test',
      message: 'test',
    });
    render(<MessageList handleMessages={handleMessages} />);
    let messages = screen.getAllByTestId('message');
    expect(messages).toHaveLength(1);
  });
});
