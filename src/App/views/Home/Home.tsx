import React from 'react'
import { Grid } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../functions/Authenticate"
import { HomeCustomerConversation } from "./components"

export const Home = () => {
  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext ? authContext.isAuthenticated : false

  return (
      <Grid container data-testid="Home">
        <Grid item xs={3} />

        <Grid item xs={6} textAlign="center">
          { 
            isAuthenticated && <HomeCustomerConversation /> 
          }
        </Grid>

        <Grid item xs={3} />
      </Grid>
  )
}
