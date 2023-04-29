import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUIKey } from "../graphql/mutations";
import { API } from "aws-amplify";


export default function Admin(){
    const [muiToken,updateMuiToken] = useState("")

    async function submitToken(){
        try{
            const newKey:any = await API.graphql({query: createUIKey, variables: {input: {MuiKey: muiToken}}})
            if(newKey){
                console.log("New key submitted: ", muiToken)
                console.log(newKey)
            }
        } catch(error) {console.log("Error adding MUI License Key: ", error)}
    }
    return(
        <div>
            <TextField 
                size="small" 
                fullWidth 
                id="MUI Token" 
                label="MUI Token" 
                variant="outlined" 
                onChange={(event)=>{updateMuiToken(event.target.value) }}
                value={muiToken}  
            />

            <Button onClick={()=>submitToken()}>Submit</Button>
        </div>
    )
}