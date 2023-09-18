import React, { SyntheticEvent, useState } from 'react'
import { TimelineView } from './components'
import { Box, Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Home = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ width: '100%', backgroundColor:"rgb(0, 0, 0, 0.7)", color:"white" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Professional Experience" value="1" sx={{color:'white'}}/>
              <Tab label="Personal Notes" value="2" sx={{color:'white'}}/>
              <Tab label="Life on the Farm" value="3" sx={{color:'white'}} />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <TimelineView />
          </TabPanel>
        </TabContext>
      </Box>


    </>
  )
}