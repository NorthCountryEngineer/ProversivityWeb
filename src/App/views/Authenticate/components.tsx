
import React from 'react'
import { useState } from 'react'
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { setHook } from "../../functions/Hook_Management/Hook_Management"

import { 
  StyledTabProps, 
  StyledTabsProps, 
  TabPanelProps 
} from "./model"

import { 
  handleInitialPasswordSubmit, 
  handleSubmit, 
  verifyAccountAndSignIn, 
  handleSignIn 
} from "../../functions/Authenticate"

import { 
  Box, 
  Button, 
  Stack, 
  Typography, 
  Modal, 
  TextField, 
  InputAdornment, 
  IconButton, 
  styled, 
  Tab, 
  Tabs  
} from "@mui/material"

export const SignupForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [newsLetter, setNewsLetter] = useState<boolean>(true)
  const [password, setPassword] = useState<string>("")
  const [verificationCode, setVerificationCode] = useState<string>("")
  const [verificationModalOpen, setVerificationModalOpen] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)


  const handleNewAccountSubmit = async() => {
    let submit = await verifyAccountAndSignIn(
      email, 
      verificationCode, 
      password, 
      setVerificationModalOpen
    )
    console.log(submit)

    //if(submit) window.location.href = "/"
  }

  return (
      <form onSubmit={()=>handleSubmit(
        email,
        name,
        newsLetter
      )}>

        <Stack direction="column">

          <TextField
            label="Name"
            variant="filled"
            required
            margin="normal"
            sx={{
              margin:"5px",
              backgroundColor:"GrayText",
            }}
            onChange={(e) => setHook(e, setName)}
            data-testid="first-name-field"
          />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setHook(e, setEmail)}
              required
              sx={{
                margin:"5px",
                backgroundColor:"GrayText",
              }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setHook(e, setPassword)}
              required
              sx={{
                margin:"5px",
                backgroundColor:"GrayText"
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>setShowPassword(!showPassword)}
                      onMouseDown={(e)=>e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
        </Stack>

        <br />

        <Button 
          variant="contained" 
          fullWidth 
          sx={{ 
            backgroundColor: "#0a3732", 
            color:"white" 
          }} 
          onClick={()=>handleInitialPasswordSubmit(
            email, 
            password,
            name,
            setVerificationModalOpen
          )}>
          Create Account
        </Button>


        <Modal open={verificationModalOpen} onClose={() => setVerificationModalOpen(false)}>
          <div>
            <h2>Account Verification</h2>
            <TextField
              label="Verification Code that was sent to your email address"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              fullWidth
              sx={{
                margin:"5px",
                backgroundColor:"GrayText"
              }}
            />

            <Button variant="contained" onClick={handleNewAccountSubmit}>
              Verify Account
            </Button>
          </div>
        </Modal>
      </form>
  )
}


export const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignIn(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack direction="column">
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              margin:"5px",
              backgroundColor:"GrayText",
            }}
          />
          <TextField
            label="Password"
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              margin:"5px",
              backgroundColor:"GrayText"
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={()=>setPasswordVisible(!passwordVisible)}
                    onMouseDown={(e)=>e.preventDefault()}
                    edge="end"
                  >
                    {passwordVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{
              margin:"5px"
            }}
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </div>
  );
};


export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));


export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});