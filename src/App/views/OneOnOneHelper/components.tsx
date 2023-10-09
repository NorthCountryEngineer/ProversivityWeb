import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, FormControlLabel, FormLabel, Grid, NativeSelect, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import { API } from "aws-amplify";
import { retrieveUserEmail } from "./functions"
import { initialSwitchBoardData, initialUserMetaData } from "./model.d";
import { createUser } from "../../../graphql/mutations";

function OneOnOneSignUpDialogueComponent({
    open,
    setOpen,
    userMetaData,
    setUserMetaData,
    setUserData,
}) {
    const [board, setBoard] = useState(initialSwitchBoardData);
    const [newOrganizationFieldOpen, setNewOrganizationFieldOpen] = useState(false);
    const [existingOrganizationFieldOpen, setExistingOrganizationFieldOpen] = useState(false);

    const handleSubmit = async () => {
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
          });
          response && setOpen(false);
          window.location.reload();
        } catch (error) {
          console.error('Error creating user:', error);
        }
    }

    async function getUserEmail(){
        let email = await retrieveUserEmail();
        setUserMetaData({ ...userMetaData, "email": email });
    }

    useEffect(() => {
        getUserEmail();
    }, []);

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title" >
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
                            onChange={(e) => setUserData({ ...userMetaData, "firstName": e.target.value })}
                            sx={{
                                mt: 5
                            }}
                        />
                        {/* Add other form fields similarly */}
                    </>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setBoard({ ...board, "oneOnOneDialogueOpen": false })} color="error">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    color="info"
                >
                    Create User
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export { OneOnOneSignUpDialogueComponent };