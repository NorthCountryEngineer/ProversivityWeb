import React, { useEffect, useState } from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import { API, Auth } from "aws-amplify"
import { getUser } from "../../../graphql/queries"
import { Button, MenuItem, Select, TextField } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { createUser } from "../../../graphql/mutations"
import { styled } from '@mui/system';



const OneOnOneHelper = () => {
  const [isUser, setIsUser] = useState<any>(false)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dateJoined: new Date().toISOString()  // assuming dateJoined is stored as a string in ISO format
  });

  const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',  // 80% black
    },
  }));

  const handleClickOpen = () => { setOpen(true) }
  const handleClose     = () => { setOpen(false) }

  const handleSubmit = async () => {
    try {
      const response = await API.graphql({
        query: createUser,
        variables: { 
          input: formData 
        }
      });
      console.log('User created:', response);
      handleClose(); // close the modal
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  

  useEffect(() => {
    // Fetch user's details from Cognito
    const fetchUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        const userId = currentUser.attributes.sub // Cognito user ID

        // Fetch user details using the GraphQL query
        const userData:any = await API.graphql({
          query: getUser,
          variables: { id: userId },
        })

        if(userData.data.getUser !== null){
          setIsUser(true)
        }

        console.log(userData)

        setLoadingComplete(true)

      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [isUser])

  return (
    <div>
      {loadingComplete ? (
        <div>
          {isUser ? (
            <h1>I'm a user</h1>
          ) : (
            <div>
              <Button 
                onClick={handleClickOpen}
              >
                Sign up
              </Button>
              <CustomDialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Sign up for the One on One tool
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
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <TextField
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Select
                    fullWidth
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <MenuItem value={"Manager"}>Manager</MenuItem>
                    <MenuItem value={"Employee"}>Employee</MenuItem>
                  </Select>
                  </>

                  }
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="error">
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit} color="primary">
                    Create User
                  </Button>

                </DialogActions>
              </CustomDialog>
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
