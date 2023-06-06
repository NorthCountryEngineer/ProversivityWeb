import { Fragment, useCallback, useEffect, useState } from "react"
import { CalloutBoxes } from "./components"
import { ThemeProvider } from '@mui/material/styles'
import theme from "../../theme/BaseTheme"
import { AccountBox, Chat, FindInPage, Send, ThumbUp, Verified } from "@mui/icons-material"
import { Box, Container, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { Text } from "@aws-amplify/ui-react"


const segments = [
  { text: 'Built', color: 'white', transition: 4 },
  { text: 'Supported', color: 'white', transition: 4 },
  { text: 'Engineer', color: 'white', transition: 3 },
];

export function Home() {
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  const segment = segments[index];

  useEffect(() => {
    if (index === segments.length - 1) return;
    const timeoutId = setTimeout(() => {
      setIndex(index + 1);
    }, segment.transition * 1000); // Multiply transition by 1000 to convert to milliseconds
    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, [index, segment]);
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="start"
        sx={{
          backgroundColor: 'primary.main',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Grid item xs={6} sx={{
          marginTop: 0,
          marginLeft: 0,
        }}
        >
          <Typography variant="h3" align="left" sx={{ color: segment.color }}>
            North Country {segment.text}
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}