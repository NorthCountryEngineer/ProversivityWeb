import { Box, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material"
import { AboutCalloutsProps } from "./AboutTypes"
import Image from "mui-image"
import { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        
        if(password===confPassword){
            // Sign up user with Amplify and Cognito
            await Auth.signUp({
                username: email,
                password: 'Password123', // Set a default password or implement your own logic
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
  return(
    <form onSubmit={handleSubmit}>
        {errorMessage && (
            <Typography color="error" variant="body1" align="center">
            {errorMessage}
            </Typography>
        )}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="ConfirmPassword"
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Company Name"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Skills"
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                fullWidth
            />
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
                Sign Up
            </Button>
            </Grid>
        </Grid>
    </form>
  );
};

export default SignupForm;


export const CalloutBoxes = ({ isMobile, callouts }: AboutCalloutsProps) => {
  return (
    <Box
      sx={{
        minHeight: "10vh", // Adjust the height as needed
        display: "flex",
        justifyContent: "center", // Adjust the vertical alignment as needed
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row", // Adjust the direction based on device
        gap: 2, // Add gap between callout boxes if desired
        p: 2, // Adjust padding as needed
      }}
    >
      {callouts.map((callout, index) => (
        <Box
          key={index}
          sx={{
            width: '550px',
            height: '100%',
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
                {callout.title}
              </Typography>

              <Divider sx={{m:2}} />

              <Stack direction="row">
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
