import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('test input component', () => {
  it('render input', () => {
    render(<Input />);
  });
});
