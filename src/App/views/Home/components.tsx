import { Avatar, Box, Button, Checkbox, Divider, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from "@mui/material"
import { HomepageCalloutsProps } from "./model"
import Image from "mui-image"
import { useState } from "react"
import { API, graphqlOperation } from "aws-amplify"
import { listUsers } from "../../../graphql/queries"
import { createUser } from "../../../graphql/mutations"

export const CalloutBoxes = ({ isMobile, callouts }: HomepageCalloutsProps) => {
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

export const NewsletterForm = () => {
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
          Signup for Newsletter
        </Button>
      </form>
    </Paper>
  )
}
