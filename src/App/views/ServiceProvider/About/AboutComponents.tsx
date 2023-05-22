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

const SignupForm = () => {
    const formHooks = ServiceProviderSignupHooks();
    console.log(formHooks)
    const setHookValue = (type,value) => console.log(type,value)

    const { ...hooks } = {
        address: '',
        activeStep: 0,
        companyName: '',
        confPassword: '',
        email: '',
        errorMessage: '',
        firstName: '',
        loadingComplete: false,
        isAuthenticated: false,
        isComplete: false,
        isConfPasswordFocused: false,
        lastName: '',
        password: '',
        passwordsMatch: true,
        phone: '',
        skills: '',
        town: '',
        userID: '',
        verificationCodeSent: false,
        verificationModalOpen: false,
        verificationSuccess: false
    }

      
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

    const handleNewAccountFormSubmitCall = async (e) => {
        e.preventDefault();
      
        if (hooks.passwordsMatch) {
          try {
            const user = await Auth.signUp({
              username: hooks.email, 
              password: hooks.password,
            })

            console.log('Account created successfully:', user);

            handleVerificationOpen()

          } catch (error) {
            console.error('Error creating account:', error);
          }
        } else{
            throw new Error("Passwords in UI did not match before handleNewAccountFormSubmitCall called, blocking call")
        }
    };
    
    const handleBack = () => {
        setHookValue('activeStep',(prevStep) => prevStep - 1)
    };
    
    const handleSignUpFormSubmitCall = async (event) => {
        event.preventDefault()
        //todo: Implement this for user object.

        /**if(hooks.password===hooks.confPassword){
            try{
                const signUpAttributes = {
                    username: hooks.email,
                    password: hooks.password,
                    attributes: {
                        email: hooks.email,
                        given_name: hooks.firstName,
                        family_name: hooks.lastName,
                    },
                }
                const signUserUp =  await Auth.signUp(signUpAttributes)
                return(signUserUp)
            
            }catch(error:any){
                throw new Error(error)
            }
        }
        else {
            setHookValue('errorMessage','Passwords do not match')
            return;
        }  */


    }

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

    const handleSignIn = async () => {
        try{
            let signIn = await Auth.signIn(hooks.email, hooks.password)
            console.log("User signed in:",signIn)
        }catch(error){
            console.error(error)
        }
    }

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
            {hooks.isComplete ? (
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

                            <form onSubmit={handleSignUpFormSubmitCall} style={{height:"100%"}} >
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
                                                        <Button variant="outlined" color="primary" onClick={handleNewAccountFormSubmitCall} sx={{ mr:2 }}>
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
            ):(
                <></>
            )}

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
