import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Input } from './Input';

describe('test input component', () => {
  it('render input', () => {
    const changeValue = jest.fn();
    render(<Input element="name" changeValue={changeValue} />);
  });

  it('change input value', () => {
    const changeValue = jest.fn();
    render(<Input element="name" changeValue={changeValue}></Input>);
    userEvent.type(screen.getByRole('textbox') as HTMLInputElement, 'Alexios');
    expect(screen.getByRole('textbox')['value']).toBe('Alexios');
  });

  it('input change function', () => {
    const changeValue = jest.fn();
    render(<Input element="name" changeValue={changeValue}></Input>);
    userEvent.type(screen.getByRole('textbox') as HTMLInputElement, 'Alexios');
    expect(changeValue).toHaveBeenCalledTimes(7);
  });
});
