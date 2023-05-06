import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { theme } from './App/theme/BaseTheme';
import { Header } from './App/views/Components/Header';
import { AppHooks } from './App/App.hooks';
import { LoadingScreen } from './App/views/Components/Landing';
import { homePageStyleProps } from './App/models/Service/PropTypes';
import { router } from './App/router';
import { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import jwtDecode from 'jwt-decode';

function App() {
  const { attributes, targetImage, currentView, authenticated } = AppHooks();
  
  const getAppClientIdFromLocalStorage = (): string | null => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("CognitoIdentityServiceProvider.")) {
        const parts = key.split(".");
        if (parts.length === 3) {
          return parts[1];
        }
      }
    }
    return null;
  };
  
  const getAppClientAccessToken = (): string | null => {
    const appClientId = getAppClientIdFromLocalStorage();
    if (!appClientId) return null;
    const accessTokenKey = `CognitoIdentityServiceProvider.${appClientId}.accessToken`;
    return localStorage.getItem(accessTokenKey);
  };
  
  const isAuthenticated = (): boolean => {
    const accessToken = getAppClientAccessToken();
    return !!accessToken;
  };

  useEffect(()=>{console.log(isAuthenticated())},[])

  if (false) {
    return <LoadingScreen logoSrc="/public/Images/Logo_NCE_Light.png" />;
  }

  return (
    <div style={currentView=='' ? {} : homePageStyleProps(attributes.DarkMode, targetImage)}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <RouterProvider router={router} />
        </ThemeProvider>
    </div>
  );
}

export default App
