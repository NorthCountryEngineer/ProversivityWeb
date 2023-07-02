import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Authenticate from '../views/Authenticate/Authenticate';

describe('Home component', () => {
  it('should render the Signup form when the user is not authenticated', () => {
    render(
          <Authenticate />
    );

    const homeElement = screen.getByTestId('Home');
    expect(homeElement).to.exist;

    const signupFormElement = screen.getByTestId('Signup');
    expect(signupFormElement).to.exist;
  });

  it('should not render the Signup form when the user is authenticated', () => {
    render(
        <Authenticate />
    );

    const homeElement = screen.getByTestId('Home');
    expect(homeElement).to.exist;

    const signupFormElement = screen.queryByTestId('Signup');
    expect(signupFormElement).to.not.exist;
  });
});
