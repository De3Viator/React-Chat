import { render } from '@testing-library/react';
import { Home } from './Home';
import React from 'react';

describe('test home component', () => {
  it('render home', () => {
    render(<Home />);
  });
});
