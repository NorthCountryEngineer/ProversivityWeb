import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Backdrop, CircularProgress } from '@mui/material';
import { Header } from './App/views/Components/Header';
import { router } from './App/router';
import theme from './App/theme/BaseTheme';
import './App/App.css';
import { AppHooks } from './App/App.hooks';
import { homePageStyleProps } from './App/models/Service/PropTypes';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';

function App() {
  const { attributes, targetImage, themeWithuserAttributes, currentView, authenticated } = AppHooks();

  useEffect(()=>{
    Auth.currentAuthenticatedUser()
      .then(user => console.log('User is authenticated:', user))
      .catch(() => console.log('User is not authenticated.'));
  })
  return (
    <div style={currentView=='' ? {} : homePageStyleProps(attributes.DarkMode, targetImage)}>

        <ThemeProvider theme={themeWithuserAttributes}>
          <CssBaseline />
          <Header />
          <Box sx={{ paddingTop: '115px' }}>
            <RouterProvider router={router} />
          </Box>
        </ThemeProvider>

    </div>
  );
}

export default App;
