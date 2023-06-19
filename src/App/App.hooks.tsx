import { useState, useMemo, useEffect } from 'react'
import { Preferences } from './models/Service/UserModel'
import { Auth, Hub } from 'aws-amplify'
import { createTheme } from '@mui/material'
import theme from './theme/BaseTheme'

export type AuthenticatedState = {
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export type AppHooksResult = {
  attributes: Preferences,
  targetImage: string,
  currentView: string,
  authenticated: AuthenticatedState
}

const initialUserAttributes:Preferences = {
  id: "",
  User: "",
  DisplayName: "",
  DarkMode: false
}


export const AppHooks = (): AppHooksResult => {
  const [attributes, setAttributes] = useState<Preferences>(initialUserAttributes)
  const [targetImage, updateTargetImage] = useState("/public/Images/BarnInterior.png")
  const [currentView, setCurrentView] = useState(String(String(window.location).split("/").pop()))
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then((user) => {
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

  return {
    attributes,
    targetImage,
    currentView,
    authenticated: { isAuthenticated, setIsAuthenticated }
  }
}
