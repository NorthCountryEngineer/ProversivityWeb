import Image from "mui-image"
import municipalities from './municipalities.json'
import styled from "@emotion/styled"

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

import { getUser } from "../../../graphql/queries"
import { CheckCircle } from "@mui/icons-material"
import { getAppClientAccessToken, useAuthentication } from "../Auth"
import { AboutCalloutsProps, ServiceProviderSignUpProps, ServiceProviderSignupInitialState } from "./model.d"
import { useEffect, useState } from 'react'
import { API, Auth, graphqlOperation } from "aws-amplify"

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
    const [verificationCode, setVerificationCode] = useState('')
    const [error, setError] = useState('')
  
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
    )
}

const SignupForm = () => {

    const [serviceProviderSignupAttributes, setServiceProviderSignupAttributes] = useState<ServiceProviderSignUpProps>(ServiceProviderSignupInitialState)

    useEffect(() => {
        SetUserAuthenticationAttributes()
    }, []);
      
    useEffect(() => {
        console.log("Updated attributes: ", serviceProviderSignupAttributes);
    }, [serviceProviderSignupAttributes]);

    const SetUserAuthenticationAttributes = async () => {

        const authenticationStatus = getAppClientAccessToken();

        let attributes = {
          isAuthenticated: false,
          email: '',
          verificationSuccess: false,
          userID: '',
          isComplete: false,
          loadingComplete:true,
        };
      
        try {
          if (authenticationStatus) {

            const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();

            attributes.isAuthenticated = authenticationStatus;
            attributes.email = currentAuthenticatedUser.attributes.email;
            attributes.verificationSuccess = currentAuthenticatedUser.attributes.email_verified;
            attributes.userID = currentAuthenticatedUser.attributes.sub;
      
            const userObjectExists = await checkUserObjectExists(currentAuthenticatedUser.attributes.sub);

            if (userObjectExists) {
                attributes.isComplete=true
                setServiceProviderSignupAttributes({ ...serviceProviderSignupAttributes, ...attributes });
            }else{
                setServiceProviderSignupAttributes({ ...serviceProviderSignupAttributes, ...attributes });
            }

            return true;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
        return false;
    };

    /**
     * Updates the attributes in the state of the signup form.
     *
     * @param {object} newAttributes - The new attribute-value pairs to update.
     * @returns {void}
    */
    const updateAttributes = (newAttributes) => {
        setServiceProviderSignupAttributes({
            ...serviceProviderSignupAttributes,
            ...newAttributes
        })
    }

    const checkUserObjectExists = async (userId) => {
        try {
          const query = graphqlOperation(getUser, { id: userId });
          const data: any = await API.graphql(query);
          return !!data.getUser;
        } catch (error) {
          console.error(error);
          return false;
        }
    };

    const handleInputChange = (event) => {
        console.log(serviceProviderSignupAttributes)
        const { value, name } = event.target
        console.log(value,name)
        updateAttributes({
          [name]: value,
        })
    }

    const handleConfPasswordBlur = () => {
        updateAttributes({
            isConfPasswordFocused: true,
            passwordsMatch: serviceProviderSignupAttributes.password===serviceProviderSignupAttributes.confPassword
        })
        console.log(serviceProviderSignupAttributes)
    }

    const handleNewAccountFormSubmitCall = async (e) => {
        e.preventDefault()
        if (serviceProviderSignupAttributes.passwordsMatch) {
          try {
            const user = await Auth.signUp({
              username: serviceProviderSignupAttributes.email, 
              password: serviceProviderSignupAttributes.password,
            })

            console.log('Account created successfully:', user)

            updateAttributes({verificationModalOpen:true})

          } catch (error) {
            console.error('Error creating account:', error)
          }
        } else{
            throw new Error("Passwords in UI did not match before handleNewAccountFormSubmitCall called, blocking call")
        }
    }
    
    const handleBack = () => {
        const updatedActiveStep = {activeStep: (serviceProviderSignupAttributes.activeStep-1)}
        updateAttributes(updatedActiveStep)
    }
    
    const handleSignUpFormSubmitCall = async (event) => {
        event.preventDefault()

        const signUpAttributes = {
            username: serviceProviderSignupAttributes.email,
            password: serviceProviderSignupAttributes.password,
            attributes: {
                email: serviceProviderSignupAttributes.email,
                given_name: serviceProviderSignupAttributes.firstName,
                family_name: serviceProviderSignupAttributes.lastName,
            },
        }
        const signUserUp =  await Auth.signUp(signUpAttributes)
        return(signUserUp)
    }

    const handleVerificationClose = async(success) => {
        const updatedActiveStep = {
            verificationModalOpen: false,
            verificationSuccess: false,
            activeStep: serviceProviderSignupAttributes.activeStep
        }
        
        
        if (success) {
            updatedActiveStep.verificationSuccess = true
            updatedActiveStep.activeStep = serviceProviderSignupAttributes.activeStep+1

        }

        updateAttributes(updatedActiveStep)
    }

    const handleReverificationButtonClick = async () => {
        try {
            await Auth.resendSignUp(serviceProviderSignupAttributes.email)
            updateAttributes({verificationModalOpen: true})
        } catch (error) {
            console.error('Error resending verification email:', error)
        }
    }

    const handleVerifyAccount = async (verificationCode) => {
        console.log("Code", verificationCode)
        try {
            await Auth.confirmSignUp(serviceProviderSignupAttributes.email, verificationCode)
                .then(async () => {
                    const user = await Auth.signIn(serviceProviderSignupAttributes.email, serviceProviderSignupAttributes.password);
                    console.log("User signed in", user);
                })
            
            handleVerificationClose(true)
        } catch (error) {
            handleVerificationClose(false)
            console.error(error);
            throw new Error('Invalid verification code or Login failed')
        }
    }


    const StyledAutocomplete = styled(Autocomplete)`
        .MuiAutocomplete-listbox {
            background-color: black // Set your desired background color
            color: white // Set your desired text color
        }
    `

    const StepperSuccessIcon = (props: StepIconProps) => {
        const { active, completed } = props
        
        if (completed) {
            return <CheckCircle color="success" />
        }
        
        return <div className={active ? 'MuiStepIcon-active' : 'MuiStepIcon-inactive'}>{props.icon}</div>
    }


    function renderCreateAccountStepLabel() {
        console.log(serviceProviderSignupAttributes.isAuthenticated)
        return(
            serviceProviderSignupAttributes.isAuthenticated ? (
                <StepLabel StepIconComponent={StepperSuccessIcon}>
                Create Account
                </StepLabel>
            ) : (
                <StepLabel>
                Create Account
                </StepLabel>
            )
        )
    }
        

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

                            <form onSubmit={handleSignUpFormSubmitCall} style={{height:"100%"}} >
                                <Stack direction="row">
                                    <Grid container>
                                        <Grid item xs={12} sx={{ objectFit:'contain', height:'400px' }}>
                                            <Stepper activeStep={serviceProviderSignupAttributes.activeStep} alternativeLabel sx={{ backgroundColor: 'primary.main' }}>
                                                <Step>
                                                    <StepLabel>
                                                        Sign Up
                                                    </StepLabel>
                                                </Step>
                                                <Step>
                                                    <StepLabel>
                                                        Verify Account
                                                    </StepLabel>
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

                                            {serviceProviderSignupAttributes.activeStep === 0 && (
                                                !serviceProviderSignupAttributes.isAuthenticated ? (
                                                <div style={{backgroundColor:'primary.main'}}>
                                                    <Box sx={{height:"40px"}} >
                                                        {
                                                        serviceProviderSignupAttributes.errorMessage.length > 0 && 
                                                            <Alert severity="warning">{serviceProviderSignupAttributes.errorMessage}</Alert>
                                                        }
                                                    </Box>

                                                    <TextField
                                                        label="Email"
                                                        name="email"
                                                        value={serviceProviderSignupAttributes.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }} 
                                                    />
                                                    
                                                    <TextField
                                                        label="Password"
                                                        name="password"
                                                        type="password"
                                                        value={serviceProviderSignupAttributes.password}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }}
                                                        error={!serviceProviderSignupAttributes.passwordsMatch && serviceProviderSignupAttributes.isConfPasswordFocused}
                                                        helperText={!serviceProviderSignupAttributes.passwordsMatch && 'Passwords do not match'}
                                                    />

                                                    <TextField
                                                        label="Confirm Password"
                                                        name="confPassword"
                                                        type="password"
                                                        value={serviceProviderSignupAttributes.confPassword}
                                                        onChange={handleInputChange}
                                                        onBlur={handleConfPasswordBlur}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            mt:1,
                                                            mb:3
                                                        }}

                                                        error={!serviceProviderSignupAttributes.passwordsMatch && serviceProviderSignupAttributes.isConfPasswordFocused}
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

                                            {serviceProviderSignupAttributes.activeStep === 1 && (<>
                                            
                                            </>)
                                            
                                            
                                            
                                            }

                                            {serviceProviderSignupAttributes.activeStep === 2 && (
                                                <>
                                                <TextField
                                                        label="First Name"
                                                        name="firstName"
                                                        value={serviceProviderSignupAttributes.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }}
                                                    />

                                                    <TextField
                                                        label="Last Name"
                                                        name="lastName"
                                                        value={serviceProviderSignupAttributes.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }}
                                                    />

                                                    <TextField
                                                        label="Company Name"
                                                        name="companyName"
                                                        value={serviceProviderSignupAttributes.companyName}
                                                        onChange={handleInputChange}
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }}
                                                    />

                                                </>
                                            )}
                                        
                                            {serviceProviderSignupAttributes.activeStep === 3 && (
                                                <>
                                                <TextField
                                                    label="Address"
                                                    name="address"
                                                    value={serviceProviderSignupAttributes.address}
                                                    onChange={handleInputChange}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />

                                                <StyledAutocomplete
                                                    disablePortal
                                                    options={municipalities.map((municipality) => municipality.village)}
                                                    renderInput={(params) => <TextField {...params} label="Address" type="address" />}
                                                    value={serviceProviderSignupAttributes.town}
                                                    onChange={handleInputChange}
                                                    fullWidth
                                                />
                                                
                                                </>
                                            )}

                                            {serviceProviderSignupAttributes.activeStep === 4 && (
                                                <>
                                                    <TextField
                                                        label="Phone"
                                                        name="phone"
                                                        value={serviceProviderSignupAttributes.phone}
                                                        onChange={handleInputChange}
                                                        fullWidth
                                                        sx={{
                                                            mt:3,
                                                            mb:3
                                                        }}
                                                    />
                                            
                                                    <TextField
                                                        label="Skills"
                                                        name="skills"
                                                        value={serviceProviderSignupAttributes.skills}
                                                        onChange={handleInputChange}
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
                                                    serviceProviderSignupAttributes.activeStep > 0 ? (
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
                                                            {serviceProviderSignupAttributes.activeStep === 3 ? 'Sign Up' : 'Next'}
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

            <VerificationModal
                handleVerifyAccount={handleVerifyAccount}
                open={serviceProviderSignupAttributes.verificationModalOpen}
                onClose={handleVerificationClose}
            />
        </>
    )
}

export default SignupForm


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
