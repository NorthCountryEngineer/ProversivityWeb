import { Auth, Hub } from 'aws-amplify'
import { useState, useEffect, createContext} from 'react'

/**
 * Get the app client ID from local storage.
 * @returns The app client ID or null if it can't be found.
 */
export const getAppClientIdFromLocalStorage = (): any => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith("CognitoIdentityServiceProvider.")) {
      const parts = key.split(".")
      if (parts[3]==="accessToken") {
        return([true,key])
      }
    }
  }
  return [false,null]
}

/**
 * Get the app client access token from local storage.
 * @returns The access token or null if it can't be found.
 */
export const getAppClientAccessToken = (): boolean => {
    const [isAuthenticated,key] = getAppClientIdFromLocalStorage()
    return(isAuthenticated)
}

/**
 * Custom hook to check if the user is authenticated.
 * @returns A boolean indicating whether the user is authenticated.
 */
export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status when the component mounts
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    // Listen for sign in and sign out events
    const listener = Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });

    // Cleanup listener when the component unmounts
    return () => Hub.remove('auth', listener);
  }, []);

  return isAuthenticated;
}



export const handleSignUp = async (email, firstName, lastName, password) => {
  try {
    const user = await Auth.signUp({
      username: email,
      password: password, // Set the password for the user
      attributes: {
        email,
        'custom:firstName': firstName,
        'custom:lastName': lastName,
        // Add additional attributes for Customer or ServiceProvider specific fields
      },
    })

    // Create Customer or ServiceProvider object based on user type
    if (true/* Check if the user is a Customer */) {
      // Create Customer object using Amplify's API
    } else if (false/* Check if the user is a ServiceProvider */) {
      // Create ServiceProvider object using Amplify's API
    }

    // Handle successful sign-up
    console.log('User sign-up successful:', user)
    // Add code for redirection or displaying success message
  } catch (error) {
    console.log('Error signing up:', error)
    // Add code to display error message to the user
  }
}

export const AuthContext = createContext<{ isAuthenticated: boolean } | null>(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status when the component mounts
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    // Listen for sign in and sign out events
    const listener = Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true);
          break;
        case 'signOut':
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });

    // Cleanup listener when the component unmounts
    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
