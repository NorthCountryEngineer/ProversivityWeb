import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { PersonalData, PersonalDataTemplate } from '../../../models/Service/ResumeModel';
import { Cache } from 'aws-amplify';

export default function PersonalDataComponent({editModal}:any) {
    const [personalData, updatePersonalData] = useState<PersonalData>(PersonalDataTemplate)

    useEffect(()=>{
        let cachedResume = Cache.getItem('resume')
        updatePersonalData(cachedResume.temporaryResume.data.getResume.PersonalData) 
    },[])

    return (
        <>
            <AppBar position="static" color="primary" onClick={()=>editModal()}>
                <Toolbar disableGutters >
                    <Grid container spacing={0}>
                        <Grid item xs={3} display="flex" justifyContent="flex-start" alignItems="center">
                            <Stack
                                    direction="column"
                                    spacing={0}
                                >
                                    {personalData.First} {personalData.Middle} {personalData.Last}{personalData.Acronyms && ", "} {personalData.Acronyms}
                                <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    textDecoration: 'none',
                                    padding: '5px'
                                }}
                                >
                                    {
                                        personalData.Address.City===""?
                                        String(personalData.Address.State)
                                        :
                                        String(personalData.Address.City).concat(", ", String(personalData.Address.State))
                                    }
                                </Typography>
                                </Stack>
                                
                            </Grid>

                            <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
                                
                            </Grid>
                        
                            <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center" >
                                <Stack
                                    direction="column"
                                    spacing={0}
                                >

                                    <Typography 
                                        variant="subtitle1" 
                                        noWrap
                                        justifyContent="flex-end"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                        >
                                            {
                                                String(personalData.Contact.email)
                                            }

                                    </Typography>
                                    <Typography 
                                        variant="subtitle1" 
                                        noWrap
                                        justifyContent="flex-end"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {
                                            String(personalData.Contact.phone)
                                        }
                                    </Typography>

                                
                                </Stack>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            <Stack 
                direction="row" 
                spacing={3} 
                justifyContent="center"
                alignItems="center"
            >
                <div>{String(personalData.JobTitle)}</div>
            </Stack>
            </>
    );
}