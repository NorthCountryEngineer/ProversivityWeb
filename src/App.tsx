import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import theme from './App/theme/BaseTheme'
import { Header } from './App/components/Header/Header'
import { AppHooks } from './App/App.hooks'
import { homePageStyleProps } from './App/models/Service/PropTypes'
import { router } from './App/router'
import { useEffect, useState } from 'react'
import { AuthProvider } from './App/functions/Authenticate'
import React from 'react'

const App = ()=> {
  
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