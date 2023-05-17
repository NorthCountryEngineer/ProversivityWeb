import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Tabs, Tab, alpha } from '@mui/material'
import { Auth } from 'aws-amplify'
import useHistory from 'react-router-dom'


function Authentication() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [tabValue, setTabValue] = useState(0)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
  
    try {
      if (isLogin) {
        await Auth.signIn(username, password)
      } else {
        await Auth.signUp({
          username,
          password,
        })
      }
  
      setUsername('')
      setPassword('')
  
      window.location.href = "/"
    } catch (error) {
      console.log('Error:', error)
    }
  }
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
    setIsLogin(newValue === 0)
  }

  return (
    <Box
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '60%',
        margin: 'auto',
      }}
    >
      <Box sx={{ marginTop: '225px', borderBottom: 1, borderColor: 'divider'}} />

      <Box sx={{ p: 3 }}>
          <form onSubmit={handleFormSubmit}>
            <Typography variant="h6" gutterBottom>
              Log in
            </Typography>
            <TextField 
              label="Username" 
              value={username} 
              onChange={handleUsernameChange} 
              fullWidth 
              margin="dense" 
              required 
              sx={{p:2}}
            
            />
            <TextField 
              label="Password" 
              type="password" 
              value={password} 
              onChange={handlePasswordChange} 
              fullWidth 
              margin="dense" 
              required 
              sx={{p:2}}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: 'rgba(1,143,197,0.9)', mt: 3 }} fullWidth>
              Log in
            </Button>
          </form>
      </Box>
    </Box>
  )
}

export default Authentication
  /*

  
  

  
} */
