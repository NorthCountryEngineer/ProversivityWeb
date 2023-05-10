import { useState, useEffect } from 'react';

/**
 * Get the app client ID from local storage.
 * @returns The app client ID or null if it can't be found.
 */
const getAppClientIdFromLocalStorage = (): any => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("CognitoIdentityServiceProvider.")) {
      const parts = key.split(".");
      console.log(parts[3]==="accessToken")
      if (parts[3]==="accessToken") {
        return([true,key])
      }
    }
  }
  return [false,null];
};

/**
 * Get the app client access token from local storage.
 * @returns The access token or null if it can't be found.
 */
const getAppClientAccessToken = (): boolean => {
    const [isAuthenticated,key] = getAppClientIdFromLocalStorage();
    return(isAuthenticated)
}

/**
 * Custom hook to check if the user is authenticated.
 * @returns A boolean indicating whether the user is authenticated.
 */
const useAuthentication = (): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getAppClientAccessToken());

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(getAppClientAccessToken());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return isAuthenticated;
};

export default useAuthentication;
