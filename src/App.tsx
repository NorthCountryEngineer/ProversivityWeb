import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './App/theme/BaseTheme';
import { Header } from './App/views/Components/Header';
import { AppHooks } from './App/App.hooks';
import { LoadingScreen } from './App/views/Components/Landing';
import { homePageStyleProps } from './App/models/Service/PropTypes';
import { router } from './App/router';
import { useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';

function App() {
  const { attributes, targetImage, currentView } = AppHooks();
  const [pageTitle, setPageTitle] = useState('North Country Engineer');
  const [email,setEmail] = useState('')

  async function getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user.attributes.email)
      setEmail(user.attributes.email)
      return user;
    } catch (error) {
      console.log('Error retrieving current user:', error);
      return null;
    }
  }

  async function getUserAttributes(sub) {
    try {
      const response:any = await API.graphql(graphqlOperation(getUser, { id: sub }));
      return response;
    } 
    catch (error) {
      return {error:error};
    }
  }

  async function createNewUser(email){
    try{
      const newUser = await API.graphql(graphqlOperation(createUser, {email:email}))
      console.log(newUser)
      return(newUser)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getCurrentUser().then((user) => {
      try{
        getUserAttributes(user.attributes.sub).then((userCredentials)=>{
          if(userCredentials.error){
            console.log("Error retrieving user credentials: ", userCredentials.error)
            let newUser = createNewUser(email)
            console.log(newUser)
          }
        })
      }catch(error){
        console.error(error)
      }
    })



    // Check if a title exists in local storage and update the state
    const storedTitle = localStorage.getItem('pageTitle');
    if (storedTitle) setPageTitle(storedTitle);
    else localStorage.setItem('pageTitle', 'North Country Engineer')
    
    // Register an event listener to remove the title from local storage when the user leaves the page
    const removeTitleOnUnload = () => {
      localStorage.removeItem('pageTitle');
    };
    window.addEventListener('beforeunload', removeTitleOnUnload);

    // Deregister the listener and the event listener when the component is unmounted to prevent memory leaks
    return () => {
      window.removeEventListener('beforeunload', removeTitleOnUnload);
      localStorage.removeItem('pageTitle');
    };
  }, []);

  if (false) {
    return <LoadingScreen logoSrc="/public/Images/Logo_NCE_Light.png" />;
  }

  return (
    <div style={currentView == '' ? {} : homePageStyleProps(attributes.DarkMode, targetImage)}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title={pageTitle}/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
