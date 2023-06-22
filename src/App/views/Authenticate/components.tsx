import { Box, Button,Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, Checkbox, FormControlLabel, Modal, Paper, TextField  } from "@mui/material"
import Image from "mui-image"
import React from 'react'
import { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import { createUser } from "../../../graphql/mutations"
import { listUsers } from "../../../graphql/queries"
import { useState, useEffect, createContext} from 'react'
import { setHook } from "../../functions/Hook_Management/Hook_Management"
import { checkEmailAvailability, handleClickShowPassword, handleInitialPasswordSubmit, handleSubmit, openCreateAccountModal, verifyAccountAndSignIn } from "../../functions/Authenticate"


export const SignupForm = () => {
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

  
  
  return (
    <div>
      <Paper sx={{backgroundColor: "rgb(255,255,255,.9)", alignItems:"start", mt:"10%", mr:"10%"}} data-testid="Signup">
        <Typography variant="h4" sx={{backgroundColor:"rgb(0,0,0,0.6)"}}>Sign up for the newsletter!</Typography>
        <div style={{padding:"10px", backgroundColor:"rgb(0,0,0,0.8)"}}>
          <form onSubmit={()=>handleSubmit(
            email,
            firstName,
            lastName,
            newsLetter
          )}>
            <TextField
              label="Email Address"
              variant="filled"
              fullWidth
              required
              margin="normal"
              sx={{backgroundColor:"GrayText"}}
              onChange={(e) => setHook(e, setEmail)}
              data-testid="email-field"
            />

            <br />

            <Button variant="contained" fullWidth color="primary" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={()=>openCreateAccountModal(
              email, 
              firstName, 
              lastName, 
              newsLetter, 
              setCreateAccountModalOpen
            )}>
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

          <Button variant="contained" onClick={()=>verifyAccountAndSignIn(
            email, 
            verificationCode, 
            password, 
            setVerificationModalOpen
          )}>
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
              onClick={()=>handleClickShowPassword(
                setShowPassword
              )}
              onMouseDown={(e)=>e.preventDefault()}
            />

            <br />

            <Button variant="contained" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={()=>handleInitialPasswordSubmit(
              email, 
              password,
              setCreateAccountModalOpen, 
              setVerificationModalOpen
            )}>
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
}

export const CalloutBoxes = ({ isMobile, callouts }) => {
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
