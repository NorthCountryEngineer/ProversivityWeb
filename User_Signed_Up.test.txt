/** @jest-environment jsdom */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import OneOnOneHelper from '../OneOnOneHelper';

jest.mock('../functions', () => {
    const actualFunctions = jest.requireActual('../functions');
    
    const mockOneOnOneHelperHooks = () => {
      return {
        switchBoard: {
          isUser: true, // Set it to true for this test
          loadingComplete: true,
          oneOnOneDialogueOpen: false,
          newOrganizationFieldOpen: false,
          existingOrganizationFieldOpen: false,
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
  
  test('renders "Welcome <first name>" when the user is authenticated and the user is a user', async () => {
    // Mock that the user is authenticated
    const currentAuthenticatedUserMock = jest.fn().mockResolvedValue({
      attributes: {
        email: "test@example.com", // Provide a sample email here
        // Other required attributes
      }
    })
  
    require('@aws-amplify/auth').Auth.currentAuthenticatedUser = currentAuthenticatedUserMock
  
    render(<OneOnOneHelper />)
  
    await waitFor(() => {
      // Check if the "Welcome <first name>" text is displayed
      expect(screen.getByText((content, element) => {
        const textContent = content.replace(/\s+/g, ' ').trim(); // Normalize spaces and trim
        return textContent === 'Welcome back, TestUser';
      })).toBeInTheDocument();
    })
  })