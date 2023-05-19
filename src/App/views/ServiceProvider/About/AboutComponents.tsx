import { Box, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Autocomplete, Stepper, Step, StepLabel, Alert, Modal  } from "@mui/material"
import { AboutCalloutsProps } from "./AboutTypes"
import Image from "mui-image"
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import municipalities from './municipalities.json';
import styled from "@emotion/styled";


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
          <Button variant="contained" onClick={handleVerifyAccount}>
            Verify Account
          </Button>
        </div>
      </Modal>
    );
};


const steps = ['Login Information', 'Personal Information', 'Address', 'Contact Information'];

const SignupForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('')
    const [phone, setPhone] = useState('');
    const [skills, setSkills] = useState('');
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isConfPasswordFocused, setIsConfPasswordFocused] = useState(false);
    const [verificationCodeSent, setVerificationCodeSent] = useState(false);
    const [verificationModalOpen, setVerificationModalOpen] = useState(false);
    const [verificationSuccess, setVerificationSuccess] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    };

    const handleConfPasswordBlur = () => {
        setIsConfPasswordFocused(true);
        setPasswordsMatch(password === confPassword);
    };

    const handleNewAccount = async (e) => {
        e.preventDefault();
      
        if (passwordsMatch) {
          try {
            // Call Amplify's create account service
            const user = await Auth.signUp({
              username: email, 
              password: password,
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
        setActiveStep((prevStep) => prevStep - 1);
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

    try {
        
        if(password===confPassword){
            await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email,
                    given_name: firstName,
                    family_name: lastName,
                },
            });
        }
        if (password !== confPassword) {
            setErrorMessage("Passwords do not match");
            return;
          }

      // Create the user and service provider records in DynamoDB using your API

      // Clear form inputs
      setEmail('');
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setAddress('');
      setPhone('');
      setSkills('');

      // Show success message or redirect to a success page
      console.log('User signed up successfully!');
    } catch (error:any) {
      console.error('Error signing up:', error);
      setErrorMessage(error.message);
    }
    };

    const handleSignup = async () => {
        try {
          await Auth.signUp({
            username: email,
            password: password,
          });
          setVerificationCodeSent(true);
        } catch (error) {
          console.log('Signup error:', error);
        }
      };
    
      const handleVerificationOpen = () => {
        setVerificationModalOpen(true);
      };

      const handleVerificationClose = (success) => {
        setVerificationModalOpen(false);
        
        if (success) {
          setVerificationSuccess(true);
          // Handle successful verification (e.g., navigate to next step)
        }
      };

      const handleVerifyAccount = async (verificationCode) => {
        try {
          await Auth.confirmSignUp(email, verificationCode);
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
        `;

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
                                    <Grid xs={12} sx={{ objectFit:'contain', height:'400px' }}>
                                        <Stepper activeStep={activeStep} alternativeLabel sx={{backgroundColor:'primary.main'}}>
                                            {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                            ))}
                                        </Stepper>

                                        {activeStep === 0 && (
                                            <div style={{backgroundColor:'primary.main'}}>
                                                <TextField
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }} 
                                                />
                                                <Box sx={{height:"40px"}} >
                                                    {!passwordsMatch && isConfPasswordFocused && (
                                                        <Alert severity="warning">Password mismatch</Alert>
                                                    )}
                                                </Box>
                                                <TextField
                                                    label="Password"
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                    error={!passwordsMatch && isConfPasswordFocused}
                                                    helperText={!passwordsMatch && 'Passwords do not match'}
                                                />

                                                <TextField
                                                    label="Confirm Password"
                                                    type="password"
                                                    value={confPassword}
                                                    onChange={handleConfPasswordChange}
                                                    onBlur={handleConfPasswordBlur}
                                                    required
                                                    fullWidth
                                                    sx={{
                                                        mt:1,
                                                        mb:3
                                                    }}

                                                    error={!passwordsMatch && isConfPasswordFocused}
                                                />

                                                
                                            </div>
                                        )}

                                        {activeStep === 1 && (
                                            <>
                                            <TextField
                                                    label="First Name"
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
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
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
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
                                                    value={companyName}
                                                    onChange={(e) => setCompanyName(e.target.value)}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />

                                            </>
                                        )}
                                
                                        {activeStep === 2 && (
                                            <>
                                            <TextField
                                                label="Address"
                                                type="text"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
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
                                                value={town}
                                                onChange={(event, newValue:any) => setTown(newValue)}
                                                fullWidth
                                            />
                                            
                                            </>
                                        )}

                                        {activeStep === 3 && (
                                            <>
                                                <TextField
                                                    label="Phone"
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    fullWidth
                                                    sx={{
                                                        mt:3,
                                                        mb:3
                                                    }}
                                                />
                                        
                                                <TextField
                                                    label="Skills"
                                                    type="text"
                                                    value={skills}
                                                    onChange={(e) => setSkills(e.target.value)}
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
                                    <Grid xs={12}>                
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                            >

                                            {
                                                activeStep > 0 ? (
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
                                                        {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
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
                open={verificationModalOpen}
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
