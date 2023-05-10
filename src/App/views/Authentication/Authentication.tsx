import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Tabs, Tab, alpha } from '@mui/material';
import { Auth } from 'aws-amplify';
import useHistory from 'react-router-dom';

export function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (isLogin) {
        await Auth.signIn(username, password);
      } else {
        await Auth.signUp({
          username,
          password,
        });
      }
  
      setUsername('');
      setPassword('');
  
      window.location.href = "/"
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setIsLogin(newValue === 0);
  };

  return (
    <Box
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '60%',
        margin: 'auto',
      }}
    >
      <Box sx={{ marginTop: '225px', borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{
            bgcolor: 'rgba(1,143,197,0.9)'
          }}
        >
            <Tab label="Login" />
            <Tab label="Sign up" />
          </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {isLogin ? (
          <form onSubmit={handleFormSubmit}>
            <Typography variant="h6" gutterBottom>
              Log in
            </Typography>
            <TextField label="Username" value={username} onChange={handleUsernameChange} fullWidth />
            <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} fullWidth />
            <Button type="submit" variant="contained" sx={{ bgcolor: 'rgba(1,143,197,0.9)', mt: 3 }} fullWidth>
              Log in
            </Button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <Typography variant="h6" gutterBottom >
              Sign up
            </Typography>
            <TextField label="Username" value={username} onChange={handleUsernameChange} fullWidth />
            <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} fullWidth />
            <TextField label="Confirm password" type="password" fullWidth />
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: 'rgba(1,143,197,0.9)', mt: 3 }}
              fullWidth
              onClick={()=>handleFormSubmit}
            >
              Sign up
            </Button>
          </form>
        )}
      </Box>
    </Box>
  );
}
