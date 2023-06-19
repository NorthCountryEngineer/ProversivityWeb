import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Home from './Home';
import React from 'react'

describe('Home component', () => {
  it('should render without throwing an error', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('Home');
    expect(homeElement).to.be.ok;
  });
});
