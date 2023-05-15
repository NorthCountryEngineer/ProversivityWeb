import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { handleSignUp } from "./AuthenticationHooks";

const SignUpForm = async() => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
        <Button component="a" variant="contained" onClick={()=>handleSignUp(email,firstName,lastName)}>
          Sign Up
        </Button>
      </form>
    );
  };
  
  export default SignUpForm;
  