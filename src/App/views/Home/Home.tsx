import React from 'react'
import { Grid } from "@mui/material"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../functions/Authenticate"
import { Auth } from 'aws-amplify'

export const Home = () => {

  //const authContext = useContext(AuthContext)
  


  //const isAuthenticated = authContext ? authContext.isAuthenticated : false

  //console.log(isAuthenticated)

  const currentSession = async() => {
    try{
      let authedUser = await Auth.currentAuthenticatedUser()
      return(authedUser)
    }catch(error){
      return(error)
    }
  }
  
  useEffect(()=>{
    //localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
    console.log(currentSession())
  },[])

  return (
      <Grid container data-testid="Home">
        <Grid item xs={7} textAlign="center">
          
        </Grid>
        <Grid item xs={5} textAlign="center">

        </Grid>
      </Grid>
  )
}
