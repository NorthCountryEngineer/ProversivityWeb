import { PaletteMode } from '@mui/material';

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


const theme = (mode: PaletteMode) => ({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    mode: mode,
    primary: {
      main: '#FCFCFC',
      darker: '#EEEEEE',
    },
    neutral: {
      main: '#5F76CA',
      contrastText: '#ffff',
    },
  },
  typography: {
    fontFamily: 'Georama, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Georama';
          font-style: bold;
          font-display: swap;
          font-weight: 500; 
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});


export default theme;