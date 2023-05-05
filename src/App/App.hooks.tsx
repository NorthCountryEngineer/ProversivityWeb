import { useState, useMemo, useEffect } from 'react';
import { Preferences } from '../models/Service/UserModel';
import { Auth, Hub } from 'aws-amplify';
import { createTheme } from '@mui/material';
import theme from './BaseTheme';

type AuthenticatedState = {
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
};

type AppHooksResult = {
  attributes: Preferences,
  targetImage: number,
  themeWithuserAttributes: any,
  currentView: string,
  authenticated: AuthenticatedState
};

const initialUserAttributes:Preferences = {
  id: "",
  User: "",
  DisplayName: "",
  DarkMode: false
}

function randomInteger(min:number, max:number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const AppHooks = (): AppHooksResult => {
  const [attributes, setAttributes] = useState<Preferences>(initialUserAttributes)
  const [targetImage, updateTargetImage] = useState<number>(randomInteger(1,4))
  const themeWithuserAttributes = useMemo(() => createTheme(theme(attributes.DarkMode?'dark':'light')), [attributes]);
  const [currentView, setCurrentView] = useState(String(String(window.location).split("/").pop()))
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log('User is authenticated:', user)
      setIsAuthenticated(true)
    })
    .catch(() => console.log('User is not authenticated.'));
    
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          setIsAuthenticated(true);
          break;
        case 'signOut':
          console.log('user signed out');
          setIsAuthenticated(false);
          break;
        default:
          break;
      }
    });
  }, []);

  return {
    attributes,
    targetImage,
    themeWithuserAttributes,
    currentView,
    authenticated: { isAuthenticated, setIsAuthenticated }
  };
};
