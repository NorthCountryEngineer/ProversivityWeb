import { useContext, useEffect, forwardRef } from "react"
import { Grid} from "@mui/material"
import { AuthContext, SignupForm } from "../../functions/Auth"
import React from 'react'

const Home = forwardRef((props, ref) => {

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
})

export default Home;
