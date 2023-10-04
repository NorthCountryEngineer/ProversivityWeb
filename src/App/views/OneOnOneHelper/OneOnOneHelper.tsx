import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  NativeSelect,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

// Import hooks and functions from their respective files
import {
  handleSubmit,
} from "./hooks";

import { switchFields } from "./functions";
import { API, Auth, Hub, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";

const initialUserMetaData = {
  organization: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const initialSwitchBoard = {
  isUser: false,
  loadingComplete: false,
  open: false,
  newOrganizationFieldOpen: false,
  existingOrganizationFieldOpen: false,
};



const OneOnOneHelper = () => {
  const [userMetaData, setUserMetaData] = useState(initialUserMetaData)
  const [switchBoard, setSwitchBoard] = useState(initialSwitchBoard)

  useEffect(() => {
    let userDataFetch = fetchUserData()
    if(switchBoard.loadingComplete) getUserByEmail(userMetaData.email)
    console.log("UserDataFetch: ", userDataFetch)
  }, [])

    // Define a generic setter function for userMetaData and switchBoard
    const setUserData = (key, value) => {
      try{
        console.log(key,value)
        setUserMetaData({ ...userMetaData, [key]: value });
        return("Done")
      }catch(error){
        console.error(error)
        return(error)
      }
    };
  
    const setSwitchData = (key, value) => {
      console.log(key,value)
      setSwitchBoard({ ...switchBoard, [key]: value });
    }

    const fetchUserData = async () => {
      try {
          const currentUser = await Auth.currentAuthenticatedUser()
          setUserMetaData({ ...userMetaData, "email": currentUser.attributes.email})
          setSwitchBoard({...switchBoard, "loadingComplete": true})
      } catch (error) {
          setSwitchBoard({...switchBoard, "loadingComplete": true})
          console.error("Error fetching user data:", error)
          return(error)
      }
    }



    async function getUserByEmail(email: string){
      try {
        const variables = {
          filter: { email: { eq: email } },
          limit: 1
        };
    
        const response:any = await API.graphql(graphqlOperation(listUsers, variables))
        console.log("response is: ", response)
    
        if (response.data.listUsers.items.length > 0) {
          setUserMetaData({...userMetaData, "firstName": response.data.listUsers.items[0].firstName})
          setSwitchBoard({...switchBoard, "isUser": true})
          return response.data.listUsers.items[0];
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching user by email:", error);
        return null;
      }
  }


  return (
    <div>
      {switchBoard.loadingComplete ? (
        <div>
          {switchBoard.isUser ? (
            <h1>Hi, {userMetaData.firstName}</h1>
          ) : (
            <div>
              <h2>You aren't signed up yet</h2>
              <Button 
                onClick={()=>setSwitchBoard({...switchBoard, "open":true})}
              >
                Click here to Sign up
              </Button>
              <Dialog open={switchBoard.open} onClose={()=>setSwitchBoard({...switchBoard, "open":false})} aria-labelledby="form-dialog-title" >
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
                        value={userMetaData.firstName}
                        variant="standard"
                        onChange={(e) => setUserMetaData({...userMetaData, "firstName" : e.target.value})}
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
                      value={userMetaData.lastName}
                      variant="standard"
                      onChange={(e) => setUserMetaData({...userMetaData, "lastName" : e.target.value})}
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
                      value={userMetaData.email}
                      variant="standard"
                      onChange={(e) => setUserData("email", e.target.value)}
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
                        onChange={(e) => setUserData("role", e.target.value)}
                      >
                        <FormControlLabel value="requestor" control={<Radio />} label="Lead" />
                        <FormControlLabel value="EMPLOYEE" control={<Radio />} label="Participant" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl sx={{ color:"Background", mt:"10%"}} fullWidth >
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Button onClick={()=>switchFields(1,setSwitchBoard)}>Create new organization</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button onClick={()=>switchFields(2,setSwitchBoard)}>Choose existing organization</Button>
                        </Grid>
                      </Grid>
                        

                      <div style={{height:"100px"}}>
                      {
                        switchBoard.newOrganizationFieldOpen &&
                          <>
                            <TextField
                              margin="dense"
                              id="neworg"
                              label="New Organization"
                              type="text"
                              fullWidth
                              value={userMetaData.organization}
                              variant="standard"
                              onChange={(e) => setUserData("organization", e.target.value)}
                            />
                            <Button
                              onChange={(e) => setSwitchData("newOrganizationFieldOpen", false)}
                            >
                              Close
                            </Button>
                          </>
                      }
                      {
                        switchBoard.existingOrganizationFieldOpen &&
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
                              onChange={(e) => setSwitchData("newOrganizationFieldOpen", false)}
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
                  <Button onClick={()=>setSwitchBoard({...switchBoard, "open":false})} color="error">
                    Cancel
                  </Button>
                  <Button
                    onClick={
                      () => {
                        handleSubmit(
                          userMetaData.firstName,
                          userMetaData.lastName,
                          userMetaData.email,
                          userMetaData.role,
                          setSwitchData
                        )
                        setSwitchBoard({...switchBoard, "open":false})
                      } 
                    }
                    color="info"
                  >
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
