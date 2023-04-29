import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

export const drawerWidth = 400;

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));