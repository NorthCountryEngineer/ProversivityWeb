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
  const [newAccountModal, setNewAccountModal] = useState<boolean>(false)

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
    <Paper sx={{backgroundColor: "rgb(255,255,255,.6)", alignItems:"start", mt:"10%", mr:"10%"}}>
      <Typography variant="h4" sx={{backgroundColor:"rgb(0,0,0,.4)"}}>Sign up for the newsletter!</Typography>
      <form onSubmit={handleSubmit} style={{backgroundColor:"rgb(0,0,0,0.5)"}}>
        <TextField
          label="First Name"
          variant="filled"
          required
          margin="normal"
          sx={{width:"45%", mr:"5%"}}
          onChange={(e) => setNewsletterHook(e, setFirstName)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          margin="normal"
          sx={{width:"45%", ml:"5%"}}
          onChange={(e) => setNewsletterHook(e, setLastName)}
        />
        <TextField
          label="Email Address"
          variant="filled"
          fullWidth
          required
          margin="normal"
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
          onChange={()=> setNewAccountModal(!newAccountModal)}
        />

        <br />

        <Button variant="contained" fullWidth color="primary" sx={{ backgroundColor: "#0a3732", color:"white" }} onClick={handleSubmit}>
          {ButtonText}
        </Button>
      </form>
    </Paper>
  )
}