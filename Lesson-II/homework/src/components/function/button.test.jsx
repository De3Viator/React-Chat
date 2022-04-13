import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('test button component', () => {
  it('render button', () => {
    render(<Button />);
  });

  it('calls when clicked', () => {
    const handleClick = jest.fn();
    render(<Button handleClick={handleClick}></Button>);
    fireEvent.click(screen.getByText(/click/));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
