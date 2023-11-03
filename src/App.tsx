import { CssBaseline, ThemeProvider } from '@mui/material'
import { Navigate, Route, RouterProvider } from 'react-router-dom'
import theme from './App/theme/BaseTheme'
import { Header } from './App/components/Header/Header'
import { AppHooks } from './App/App.hooks'
import { homePageStyleProps } from './App/models/Service/PropTypes'
import { router } from './App/router'
import { useEffect, useState } from 'react'
import { AuthProvider } from './App/functions/Authenticate'
import React from 'react'
import { API, Auth, Hub } from 'aws-amplify'
import { LicenseInfo } from '@mui/x-license-pro';


const App = ()=> {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function callParametersLambda() {
    const myInit = { queryStringParameters: {} };
    try {
        const getCall = await API.get('credentialsAccessGateway', '/credentialsAccess', myInit);
        return getCall;
      } catch (error) {
        console.error(error);
        throw error; // Rethrow the error if needed
      }
  }

  // In your useEffect, you need to await the result
  async function setMUILicenseKey() {
    try {
      let getCallEffect = await callParametersLambda()
      LicenseInfo.setLicenseKey(getCallEffect);
    } catch (error) {
      console.error(error);
    }
  }

  setMUILicenseKey()

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("USER:", user)
      setIsAuthenticated(true)
    })
    .catch(() => console.log('User is not authenticated.'))
    
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setIsAuthenticated(true)
          break
        case 'signOut':
          setIsAuthenticated(false)
          break
        default:
          break
      }
    })
  }, [])
  
  const { targetImage } = AppHooks()

  return (
    <div style={homePageStyleProps(targetImage)}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <div style={{height:"115px"}}/>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App