import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import React from 'react'
import { AuthContext } from "../../functions/Authenticate"
import { withAuthenticator } from "@aws-amplify/ui-react"

const Authenticate = () => {
  const [value, setValue] = React.useState(0);

  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext ? authContext.isAuthenticated : false

  console.log(isAuthenticated)
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return isAuthenticated ? <Navigate to="/" /> : <></>;

}

export default withAuthenticator(Authenticate)