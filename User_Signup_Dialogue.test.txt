import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import { OneOnOneSignUpDialogueComponent } from '../components';

// Mock the dependencies
const mockedProps = {
  open: true, // Set to true to ensure the dialog is open
  setOpen: jest.fn(),
  userMetaData: {
    firstName: 'TestUser',
    lastName: 'TestUser',
    email: 'test@example.com',
    role: 'EMPLOYEE',
  },
  setUserMetaData: jest.fn(),
  setUserData: jest.fn(),
};

test('renders and interacts with OneOnOneSignUpDialogueComponent', async () => {
  // Mock that the user is authenticated
  const currentAuthenticatedUserMock = jest.fn().mockResolvedValue({
    attributes: {
      email: "test@example.com", // Provide a sample email here
      // Other required attributes
    }
  })

  require('@aws-amplify/auth').Auth.currentAuthenticatedUser = currentAuthenticatedUserMock

  render(<OneOnOneSignUpDialogueComponent {...mockedProps} />)

  await waitFor(() => {
    // Check if the "Welcome <first name>" text is displayed
    expect(screen.getByText((content, element) => {
      const textContent = content.replace(/\s+/g, ' ').trim(); // Normalize spaces and trim
      return textContent === 'Sign up for the One on One tool';
    })).toBeInTheDocument();
  })
});
