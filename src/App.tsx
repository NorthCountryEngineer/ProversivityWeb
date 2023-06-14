import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import theme from './App/theme/BaseTheme'
import { Header } from './App/components/Header'
import { AppHooks } from './App/App.hooks'
import { homePageStyleProps } from './App/models/Service/PropTypes'
import { router } from './App/router'
import { useEffect, useState } from 'react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { getUser } from './graphql/queries'
import { AuthProvider } from './App/views/Auth'

function App() {
  const { targetImage} = AppHooks()
  const [pageTitle, setPageTitle] = useState('North Country Engineer')
  const [email,setEmail] = useState('')

  async function getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      return user
    } catch (error) {
      console.error('Error retrieving current user:', error)
      return null
    }
  }

  async function getUserAttributes(sub) {
    try {
      const response:any = await API.graphql(graphqlOperation(getUser, { id: sub }))
      return response

    } 
    catch (error) {
      return {error:error}
    }
  }
  

  useEffect(() => {
    // Check if a title exists in local storage and update the state
    const storedTitle = localStorage.getItem('pageTitle')
    if (storedTitle) {
      setPageTitle(Array.isArray(storedTitle) ? storedTitle.join('\n') : storedTitle)
    }
    else localStorage.setItem('pageTitle', 'North Country Engineer')
    
    // Register an event listener to remove the title from local storage when the user leaves the page
    const removeTitleOnUnload = () => {
      localStorage.removeItem('pageTitle')
    }
    window.addEventListener('beforeunload', removeTitleOnUnload)

    // Deregister the listener and the event listener when the component is unmounted to prevent memory leaks
    return () => {
      window.removeEventListener('beforeunload', removeTitleOnUnload)
      localStorage.removeItem('pageTitle')
    }
  }, [])

  return (
    <div style={homePageStyleProps(targetImage)}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header title={pageTitle}/>
          <div style={{height:"115px"}}/>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
