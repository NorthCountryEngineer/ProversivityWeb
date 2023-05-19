import Image from "mui-image"
import municipalities from './municipalities.json';
import styled from "@emotion/styled";

import {
    Box, 
    Button, 
    Divider, 
    Grid, 
    List, 
    ListItem,
    ListItemIcon, 
    ListItemText, 
    Stack, 
    TextField, 
    Typography, 
    Autocomplete, 
    Stepper, 
    Step, 
    StepLabel, 
    Alert, 
    Modal, 
    StepIconProps  
} from "@mui/material"

import { getUser } from "../../../../graphql/queries";
import { CheckCircle } from "@mui/icons-material";
import { useAuthentication } from "../../Authentication";
import { AboutCalloutsProps } from "./AboutTypes"
import { useEffect, useState } from 'react';
import { ServiceProviderSignupHooks } from "./AboutHooks";
import { API, Auth, graphqlOperation } from 'aws-amplify';

/**
 * @component VerificationModal
 * @description Modal component for account verification.
 * 
 * @input handleVerifyAccount: Function to handle account verification.
 * @input open: Boolean indicating whether the modal is open.
 * @input onClose: Function to handle modal close.
 * 
 * @output None.
 * 
 * @functionality Renders a modal for account verification.
 * Allows users to enter a verification code.
 * Displays an error message if provided.
 * Calls the handleVerifyAccount function when the user clicks the "Verify Account" button.
 */
export const VerificationModal = ({ handleVerifyAccount, open, onClose }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');
  
    return (
      <Modal open={open} onClose={() => onClose(false)}>
        <div>
          <h2>Account Verification</h2>
          <TextField
            label="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
            fullWidth
          />
          {error && <p>{error}</p>}
          <Button variant="contained" onClick={()=>handleVerifyAccount(verificationCode)}>
            Verify Account
          </Button>
        </div>
      </Modal>
    );
};

/**
 * @function checkUserVerification
 * @description Function to check if a user is verified based on user attributes.
 * 
 * @input userAttributes: Array of user attributes.
 * 
 * @output Promise<boolean> indicating whether the user is verified.
 * 
 * @functionality Checks if the user attributes include an attribute with the name "email_verified" and a value of "true".
 * Returns true if the user is verified, false otherwise.
 * If an error occurs, logs the error and returns false.
 */
const checkUserVerification = async(userAttributes):Promise<boolean> => {
    try{
        const isVerified = userAttributes.some(
            (attr) => attr.Name === 'email_verified' && attr.Value === 'true'
        );
        return(isVerified)
    } catch(error){
        console.error(error)
        return false
    }
}

/**
 * @function checkUserObjectExists
 * @description Function to check if a user object exists based on the current user.
 * 
 * @input currentUser: Current authenticated user object.
 * 
 * @output Promise<boolean> indicating whether the user object exists.
 * 
 * @functionality Retrieves the user ID from the current user attributes.
 * Performs a GraphQL query to fetch the user object using the user ID.
 * Returns true if the user object exists, false otherwise.
 * If an error occurs, logs the error and returns false.
 */
const checkUserObjectExists = async (currentUser):Promise<boolean> => {
    try {
        const userId = currentUser.attributes.sub;
        const query = graphqlOperation(getUser, { id: userId });
        const data:any = await API.graphql(query);
        return !!data.getUser; 
    } catch (error) {
        console.error(error);
        return false;
    }
};

/**
 * @function fetchUserData
 * @description Function to fetch user data and update verification success and completion status.
 * 
 * @input setVerificationSuccess: Function to set the verification success state.
 * @input setIsComplete: Function to set the completion status state.
 * 
 * @output None.
 * 
 * @functionality Retrieves the current authenticated user.
 * Fetches the user attributes associated with the current user.
 * Checks if the user is verified by calling the checkUserVerification function.
 * If the user is verified, checks if the user object exists by calling the checkUserObjectExists function.
 * Updates the verification success and completion status based on the results.
 */
const getUserData = async (setter) => {
    let currentUser:string
    let userAttributes:any
    let userVerified:boolean = false
    let userObjectExists:boolean = false
    try{
    currentUser = await Auth.currentAuthenticatedUser();
    userAttributes = await Auth.userAttributes(currentUser)
    userVerified = await checkUserVerification(userAttributes)
    userVerified && (userObjectExists = await checkUserObjectExists(currentUser))

    setter('verificationSuccess',userVerified)
    setter('isComplete',userObjectExists)
    }catch(error){
        console.error("Error with getUserData: ", error)
    }
};

const SignupForm = () => {
    const formHooks = ServiceProviderSignupHooks();
    const { setHookValue, ...hooks } = formHooks;


    let isAuthenticated:boolean = useAuthentication()

    useEffect(() => {
        setHookValue('isAuthenticated',isAuthenticated)
        hooks.isAuthenticated && getUserData(setHookValue);
    }, [hooks.isAuthenticated]);
      
    const handlePasswordChange = (e) => {
        setHookValue('password',e.target.value)
    }

    const handleConfPasswordChange = (e) => {
        setHookValue('confPassword',e.target.value)
    };

    const handleConfPasswordBlur = () => {
        setHookValue('isConfPasswordFocused',true)
        setHookValue('passwordsMatch',hooks.password===hooks.confPassword)
    };

    const handleNewAccount = async (e) => {
        e.preventDefault();
      
        if (hooks.passwordsMatch) {
          try {
            // Call Amplify's create account service
            const user = await Auth.signUp({
              username: hooks.email, 
              password: hooks.password,
            });
            console.log('Account created successfully:', user);
            handleVerificationOpen()
          } catch (error) {
            console.error('Error creating account:', error);
          }
        } else{
            throw new Error("Passwords in UI did not match before handleNewAccount called, blocking call")
        }
    };
    
    const handleBack = () => {
        setHookValue('activeStep',(prevStep) => prevStep - 1)
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if(hooks.password===hooks.confPassword){
                await Auth.signUp({
                    username: hooks.email,
                    password: hooks.password,
                    attributes: {
                      email: hooks.email,
                      given_name: hooks.firstName,
                      family_name: hooks.lastName,
                    },
                  }).then(() => {
                    return Auth.signIn(hooks.email, hooks.password);
                  }).catch((error) => {
                    throw new Error(error);
                  });
            }
            if (hooks.password !== hooks.confPassword) {
                setHookValue('errorMessage','Passwords do not match')
                return;
            }  

            // Clear form inputs
            setHookValue('email','')
            setHookValue('firstName','')
            setHookValue('lastName', '')
            setHookValue('companyName','')
            setHookValue('address','')
            setHookValue('phone','')
            setHookValue('skills','')

        } catch (error:any) {
            console.error('Error signing up:', error)
            setHookValue('errorMessage',error.message)
        }
    };

    const handleVerificationOpen = () => {
        setHookValue('verificationModalOpen',true)
    };

    const handleVerificationClose = (success) => {
        setHookValue('verificationModalOpen',false)
        
        if (success) {
            setHookValue('verificationSuccess',true)
            setHookValue('activeStep',hooks.activeStep+1)
        }
    };

    const handleReverificationButtonClick = async () => {
        try {
            await Auth.resendSignUp(hooks.email);
            setHookValue('verificationModalOpen',true)
        } catch (error) {
            console.error('Error resending verification email:', error);
        }
    }

    const handleVerifyAccount = async (verificationCode) => {
        console.log("Code",verificationCode)
        try {
        await Auth.confirmSignUp(hooks.email, verificationCode);
            // Account verification successful
            handleVerificationClose(true)
        } catch (error) {
            handleVerificationClose(false)
            throw new Error('Invalid verification code')
        }
    };

    const StyledAutocomplete = styled(Autocomplete)`
        .MuiAutocomplete-listbox {
            background-color: black; // Set your desired background color
            color: white; // Set your desired text color
        }
    `

    const StepperSuccessIcon = (props: StepIconProps) => {
        const { active, completed } = props;
        
        if (completed) {
            return <CheckCircle color="success" />;
        }
        
        return <div className={active ? 'MuiStepIcon-active' : 'MuiStepIcon-inactive'}>{props.icon}</div>;
    };


    const renderCreateAccountStepLabel = hooks.isAuthenticated ? (
        <StepLabel StepIconComponent={StepperSuccessIcon}>
          Create Account
        </StepLabel>
      ) : (
        <StepLabel>
          Create Account
        </StepLabel>
    );
        

    return(
        <>
            <Box
                sx={{
                    minHeight: "10vh", // Adjust the height as needed
                    display: "flex",
                    justifyContent: "center", // Adjust the vertical alignment as needed
                    alignItems: "center",
                    flexDirection: "row", // Adjust the direction based on device
                    gap: 2,
                    p: 2, 
                }}
            >
                <Box
                    sx={{
                        width: '550px',
                        p: 5,
                        bgcolor: 'primary.main',
                        boxShadow: 1,
                        alignItems: 'center',
                        textAlign: 'center',
                        flex: 1,
                    }}
                >
                    <Stack direction="column">
                        <Typography variant="h4">
                            Sign up!
                        </Typography>

                        <Divider sx={{m:2}} />

                        <form onSubmit={handleSubmit} style={{height:"100%"}} >
                            <Stack direction="row">
                                <Grid container>
                                    <Grid item xs={12} sx={{ objectFit:'contain', height:'400px' }}>
                                    <Stepper activeStep={hooks.activeStep} alternativeLabel sx={{ backgroundColor: 'primary.main' }}>
                                        <Step>
                                            {renderCreateAccountStepLabel}
                                        </Step>
                                        <Step>
                                            <StepLabel>
                                                Personal Information
                                            </StepLabel>
                                        </Step>
                                        <Step>
                                            <StepLabel>
                                                Address
                                            </StepLabel>
                                        </Step>
                                        <Step>
                                            <StepLabel>
                                                Contact Information
                                            </StepLabel>
                                        </Step>
                                    </Stepper>

                                        {hooks.activeStep === 0 && (
                                            !hooks.isAuthenticated ? (
                                            <div style={{backgroundColor:'primary.main'}}>
                                                <TextField
                                                    label="Email"
                                                    type="email"
                                                    value={hooks.email}
                                                    onChange={(e) => setHookValue('email',e.target.value)}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }} 
                                                />
                                                <Box sx={{height:"40px"}} >
                                                    {!hooks.passwordsMatch && hooks.isConfPasswordFocused && (
                                                        <Alert severity="warning">Password mismatch</Alert>
                                                    )}
                                                </Box>
                                                <TextField
                                                    label="Password"
                                                    type="password"
                                                    value={hooks.password}
                                                    onChange={handlePasswordChange}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                    error={!hooks.passwordsMatch && hooks.isConfPasswordFocused}
                                                    helperText={!hooks.passwordsMatch && 'Passwords do not match'}
                                                />

                                                <TextField
                                                    label="Confirm Password"
                                                    type="password"
                                                    value={hooks.confPassword}
                                                    onChange={handleConfPasswordChange}
                                                    onBlur={handleConfPasswordBlur}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:1,
                                                        mb:3
                                                    }}

                                                    error={!hooks.passwordsMatch && hooks.isConfPasswordFocused}
                                                />
                                            </div>):(
                                                <div style={{backgroundColor:'primary.main'}}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleReverificationButtonClick}
                                                        sx={{ mt: 10 }}
                                                        color="secondary"
                                                        >
                                                        Account not verified, click to send new verification email
                                                    </Button>
                                                </div>
                                            )
                                        )}

                                        {hooks.activeStep === 1 && (
                                            <>
                                            <TextField
                                                    label="First Name"
                                                    type="text"
                                                    value={hooks.firstName}
                                                    onChange={(e) => setHookValue('firstName',e.target.value)}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />

                                                <TextField
                                                    label="Last Name"
                                                    type="text"
                                                    value={hooks.lastName}
                                                    onChange={(e) => setHookValue('lastName',e.target.value)}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />

                                                <TextField
                                                    label="Company Name"
                                                    type="text"
                                                    value={hooks.companyName}
                                                    onChange={(e) => setHookValue('companyName',e.target.value)}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />

                                            </>
                                        )}
                                
                                        {hooks.activeStep === 2 && (
                                            <>
                                            <TextField
                                                label="Address"
                                                type="text"
                                                value={hooks.address}
                                                onChange={(e) => setHookValue('address',e.target.value)}
                                                fullWidth
                                                sx={{
                                                    mt:3,
                                                    mb:3
                                                }}
                                            />

                                            <StyledAutocomplete
                                                disablePortal
                                                options={municipalities.map((municipality) => municipality.village)}
                                                renderInput={(params) => <TextField {...params} label="Address" />}
                                                value={hooks.town}
                                                onChange={(event, newValue:any) => setHookValue('town',newValue)}
                                                fullWidth
                                            />
                                            
                                            </>
                                        )}

                                        {hooks.activeStep === 3 && (
                                            <>
                                                <TextField
                                                    label="Phone"
                                                    type="tel"
                                                    value={hooks.phone}
                                                    onChange={(e) => setHookValue('phone',e.target.value)}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />
                                        
                                                <TextField
                                                    label="Skills"
                                                    type="text"
                                                    value={hooks.skills}
                                                    onChange={(e) => setHookValue('skills',e.target.value)}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />
                                            </>
                                        )}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Divider sx={{m:2}} />
                                    </Grid>
                                    <Grid item xs={12}>                
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                            >

                                            {
                                                hooks.activeStep > 0 ? (
                                                <>
                                                    <Button variant="outlined" color="primary" onClick={handleBack} sx={{ mr: 2 }}>
                                                        Back
                                                    </Button>
                                                
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                        bgcolor: 'secondary.main',
                                                        color: 'common.white',
                                                        '&:hover': {
                                                            bgcolor: 'secondary.dark',
                                                        },
                                                        fontSize: 16,
                                                        }}
                                                    >
                                                        {hooks.activeStep === 3 ? 'Sign Up' : 'Next'}
                                                    </Button>
                                                </>
                                                ):(
                                                    <Button variant="outlined" color="primary" onClick={handleNewAccount} sx={{ mr:2 }}>
                                                        Create Account
                                                    </Button>
                                                )
                                            }
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Box>

            <VerificationModal
                handleVerifyAccount={handleVerifyAccount}
                open={hooks.verificationModalOpen}
                onClose={handleVerificationClose}
            />
        </>
    );
};

export default SignupForm;


export const CalloutBoxes = ({ isMobile, callouts }: AboutCalloutsProps) => {
  return (
    <Box
      sx={{
        minHeight: "10vh",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row", 
        gap: 2, 
        p: 2, 
      }}
    >
      {callouts.map((callout, index) => (
        <Box
          key={index}
          sx={{
            width: '550px',
            height: '660px',
            p: 5,
            boxShadow: 1,
            alignItems: 'center',
            textAlign: 'center',
            flex: 1,
          }}
        >
            <Stack direction="column">

              <Typography variant="h4">
                {callout.title}
              </Typography>

              <Divider sx={{m:2}} />

                {callout.image &&
                  <Image
                    src={callout.image}
                    alt={callout.title}
                    style={{ objectFit:'contain', height:'400px' }}
                  />
                }
                <List>
                  {callout.steps.map((point, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{point.icon}</ListItemIcon>
                      <ListItemText primary={point.text} />
                    </ListItem>
                  ))}
                </List>
            </Stack>

          <Divider sx={{m:2}} />

          <Button
            variant="contained"
            sx={{
              bgcolor: 'secondary.main',
              color: 'common.white',
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
              fontSize: 16,
            }}
          >
            {callout.buttonText}
          </Button>
        </Box>
      ))}
    </Box>
  )
}
