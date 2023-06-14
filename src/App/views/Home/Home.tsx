import { useContext, useEffect, useState } from "react"
import { Grid} from "@mui/material"
import { AuthContext, SignupForm } from "../Auth"


export function Home() {

  const authContext = useContext(AuthContext)
  
  const isAuthenticated = authContext ? authContext.isAuthenticated : false
  
  console.log(isAuthenticated)
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  return (
      <Grid container>
        <Grid item xs={7} textAlign="center">
          
        </Grid>
        <Grid item xs={5} textAlign="center">
          {!isAuthenticated &&
            <SignupForm ButtonText="Sign Up" />
          }
        </Grid>
      </Grid>
  )
}