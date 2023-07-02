import { useContext } from "react"
import { Navigate } from "react-router-dom"
import React from 'react'
import { AuthContext } from "../../functions/Authenticate"
import { withAuthenticator } from "@aws-amplify/ui-react"

const Authenticate = () => {
  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext ? authContext.isAuthenticated : false
  return isAuthenticated ? <Navigate to="/" /> : <></>;

}

export default withAuthenticator(Authenticate)