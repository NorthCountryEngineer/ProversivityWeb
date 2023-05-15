import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.7)',
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
  
});

export default theme;
