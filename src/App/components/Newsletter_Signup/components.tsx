import { Box, Button, Checkbox, FormControlLabel, Modal, Paper, TextField, Typography } from "@mui/material"
import { useState } from 'react'
import React from 'react'

import { 
  handleSubmit,
  setHook,
  verifyAccountAndSignIn,
  handleClickShowPassword,
  openCreateAccountModal,
  handleInitialPasswordSubmit 
} from "../../functions/Authenticate"


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
          <form onSubmit={()=>handleSubmit(email, firstName, lastName, newsLetter)}>
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
              setCreateAccountModalOpen, 
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
            password, 
            verificationCode,
            setVerificationModalOpen
          )}
          >
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
              onClick={()=>handleClickShowPassword(setShowPassword)}
              onMouseDown={(e)=>e.preventDefault()}
            />

            <br />

            <Button variant="contained" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={()=>handleInitialPasswordSubmit(
              email, 
              password,
              setCreateAccountModalOpen, 
              setVerificationModalOpen, 
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