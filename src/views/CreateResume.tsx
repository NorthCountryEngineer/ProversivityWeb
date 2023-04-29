/* src/App.js */
import { SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabsContext from '@mui/lab/TabContext'
import Container from '@mui/material/Container';
import Education from '../components/ResumeComponents/Edit/EditViews/Education'
import Experience from '../components/ResumeComponents/Edit/EditViews/Experience';
import Overview from '../components/ResumeComponents/Edit/EditViews/Overview';
import Skills from '../components/ResumeComponents/Edit/EditViews/Skills';
import { withAuthenticator } from '@aws-amplify/ui-react';

function CreateResume({ResumeID}:any){
    const [tab, setTab] = useState("0")
    
    const handleChange = (event: SyntheticEvent, newTab: string) => {setTab(newTab);};
    console.log(ResumeID)
    return(
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
                    <div>
                        <Container maxWidth="lg">
                            <TabsContext value={tab}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange}>
                                        <Tab label="Overview" value="1" />
                                        <Tab label="Experience" value="2" />
                                        <Tab label="Education" value="3" />
                                        <Tab label="Experience" value="4" />
                                        <Tab label="Skills" value="5" />
                                    </TabList>
                                    <TabPanel value="1"> <Overview /> </TabPanel>
                                    <TabPanel value="2"> <Experience ResumeID={ResumeID} /> </TabPanel>
                                    <TabPanel value="3"> <Education ResumeID={ResumeID} /> </TabPanel>
                                    <TabPanel value="4"> <Experience ResumeID={ResumeID} /> </TabPanel>
                                    <TabPanel value="5"> <Skills ResumeID={ResumeID} /> </TabPanel>
                                </Box>
                            </TabsContext>
                        </Container>
                    </div>
                </Box>
            </Box>
        </>
    )
}


export default withAuthenticator(CreateResume)