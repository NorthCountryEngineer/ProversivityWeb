import { makeStyles } from '@mui/styles';
import { HomeContactForm } from "./HomeComponents";

export function Home() {
  const isMobile = window.innerWidth <= 600;
  const useStyles = makeStyles(() => ({
    paper: {
      padding: 2,
      textAlign: 'center',
      width: '100%',
      maxWidth: 600,
      margin: 'auto',
      marginTop: 100,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 2,
    },
    textField: {
      margin: 1,
      width: '100%',
    },
    button: {
      margin: 2,
    },
}));

const classStyles = useStyles();

  return (
    <HomeContactForm mobile={isMobile} classStyles={classStyles}/>
  );
}
