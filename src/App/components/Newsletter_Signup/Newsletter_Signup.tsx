import { useContext, useEffect } from "react"
import { Grid} from "@mui/material"
import { AuthContext } from "../../functions/Authenticate"
import React from 'react'
import { SignupForm } from "./components"

export const Newsletter_Signup = (props, ref) => {

  const authContext = useContext(AuthContext)
  
  const isAuthenticated = authContext ? authContext.isAuthenticated : false

  console.log(isAuthenticated)
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  return (
    <div>
      {!isAuthenticated &&
        <SignupForm />
      }
    </div>
  )
}
