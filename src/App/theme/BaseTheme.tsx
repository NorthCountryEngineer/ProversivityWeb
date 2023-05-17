import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.3)',
      dark: 'rgba(255, 255, 255, 0.6)',
    },
    secondary: {
      main: 'rgba(2, 142, 196, 255)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    body1: {
      color: 'white', // Set the text color to white
    },
    h1: {
      color: 'white'
    },
    h2: {
      color: 'white'
    },
    h3: {
      color: 'white'
    },
    h4: {
      color: 'white'
    },
    h5: {
      color: 'white'
    },
    h6: {
      color: 'white'
    }
  },
  
})

export default theme
