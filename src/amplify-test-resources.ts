import { Auth } from 'aws-amplify'
import {jest} from '@jest/globals'

// Mock the Auth.signIn function for testing
export const signInMock = jest.fn((username: string, password: string) => {
  // Customize this mock behavior as needed for your tests
  // For example, you can check if the provided username and password are valid

  if (username === 'validuser' && password === 'validpassword') {
    return Promise.resolve({
      // Mocked authentication response
      // You can customize this response object based on your needs
      username: 'validuser',    
      attributes: {
        email: 'validuser@example.com',
        // Add any other user attributes as needed
      },
    });
  } else {
    // Simulate a failed authentication
    return Promise.reject(new Error('Invalid username or password'));
  }
});

// Mock the entire Auth module
jest.mock('aws-amplify');
Auth.signIn = signInMock;
