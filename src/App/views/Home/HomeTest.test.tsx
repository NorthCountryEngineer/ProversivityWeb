import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Home from './Home';
import { AuthContext } from "../../functions/Auth";

describe('Home component', () => {
  it('should render the Signup form when the user is not authenticated', () => {
    render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Home />
        </AuthContext.Provider>
    );

    const homeElement = screen.getByTestId('Home');
    expect(homeElement).to.exist;

    const signupFormElement = screen.getByTestId('Signup');
    expect(signupFormElement).to.exist;
  });

  it('should not render the Signup form when the user is authenticated', () => {
    render(
        <AuthContext.Provider value={{ isAuthenticated: true }}>
          <Home />
        </AuthContext.Provider>
    );

    const homeElement = screen.getByTestId('Home');
    expect(homeElement).to.exist;

    const signupFormElement = screen.queryByTestId('Signup');
    expect(signupFormElement).to.not.exist;
  });
});
