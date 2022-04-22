import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('test button component', () => {
  const addMessage = jest.fn();
  it('render button', () => {
    render(<Button addField={addMessage} />);
  });

  it('calls when clicked', () => {
    const addMessage = jest.fn();
    render(<Button addField={addMessage}></Button>);
    fireEvent.click(screen.getByText(/enter/i));
    expect(addMessage).toHaveBeenCalledTimes(1);
  });
});
