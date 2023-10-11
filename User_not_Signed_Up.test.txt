/** @jest-environment jsdom */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import OneOnOneHelper from '../OneOnOneHelper';
import { Amplify } from 'aws-amplify';
import awsmobile from '../../../../aws-exports';

Amplify.configure(awsmobile);

// Mock the OneOnOneHelperHooks function to return the expected structure
jest.mock('../functions', () => {
  const actualFunctions = jest.requireActual('../functions');

  const mockOneOnOneHelperHooks = () => {
    return {
      switchBoard: {
        loadingComplete: true,
      },
      userMetaData: {
        firstName: "TestUser",
        lastName: "TestUser",
        email: "XXXXXXXXXXXXXXXXX",
        role: "EMPLOYEE",
        organization: "N/A"
      },
      fetchUserData: jest.fn(),
      setUserMetaData: jest.fn(),
      setSwitchBoard: jest.fn(),
      setUserData: jest.fn(), 
      setSwitchData: jest.fn(), 
      switchFields: jest.fn()
    };
  };

  actualFunctions.OneOnOneHelperHooks = mockOneOnOneHelperHooks;

  return actualFunctions;
});


test('renders Amplify useAuthentication() view when user is not authenticated', async () => {
  render(<OneOnOneHelper />)
  
  await waitFor(() => {
    const amplifyLoginScreen = screen.getByRole('tabpanel', { name: 'Sign In' })
    expect(amplifyLoginScreen).toBeInTheDocument()
  });

});


test('renders the "create account" view when user is authenticated but has not signed up for the tool yet', async () => {
  // Mock that the user is authenticated
  const currentAuthenticatedUserMock = jest.fn().mockResolvedValue({
    attributes: {
      email: "test@example.com", // Provide a sample email here
      // Other required attributes
    }
  });
  require('@aws-amplify/auth').Auth.currentAuthenticatedUser = currentAuthenticatedUserMock
  
  render(<OneOnOneHelper />)

  await waitFor(() => {
    // Check if the "create account" view is displayed
    expect(screen.getByText('Click here to Sign up')).toBeInTheDocument();
  })
})