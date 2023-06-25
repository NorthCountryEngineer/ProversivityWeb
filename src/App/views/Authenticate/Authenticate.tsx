import { SignupForm, SigninForm, TabPanel, StyledTabs, StyledTab } from "./components"
import { useContext, useEffect } from "react"
import { Box, Grid, Tab, Tabs } from "@mui/material"
import React from 'react'
import { AuthContext } from "../../functions/Authenticate"

export const Authenticate = () => {
  const [value, setValue] = React.useState(0);

  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext ? authContext.isAuthenticated : false

  console.log(isAuthenticated)
  
  useEffect(()=>{
    localStorage.setItem('pageTitle', ['NYC Quality Tech.','NNY Prices.'].join('\n'))
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <>
        <Box sx={{height:"25px"}} />
        <Grid container data-testid="Auth">
          <Grid item xs={2} textAlign="center" />
          <Grid item xs={8} textAlign="center">
            {!isAuthenticated &&
              <>
                <Box sx={{ width: '100%', backgroundColor: "rgb(255,255,255,.6)" }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "rgb(10,55,50)" }}>
                    <StyledTabs
                      value={value}
                      onChange={handleChange}
                      aria-label="styled tabs example"
                    >
                        <StyledTab label="Sign In" />
                        <StyledTab label="Sign Up" />
                    </StyledTabs>
                  </Box>
                  
                  <TabPanel value={value} index={0}>
                    <SigninForm />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <SignupForm />
                  </TabPanel>
                </Box>
              </>
            }
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </>
  )
}


