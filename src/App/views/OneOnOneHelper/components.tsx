import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, FormControlLabel, FormLabel, Grid, NativeSelect, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import { API } from "aws-amplify";
import { retrieveUserEmail,deleteUserAccount } from "./functions"
import { initialSwitchBoardData, initialUserMetaData } from "./model.d";
import { createUser } from "../../../graphql/mutations";


function WelcomeDialogue({
  userMetaData
}) {
  return(
    <>
      <h1>Welcome back, {userMetaData.firstName}</h1>
      <button 
        data-testid="delete-user-account-button"
        onClick={deleteUserAccount}
      > Delete My Account </button>
    </>
    
  )
}

function OneOnOneSignUpDialogueComponent({
    open,
    setOpen,
    userMetaData,
    setUserMetaData,
    setUserData,
}) {
    const [metaData, setMetaData] = useState(initialUserMetaData)
    const [board, setBoard] = useState(initialSwitchBoardData)
    const [newOrganizationFieldOpen, setNewOrganizationFieldOpen] = useState(false)
    const [existingOrganizationFieldOpen, setExistingOrganizationFieldOpen] = useState(false)

    const handleSubmit = async (userMetaData) => {
        try {
          const response = await API.graphql({
            query: createUser,
            variables: { 
              input: {
                firstName: userMetaData.firstName,
                lastName: userMetaData.lastName,
                email: userMetaData.email,
                role: userMetaData.role,
              }
            }
          })
          if(response){ 
            setOpen(false)
            window.location.reload()
          }
        } catch (error) {
          console.error('Error creating user:', error);
        }
    }

    async function getUserEmail(){
        let email = await retrieveUserEmail()
        setMetaData({...metaData, "email":email})
    }

    useEffect(()=>{
        getUserEmail()
    },[])

    useEffect(()=>{
        setUserMetaData(metaData)
    },[metaData])

    return(
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        data-testid="sign-up-dialog"
      >
            <DialogContent>
                <DialogContentText>
                    <Typography variant="button">Sign up for the One on One tool </Typography>
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
                        onChange={(e) => setMetaData({...metaData, "firstName" : e.target.value})}
                        sx={{
                          mt:5
                        }}
                        data-testid="sign-up-dialog-firstName"
                    />
                    <TextField
                      margin="dense"
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      value={userMetaData.lastName}
                      variant="standard"
                      onChange={(e) => setMetaData({...metaData, "lastName" : e.target.value})}
                      sx={{
                        mt:5
                      }}
                      data-testid="sign-up-dialog-lastName"
                    />
                    <TextField
                      margin="dense"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      value={metaData.email}
                      variant="standard"
                      onChange={(e) => setMetaData({...metaData, "email": e.target.value})}
                      sx={{
                        mt:5
                      }}
                      disabled
                      data-testid="sign-up-dialog-email"
                    />

                    <FormControl sx={{ color:"Background", mt:"10%"}} fullWidth >
                      <Grid container spacing={0}>
                        <Grid item xs={6}>
                          <Button onClick={()=>setNewOrganizationFieldOpen(true)}>Create new organization</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button onClick={()=>setExistingOrganizationFieldOpen(true)}>Choose existing organization</Button>
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
                              value={userMetaData.organization}
                              variant="standard"
                              onChange={(e) => setUserData("organization", e.target.value)}
                            />
                            <Button
                              onChange={(e) => setNewOrganizationFieldOpen(false)}
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
                              onClick={(e) => setExistingOrganizationFieldOpen(false)}
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
                  <Button onClick={()=>setBoard({...board, "oneOnOneDialogueOpen": false})} color="error">
                    Cancel
                  </Button>
                  <Button
                    onClick={()=>handleSubmit(userMetaData)}
                    color="info"
                    data-testid="sign-up-dialog-submitButton"
                  >
                    Create User
                  </Button>
                </DialogActions>
              </Dialog>
    )
}

export {WelcomeDialogue,OneOnOneSignUpDialogueComponent}