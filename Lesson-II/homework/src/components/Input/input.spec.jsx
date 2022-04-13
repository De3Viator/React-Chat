import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('test input component', () => {
  it('render input', () => {
    render(<Input />);
  });

  it('change input value', () => {
    const handleChange = jest.fn();
    render(<Input handleChange={handleChange}></Input>);
    fireEvent.change(screen.getByTestId('inputName'), {
      target: { value: 'testValue' },
    });
    expect(screen.getByTestId('inputName').value).toBe('testValue');
  });

  it('input change function', () => {
    const handleChange = jest.fn();
    render(<Input handleChange={handleChange}></Input>);
    fireEvent.change(screen.getByTestId('inputName'), {
      target: { value: 'testValue' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
