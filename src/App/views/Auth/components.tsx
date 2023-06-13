import { Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { handleSignUp } from "./hooks"
import { API, graphqlOperation } from "aws-amplify"
import { createUser } from "../../../graphql/mutations"
import { listUsers } from "../../../graphql/queries"


export const SignupForm = ({ButtonText}:any) => {
  const [firstName, setFirstName] = useState<String>("")
  const [lastName, setLastName] = useState<String>("")
  const [email, setEmail] = useState<String>("")
  const [newsLetter, setNewsLetter] = useState<boolean>(true)
  const [passwordFieldVisible, setPasswordFieldVisible] = useState<boolean>(false)
  const [password, setPassword] = useState<String>("")
  const [confirmPassword, setConfirmPassword] = useState<String>("")

  const setNewsletterHook = (event, setHook) => {
    setHook(event.target.value)
  }

  const checkEmailAvailability = async (email) => {
    try {
      const response:any = await API.graphql(graphqlOperation(listUsers, { filter: { Email: { eq: email } } }));
      const users = response.data.listUsers.items;
  
      return users.length === 0;
    } catch (error) {
      console.error('Error checking email availability:', error);
    }
  }

  const handleSubmit = async () => {

    try {
      const isEmailAvailable = await checkEmailAvailability(email)
      console.log("handleSubmit isEmailAvailable response: ", isEmailAvailable)
  
      if (!isEmailAvailable) {
        console.error('Email address is already in use')
        return
      }

      try {
        console.log(email, firstName, lastName, newsLetter)
        if(email==undefined || firstName==undefined || lastName==undefined || newsLetter==undefined){
          console.error("Null values")
        }else{
          const response:any = await API.graphql(graphqlOperation(createUser, {
            input: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              newsletter: newsLetter,
            },
          }))
          console.log("createUser response: ", response)
          return response.data.createUser;
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }

    } catch (error) {
      console.error('Error creating user:', error)
    }
  }
  


  return (
    <Paper sx={{backgroundColor: "rgb(255,255,255,.9)", alignItems:"start", mt:"10%", mr:"10%"}}>
      <Typography variant="h4" sx={{backgroundColor:"rgb(0,0,0,0.6)"}}>Sign up for the newsletter!</Typography>
      <div style={{padding:"10px", backgroundColor:"rgb(0,0,0,0.8)"}}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="filled"
            required
            margin="normal"
            sx={{width:"45%", mr:"5%", backgroundColor:"GrayText"}}
            onChange={(e) => setNewsletterHook(e, setFirstName)}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            margin="normal"
            sx={{width:"45%", ml:"5%", backgroundColor:"GrayText"}}
            onChange={(e) => setNewsletterHook(e, setLastName)}
          />
          <TextField
            label="Email Address"
            variant="filled"
            fullWidth
            required
            margin="normal"
            sx={{backgroundColor:"GrayText"}}
            onChange={(e) => setNewsletterHook(e, setEmail)}
          />

          <FormControlLabel 
            control={<Checkbox defaultChecked />} 
            label="Sign up for monthly newsletter" 
            onChange={()=>setNewsLetter(!newsLetter)}
          />

          <FormControlLabel 
            control={<Checkbox />} 
            label="Create Account" 
            onChange={()=> setPasswordFieldVisible(!passwordFieldVisible)}
          />

          <br />

          {
          passwordFieldVisible && 
              <div>
                <TextField
                  label="Password"
                  variant="filled"
                  fullWidth
                  required
                  margin="normal"
                  sx={{backgroundColor:"GrayText"}}
                  onChange={(e) => setNewsletterHook(e, setPassword)}
                />
                <TextField
                  label="Confirm Password"
                  variant="filled"
                  fullWidth
                  required
                  margin="normal"
                  sx={{backgroundColor:"GrayText"}}
                  onChange={(e) => setNewsletterHook(e, setConfirmPassword)}
                />
              </div>
          }

          <Button variant="contained" fullWidth color="primary" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={handleSubmit}>
            {ButtonText}
          </Button>
        </form>
      </div>
    </Paper>
  )
}