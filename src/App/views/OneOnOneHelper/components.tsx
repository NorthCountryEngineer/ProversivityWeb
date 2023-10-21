import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
import { API, graphqlOperation } from "aws-amplify";
import { retrieveUserEmail,deleteUserAccount } from "./functions"
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

  const [userList, setUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log("User meta from auth user view: ", userMetaData)
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response:any = await API.graphql(graphqlOperation(listUsers));
      // const relationshipListCall = await API.graphql(graphqlOperation(listRelationships, {input: {}}))
      // console.log("Relationship list call: ", relationshipListCall)
      const users = response.data.listUsers.items;
      console.log('Users:', users);
      setUserList(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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

  return (
    <>
      <h1>Welcome back, {userMetaData.firstName}</h1>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={relationshipData.name}
              onChange={handleInputChange}
              style={{backgroundColor:"Highlight"}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={relationshipData.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Employee</InputLabel>
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
      </form>
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