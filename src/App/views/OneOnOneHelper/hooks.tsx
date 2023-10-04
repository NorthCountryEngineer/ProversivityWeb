import { API } from "aws-amplify"
import { useState } from "react"
import { createUser } from "../../../graphql/mutations"


const handleClickOpen = (setOpen:any) => { setOpen(true) }

const handleClickClose     = (setOpen:any) => { setOpen(false) }

const handleSubmit = async (firstName:string,lastName:string,email:string,role:string,setIsUser:any) => {
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
    setIsUser(true)
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

export {
    handleSubmit
}

