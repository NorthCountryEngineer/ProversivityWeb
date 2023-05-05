import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Header } from './App/views/Components/Header';
import { router } from './App/router';
import './App/App.css';
import { AppHooks } from './App/App.hooks';
import { homePageStyleProps } from './App/models/Service/PropTypes';
import { LoadingScreen } from './App/views/Components/Landing';
import { theme } from './App/theme/BaseTheme';

export default function App() {
  const { attributes, targetImage, currentView, authenticated } = AppHooks();

  if (false) {
    return <LoadingScreen logoSrc="/public/Images/Logo_NCE_Light.png" />;
  }

  return (
    <div style={currentView=='' ? {} : homePageStyleProps(attributes.DarkMode, targetImage)}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header isAuthenticated={authenticated}/>
          <Box sx={{ paddingTop: '115px' }}>
            <RouterProvider router={router} />
          </Box>
        </ThemeProvider>
    </div>
  );
}

