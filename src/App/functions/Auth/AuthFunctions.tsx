import { Box, Button, Checkbox, FormControlLabel, Modal, Paper, TextField, Typography } from "@mui/material"
import { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import { createUser } from "../../../graphql/mutations"
import { listUsers } from "../../../graphql/queries"
import { useState, useEffect, createContext} from 'react'
import React from 'react'

export const SignupForm = React.forwardRef(() => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [newsLetter, setNewsLetter] = useState<boolean>(true)
  const [passwordFieldVisible, setPasswordFieldVisible] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<String>("")
  const [verificationCode, setVerificationCode] = useState<string>("")
  const [verificationModalOpen, setVerificationModalOpen] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [createAccountModalOpen, setCreateAccountModalOpen] = useState<boolean>(false)

  const setHook = (event, setHook) => {
    setHook(event.target.value)
  }

  const checkEmailAvailability = async () => {
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

  const createUserEntity = async () => {
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

  const createNewAccount = async () => {
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

  const verifyAccountAndSignIn = async () => {
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

  const handleSubmit = async () => {
    try {
      // Check if email is available
      const isEmailAvailable = await checkEmailAvailability();
      if (!isEmailAvailable) {
        throw new Error("Email is not available");
      }
  
      // Create the user entity
      if(isEmailAvailable){
        const isUserEntityCreated = await createUserEntity();
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

  const openCreateAccountModal = async() =>{
    let formSubmissionSuccessful:boolean = await handleSubmit()
    if(formSubmissionSuccessful){
      setCreateAccountModalOpen(true)
    }
  }

  const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword) //credit: https://mui.com/material-ui/react-text-field/#input-adornments

  const handleInitialPasswordSubmit = async() => {
    const isAccountCreated = await createNewAccount()

    if (!isAccountCreated) {
      throw new Error("Failed to create account")
    }

    if(isAccountCreated) {
      setCreateAccountModalOpen(false)
      setVerificationModalOpen(true)
    }
  }
  
  return (
    <div>
      <Paper sx={{backgroundColor: "rgb(255,255,255,.9)", alignItems:"start", mt:"10%", mr:"10%"}} data-testid="Signup">
        <Typography variant="h4" sx={{backgroundColor:"rgb(0,0,0,0.6)"}}>Sign up for the newsletter!</Typography>
        <div style={{padding:"10px", backgroundColor:"rgb(0,0,0,0.8)"}}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              variant="filled"
              fullWidth
              required
              margin="normal"
              sx={{backgroundColor:"GrayText"}}
              onChange={(e) => setHook(e, setEmail)}
            />

            <br />

            <Button variant="contained" fullWidth color="primary" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={openCreateAccountModal}>
              Create Account
            </Button>
          </form>
        </div>
      </Paper>

      <Modal open={verificationModalOpen} onClose={() => setVerificationModalOpen(false)}>
        <div>
          <h2>Account Verification</h2>
          <TextField
            label="Verification Code that was sent to your email address"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
            fullWidth
          />

          <Button variant="contained" onClick={()=>verifyAccountAndSignIn()}>
            Verify Account
          </Button>
        </div>
      </Modal>

      <Modal
        open={createAccountModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgb(0,0,0,0.4)',
              borderRadius: 2,
              p: 2,
              minWidth: '50%',
            }}
          >
            <h2>Create Account?</h2>

            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="filled"
              fullWidth
              required
              margin="normal"
              sx={{backgroundColor:"GrayText", width:"75%"}}
              onChange={(e) => setHook(e, setPassword)}
            />

            <FormControlLabel 
              control={<Checkbox />} 
              label="Show password" 
              onClick={()=>handleClickShowPassword()}
              onMouseDown={(e)=>e.preventDefault()}
            />

            <br />

            <Button variant="contained" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={()=>handleInitialPasswordSubmit()}>
              Create Account
            </Button>
            <Button variant="contained" color="error" onClick={()=>setCreateAccountModalOpen(false)}>
              Close window
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
})




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
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

