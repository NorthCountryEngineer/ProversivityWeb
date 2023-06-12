import { useEffect, useState } from "react"

import { Grid} from "@mui/material"
import { NewsletterForm } from "./components"




export function Home() {
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  return (
      <Grid container>
        <Grid item xs={5} textAlign="center">
          
        </Grid>
        <Grid item xs={7} textAlign="center">
          <NewsletterForm />
        </Grid>
      </Grid>
  )
}


/**
 * Dynamic title component:
 * 
 * import { ThemeProvider } from '@mui/material/styles'
   import theme from "../../theme/BaseTheme"
 * 
 * const [index, setIndex] = useState(0)
 * 
 * const segments = [
    { text: 'Built', color: 'white', transition: 4 },
    { text: 'Supported', color: 'white', transition: 4 },
    { text: 'Engineer', color: 'white', transition: 3 },
  ];
 * 
 * <Typography variant="h3" align="left" sx={{ color: segment.color }}>
      North Country {segment.text}
    </Typography>

    const segment = segments[index];

    useEffect(() => {
      if (index === segments.length - 1) return;
      const timeoutId = setTimeout(() => {
        setIndex(index + 1);
      }, segment.transition * 1000); // Multiply transition by 1000 to convert to milliseconds
      return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
    }, [index, segment]);


 */