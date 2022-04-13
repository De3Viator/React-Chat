import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('test button component', () => {
  it('render button', () => {
    render(<Button />)
  });
});
