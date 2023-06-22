import { SignupForm } from "./components"
import { useContext, useEffect } from "react"
import { Grid } from "@mui/material"
import React from 'react'
import { AuthContext } from "../../functions/Authenticate"

export const Authenticate = () => {

  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext ? authContext.isAuthenticated : false

  console.log(isAuthenticated)
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  return (
      <Grid container data-testid="Home">
        <Grid item xs={7} textAlign="center">
          
        </Grid>
        <Grid item xs={5} textAlign="center">
          {!isAuthenticated &&
            <SignupForm />
          }
        </Grid>
      </Grid>
  )
}


