import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControl,  Grid, InputLabel, MenuItem, Modal, NativeSelect, Select, TextField, Typography } from "@mui/material"
import { API, graphqlOperation } from "aws-amplify";
import { retrieveUserEmail } from "./functions"
import { initialSwitchBoardData, initialUserMetaData } from "./model.d";
import { createUser, createRelationship } from "../../../graphql/mutations";
import { listRelationships, listUsers } from "../../../graphql/queries";

function OneOnOneAuthenticatedUserView({
  userMetaData
}) {
  const [relationshipData, setRelationshipData] = useState({
    name: '',
    description: '',
    relationshipRequestorId: userMetaData.cognitoID,
    relationshipEmployeeId: '',
  });

  const [userList, setUserList] = useState([])
  const [relationshipList, setRelationshipList] = useState([])
  const [newRelationshipModalOpen, setNewRelationshipModalOpen] = useState(false)

  useEffect(() => {
    fetchUsers()
    fetchRelationships()
  }, []);

  const fetchUsers = async () => {
    try {
      const listUsersCall:any = await API.graphql(graphqlOperation(listUsers));
      const users = listUsersCall.data.listUsers.items;
      setUserList(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const fetchRelationships = async() => {
    try {
      const variables = {filter: { relationshipRequestorId: { eq: userMetaData.cognitoID } }}
      const listRelationshipsCall:any = await API.graphql(graphqlOperation(listRelationships, variables))
      const relationships = listRelationshipsCall.data.listRelationships.items;
      setRelationshipList(relationships)
      console.log(relationships)
    } catch (error) {
      console.error('Error fetching relationships:', error);
    }
  }
  

  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setRelationshipData({ ...relationshipData, [name]: value });
  }

  const createNewRelationship = async () => {
    try {
      let listRelationshipCall = await API.graphql(graphqlOperation(listRelationships, {input: {}}))
      console.log("List Relationships: ", listRelationshipCall)
      const response = await API.graphql(
        graphqlOperation(createRelationship, {input: relationshipData})
      );
      console.log('Relationship created:', response);
    } catch (error) {
      console.error('Error creating relationship:', error);
    }
  };

  const handleNewRelationshipModalButtonClick = () => {
    setNewRelationshipModalOpen(!newRelationshipModalOpen)
  }

  return (
    <>
        <Button onClick={handleNewRelationshipModalButtonClick}>Create new series</Button>
        <Modal 
          open={newRelationshipModalOpen} 
          style={{
          backgroundColor: "Background",
          width: "80%",
          height: "30%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)" 
        }}>
          <>
          <Grid container spacing={3}>
            <Grid item xs={12}>             
              <Button onClick={handleNewRelationshipModalButtonClick}>
                X
              </Button></Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title of series"
                name="name"
                value={relationshipData.name}
                onChange={handleInputChange}
                style={{padding:"5px"}}
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description of the series"
                name="description"
                value={relationshipData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Email address for invitation</InputLabel>
                <Select
                  name="relationshipEmployeeId"
                  value={relationshipData.relationshipEmployeeId}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {userList.map((user:any) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.firstName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={createNewRelationship}
          >
            Create Relationship
          </Button>
          </>
        </Modal>  
      <Grid container>
        {relationshipList.map((relationship:any) => (
          <Grid item xs={12}>
            <Typography variant="button">
              {relationship.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
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

export {OneOnOneAuthenticatedUserView}