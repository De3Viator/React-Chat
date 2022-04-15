import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('test button component', () => {
  const addMessage = jest.fn();
  it('render button', () => {
    render(<Button addMessage={addMessage} />);
  });

  it('calls when clicked', () => {
    const addMessage = jest.fn();
    render(<Button addMessage={addMessage}></Button>);
    fireEvent.click(screen.getByText(/click/));
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
});
