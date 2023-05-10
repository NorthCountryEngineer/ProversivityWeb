import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.7)',
    },
    secondary: {
      main: '#dc004e',
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
