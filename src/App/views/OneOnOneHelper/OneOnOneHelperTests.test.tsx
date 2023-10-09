/** @jest-environment jsdom */
import { render, screen, act, waitFor } from '@testing-library/react';
import {jest} from '@jest/globals';
import '@testing-library/jest-dom'
import React from 'react';
import OneOnOneHelper from './OneOnOneHelper';
import { Amplify } from 'aws-amplify';
import awsmobile from '../../../aws-exports';

Amplify.configure(awsmobile);

test('renders loading text when loadingComplete is false', async () => {
  // Mock the OneOnOneHelperHooks function to return loadingComplete as false
  jest.mock('./functions', () => {
    const actualFunctions:any = jest.requireActual('./functions');
    const mockOneOnOneHelperHooks = () => {
      return {
        switchBoard: {
          loadingComplete: false,
        },
      };
    };

    actualFunctions.OneOnOneHelperHooks = mockOneOnOneHelperHooks;

    return actualFunctions;
  });

  render(<OneOnOneHelper />)
  
  await waitFor(() => {
    const amplifyLoginScreen = screen.getByRole('tabpanel', { name: 'Sign In' })
    expect(amplifyLoginScreen).toBeInTheDocument()
  });

});


/* <OneOnOneSignUpDialogueComponent 
      open = {true}
      setOpen = {setSignupDialogueOpen}
      userMetaData = {initialUserMetaData}
      setUserMetaData = {setUserMetaData}
      setUserData = {setUserData}
    /> */