import React, { useEffect, useState } from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { getUser, listUsers } from "../../../graphql/queries"
import { Button, FormControl, FormControlLabel, FormLabel, Grid, NativeSelect, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import { createUser } from "../../../graphql/mutations"
import { styled } from '@mui/system';



const OneOnOneHelper = () => {
  const [isUser, setIsUser] = useState<any>(false)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [newOrganizationFieldOpen, setNewOrganizationFieldOpen] = useState(false)
  const [existingOrganizationFieldOpen, setExistingOrganizationFieldOpen] = useState(false)
  const [organization, setOrganization] = useState("")


  const handleClickOpen = () => { setOpen(true) }
  const handleClose     = () => { setOpen(false) }

  const handleSubmit = async () => {
    console.log(role)
    try {
      const response = await API.graphql({
        query: createUser,
        variables: { 
          input: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
          }
        }
      });
      console.log('User created:', response);
      setIsUser(true)
      handleClose(); // close the modal
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  async function getUserByEmail(email: string){
    try {
      const variables = {
        filter: { email: { eq: email } },
        limit: 1 // Since emails are unique, you can limit the results to 1
      };
  
      const response:any = await API.graphql(graphqlOperation(listUsers))
  
      if (response.data.listUsers.items.length > 0) {
        console.log(response)
        setIsUser(true)
        return response.data.listUsers.items[0];
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
    }
  }

  useEffect(() => {
    // Fetch user's details from Cognito
    const fetchUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        const userId = currentUser.attributes.sub // Cognito user ID
        console.log(currentUser.attributes.email)
        setEmail(currentUser.attributes.email)

        // Fetch user details using the GraphQL query
        const userData:any = await getUserByEmail(email)
        console.log(userData)

        setLoadingComplete(true)

      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [isUser])

  function switchFields(selection:number){
    if(selection === 1){
      setExistingOrganizationFieldOpen(false)
      setNewOrganizationFieldOpen(true)
    }
    
    if(selection === 2){
      setExistingOrganizationFieldOpen(true)
      setNewOrganizationFieldOpen(false)
    }
  }

  return (
    <div>
      {loadingComplete ? (
        <div>
          {isUser ? (
            <h1>Hi, {firstName}</h1>
          ) : (
            <div>
              <h2>You aren't signed up yet</h2>
              <Button 
                onClick={handleClickOpen}
              >
                Click here to Sign up
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogContent>
                  <DialogContentText>
                    <Typography variant="h5">Sign up for the One on One tool </Typography>
                  </DialogContentText>
                  {
                  <>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={firstName}
                        variant="standard"
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{
                          mt:5
                        }}
                    />
                    <TextField
                      margin="dense"
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      value={lastName}
                      variant="standard"
                      onChange={(e) => setLastName(e.target.value)}
                      sx={{
                        mt:5
                      }}
                    />
                    <TextField
                      margin="dense"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={email}
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        mt:5
                      }}
                      disabled
                    />

                    <FormControl>
                      <FormLabel 
                        id="demo-row-radio-buttons-group-label"
                        sx={{mt:5}}
                      >
                        1:1 role</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=>setRole(e.target.value)}
                      >
                        <FormControlLabel value="requestor" control={<Radio />} label="Lead" />
                        <FormControlLabel value="EMPLOYEE" control={<Radio />} label="Participant" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl sx={{ color:"Background", mt:"10%"}} fullWidth >
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Button onClick={()=>switchFields(1)}>Create new organization</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button onClick={()=>switchFields(2)}>Choose existing organization</Button>
                        </Grid>
                      </Grid>
                        

                      <div style={{height:"100px"}}>
                      {
                        newOrganizationFieldOpen &&
                          <>
                            <TextField
                              margin="dense"
                              id="neworg"
                              label="New Organization"
                              type="text"
                              fullWidth
                              value={organization}
                              variant="standard"
                              onChange={(e) => setOrganization(e.target.value)}
                            />
                            <Button
                              onClick={()=>setNewOrganizationFieldOpen(false)}
                            >
                              Close
                            </Button>
                          </>
                      }
                      {
                        existingOrganizationFieldOpen &&
                        <>
                          <NativeSelect
                            defaultValue={30}
                            inputProps={{
                              name: 'Organization',
                              id: 'uncontrolled-native',
                            }}
                            fullWidth
                          >
                            <option value={"Manager"}></option>
                          </NativeSelect>
                            <Button
                              onClick={()=>setExistingOrganizationFieldOpen(false)}
                            >
                              Close
                            </Button>
                          </>

                      }
                      </div>
                    </FormControl>
                  </>

                  }
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="error">
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit} color="info">
                    Create User
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
  
}

export default withAuthenticator(OneOnOneHelper)
