import { useEffect, useState, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { API, graphqlOperation, Hub } from 'aws-amplify';
import { Cache } from 'aws-amplify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Backdrop, CircularProgress } from '@mui/material';
import { updateUserPreferences } from './graphql/mutations';
import { checkuserPreferencesOnLoad } from './functions/User/UpdatePreferences';
import { randomInteger } from './functions/Service/HelperFunctions';
import { Header } from './views/components/Header';
import { Preferences } from './models/Service/UserModel';
import { homePageStyleProps } from './models/Service/PropTypes';
import { router } from './router';
import theme from './config/UI/BaseTheme';
import './App.css';


const initialUserAttributes:Preferences = {
  id: "",
  User: "",
  DisplayName: "",
  DarkMode: false
}

function App() {
  const [attributes, setAttributes] = useState<Preferences>(initialUserAttributes)
  const [userAttributesLoaded, setUserAttributesLoaded] = useState<boolean>(false)
  const [targetImage, updateTargetImage] = useState<number>(randomInteger(1,4))
  const themeWithuserAttributes = useMemo(() => createTheme(theme(attributes.DarkMode?'dark':'light')), [attributes]);
  const [currentView, setCurrentView] = useState(String(String(window.location).split("/").pop()))

  useEffect(()=>{
    checkuserPreferencesOnLoad(setUserAttributesLoaded,setAttributes)
  }, [])

  Hub.listen('DarkMode Update', (data:any) => {
    try{
      darkmodeUpdate()
    }catch(error){
      console.error(error)
    }
  })

  Hub.listen('AttributesUpdate', (data:any) => {
    try{
      let payload = data.payload.data.userPreferences.data.listUserPreferences.items[0]
      
      setAttributes({
        id: payload.id,
        User: payload.User,
        DisplayName: payload.DisplayName,
        DarkMode:payload.DarkMode
      })

      Cache.setItem('DarkMode',payload.DarkMode );
    }catch(error){
      console.error(error)
    }
  })

  Hub.listen('NewAttributesAssignment', (data:any) => {
    try{
      let payload = data.payload.data.userPreferences.data.createUserPreferences.items[0]
      console.log(payload)
    }catch(error){
      console.error(error)
    }
  })


  const darkmodeUpdate = async() =>{
    try{
      setUserAttributesLoaded(false)
      Cache.setItem('DarkMode',!attributes.DarkMode );
      let userPreferencesUpdate = await API.graphql(graphqlOperation(updateUserPreferences, {input: {id: attributes.id, DarkMode:!attributes.DarkMode}}))
      updateTargetImage(randomInteger(1,9))
      if(userPreferencesUpdate){
        setUserAttributesLoaded(true)
        setAttributes({...attributes, DarkMode:!attributes.DarkMode})
      }
    }catch(error){console.log(error)}
  }

  return (
    <div style={currentView=='' ? {} : homePageStyleProps(attributes.DarkMode, targetImage)}>
      {
        userAttributesLoaded && attributes?
        <ThemeProvider theme={themeWithuserAttributes}>
          <CssBaseline />
          <Header />
          <Box sx={{ paddingTop: '115px' }}>
            <RouterProvider router={router} />
          </Box>
        </ThemeProvider>
        : 
          <ThemeProvider theme={themeWithuserAttributes}>
            <CssBaseline />
            <Backdrop sx={{ color: '#fff', zIndex: (themeWithuserAttributes) => themeWithuserAttributes.zIndex.drawer + 1 }} open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </ThemeProvider>
      }
    </div>
    
  );
}

export default App;


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}