import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { handleSignUp } from "./hooks"

const SignUpForm = async() => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    // Add additional state variables for Customer or ServiceProvider specific fields
  
    return (
      <form>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Add additional TextField components for Customer or ServiceProvider specific fields */}
        <Button component="a" variant="contained" onClick={()=>handleSignUp(email,firstName,lastName,password)}>
          Sign Up
        </Button>
      </form>
    )
  }
  
  export default SignUpForm
  