import { API, Auth, Hub, graphqlOperation } from "aws-amplify";
import { createContext, useEffect, useState } from "react";
import { listUsers } from "../../../graphql/queries";
import { createUser } from "../../../graphql/mutations";
import React from "react";

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


export const AuthContext = createContext<{ isAuthenticated: boolean } | null>(null)

export const checkEmailAvailability = async (email) => {
  try {
      // Temporarily change auth type
      API.configure({
          'aws_appsync_authenticationType': 'AWS_IAM',
      })

      const response:any = await API.graphql(graphqlOperation(listUsers, { filter: { email: { eq: email } } }));
      const users = response.data.listUsers.items;

      // Change auth type back to the default
      API.configure({
          'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS',
      })

      return users.length === 0;
  } catch (error) {
      console.error('Error checking email availability:', error);
  }
}

export const handleSubmit = async (
  email:string,
  firstName:string,
  lastName:string,
  newsLetter:boolean
) => {
  try {
    // Check if email is available
    const isEmailAvailable = await checkEmailAvailability(email);
    if (!isEmailAvailable) {
      throw new Error("Email is not available");
    }

    // Create the user entity
    if(isEmailAvailable){
      const isUserEntityCreated = await createUserEntity(
        email,
        firstName,
        lastName,
        newsLetter);
      if (!isUserEntityCreated) {
        throw new Error("Failed to create user entity");
      }
    }
    return true;

    } catch (error) {
      // If an error occurred at any step, log it and return false
      console.error("Error in handleSubmit: ", error);
      return false;
    }
}

export const createUserEntity = async (
  email:string,
  firstName:string,
  lastName:string,
  newsLetter:boolean
) => {
  const newUser = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    newsletter: newsLetter,
  };

  try {
    API.configure({
      'aws_appsync_authenticationType': 'AWS_IAM',
     })

    const result = await API.graphql(graphqlOperation(createUser, {input: newUser}));
    console.log('User created: ', result);

    API.configure({
      'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS',
    })
    return true;
  } catch (error) {
    console.error('Error creating user: ', error);
    return false;
  }
}

export const createNewAccount = async (
  email:string,
  password:string
) => {
  try {
    let newAccountCreated = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    })

    console.log(newAccountCreated)

    if(newAccountCreated){
      return true
    }
  } catch (error) {
    console.error("Error creating account", error);
    return false;
  }
}

export const verifyAccountAndSignIn = async (
  email:string,
  verificationCode:string,
  password:string,
  setVerificationModalOpen:any
) => {
  try {
    await Auth.confirmSignUp(email, verificationCode);
    const user = await Auth.signIn(email, password);
    console.log("User signed in", user);
    // Close verification modal
    setVerificationModalOpen(false);
    return true;
  } catch (error) {
    console.error("Invalid verification code or Login failed", error);
    // Close verification modal
    setVerificationModalOpen(false);
    return false;
  }
}

export const openCreateAccountModal = async(
  email:string,
  firstName:string,
  lastName:string,
  newsLetter:boolean,
  setCreateAccountModalOpen:any
) =>{
  let formSubmissionSuccessful:boolean = await handleSubmit(
    email,
    firstName,
    lastName,
    newsLetter)
  if(formSubmissionSuccessful){
    setCreateAccountModalOpen(true)
  }
}

export const handleClickShowPassword = (
  setShowPassword:any
) => {
  setShowPassword((showPassword) => !showPassword)
} //credit: https://mui.com/material-ui/react-text-field/#input-adornments

export const handleInitialPasswordSubmit = async(
  email:string,
  password:string,
  setCreateAccountModalOpen:any,
  setVerificationModalOpen:any
) => {
  const isAccountCreated = await createNewAccount(email,password)

  if (!isAccountCreated) {
    throw new Error("Failed to create account")
  }

  if(isAccountCreated) {
    setCreateAccountModalOpen(false)
    setVerificationModalOpen(true)
  }
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

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status when the component mounts
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));

    // Listen for sign in and sign out events
    Hub.listen('auth', (data) => {
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
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};


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

export const setHook = (event, setHook) => {
  setHook(event.target.value)
}