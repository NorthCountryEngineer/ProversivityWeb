import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, Stack, Tab, Tabs, Typography } from "@mui/material"
import { CurrentResumeObject } from '../../models/Service/ResumeModel'
import IconButton from '@mui/material/IconButton'
import { LinkedIn, Send, WebStories } from '@mui/icons-material'
import ContactPhone from '@mui/icons-material/ContactPhone'
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


export const Home = () => {
  const PersonalData = CurrentResumeObject.PersonalData
  const ExperienceData = CurrentResumeObject.Experience.items
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)
  const [currentExperienceView, setCurrentExperienceView] = useState(0)
  const [value, setValue] = useState('1')

  const loadExperienceModal = (experienceView:number) => {
    setCurrentExperienceView(experienceView)
    setExperienceModalOpen(true)
  }

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  const handleClose = () => {
    setExperienceModalOpen(false);
  };

  return (
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

      <Grid container data-testid="Home"  >

        <Grid item xs={1} />

        <Grid item xs={10} textAlign="center" sx={{padding: 2, backgroundColor:"rgb(0, 0, 0, 0.7)"}}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h2" sx={{ margin: "0px", textAlign: "left" }}>
                {PersonalData.First} {PersonalData.Last} {PersonalData.Acronyms}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
             
            </Grid>
            <Grid item xs={6}>
              {
                <Typography variant="h4" sx={{margin:"0px", textAlign:"left"}}>
                  {PersonalData.JobTitle}
                </Typography>
              } 
            </Grid>
            <Grid item xs={6}>
              <p style={{margin:"0px", textAlign:"right"}}>
                <IconButton color="info" href={"mailto:" +PersonalData.Contact.email} target="_blank">
                  <Send fontSize='large' /> 
                </IconButton>
                <IconButton color="info" href={"tel:"+PersonalData.Contact.phone} target="_blank">
                  <ContactPhone fontSize='large' /> 
                </IconButton>
                {
                  PersonalData.SocialMedias.map((SocialMedia)=>{
                    if(SocialMedia.type==="LinkedIn"){
                      return(
                        <IconButton color="info" href={SocialMedia.URL} target="_blank">
                          <LinkedIn fontSize='large' /> 
                        </IconButton>
                      )
                    }
                    if(SocialMedia.type==="Personal_Webpage"){
                      return(
                        <IconButton color="info" href={SocialMedia.URL}  target="_blank">
                          <WebStories fontSize='large' /> 
                        </IconButton>
                      )
                    }
                    else{
                      return(<></>)
                    }
                  })
                }
              </p>
            </Grid>
            
          </Grid>

          <hr />

          <Grid container>
            <Grid item xs={12}>
              {
                ExperienceData.map((Experience,index)=>{
                  return(
                    <Grid container>
                      <Grid item xs={6}>
                        {
                          <Stack direction="row">
                            <Typography 
                              onClick={()=>loadExperienceModal(index)} 
                              variant="h4" 
                              style={{
                                margin:"0px", 
                                paddingRight:15, 
                                textAlign:"left", 
                                display: 'flex', 
                                alignItems: 'flex-end', 
                                justifyContent: 'flex-end' 
                              }}
                            >
                              <b style={{color:"rgb(186,210,231,0.8)"}}>{Experience.Company}</b> 
                            </Typography>
                        
                          </Stack>
                        } 
                      </Grid>
                      <Grid item xs={6}>
                    
                        { <Typography variant="h5" sx={{margin:"0px", textAlign:"left"}}>
                            {Experience.JobTitle}
                          </Typography>
                        } 
                       
                      </Grid>
                      
                    </Grid>
                  )
                })
              }
             
              <p style={{margin:"0px", textAlign:"right"}}>
                
              </p>
            </Grid>
          </Grid>

        </Grid>


        <Grid item xs={1} />


      </Grid>
      </TabPanel>

      <Dialog
        fullWidth={true}
        maxWidth="xl"
        open={experienceModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{backgroundColor:"black"}}
      >
        <DialogTitle id="alert-dialog-title">
          {
            <Grid container>
              <Grid item xs={3}>
                <Typography 
                  variant="h4" 
                  style={{
                    margin:"0px", 
                    padding:"0px",
                    paddingRight:15, 
                    textAlign:"left", 
                    display: 'flex', 
                    alignItems: 'flex-end', 
                    justifyContent: 'flex-end',
                    color:"InfoText"
                  }}
                >
                  <b>{ExperienceData[currentExperienceView].Company}</b> 
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack direction="column" sx={{padding:"0px",margin:"0px"}}>
                  <Typography 
                    variant="overline" 
                    style={{
                      margin:"0px", 
                      padding:"0px",
                      textAlign:"left", 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      justifyContent: 'flex-start' ,
                      color:"InfoText"
                    }}
                  >
                    <b>{ExperienceData[currentExperienceView].Organization}</b>
                  </Typography>
                  {
                    <Typography 
                    variant="overline" 
                    style={{
                      margin:"0px", 
                      padding:"0px",
                      textAlign:"left", 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      justifyContent: 'flex-start' ,
                      color:"InfoText"
                    }}
                  >
                      {String(ExperienceData[currentExperienceView].Start.getMonth())}/{String(ExperienceData[currentExperienceView].Start.getFullYear())} - {
                      !ExperienceData[currentExperienceView].IsCurrent ? 
                      String(ExperienceData[currentExperienceView].Start.getMonth()) + "/" + String(ExperienceData[currentExperienceView].End.getFullYear()) 
                        :
                        "Current"
                      } 
                    </Typography>
                  }
                </Stack>
              </Grid>
            </Grid>
          } 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            

              <Grid container>
                <Grid item xs={12}>
                  <Grid container>

                    <Grid item xs={6}>
                      { <Typography variant="h6" sx={{margin:"0px", textAlign:"left", color:"black"}}>
                          {ExperienceData[currentExperienceView].JobTitle}
                        </Typography>} 
                    </Grid>
                    <Grid item xs={6}>
                      {
                        <Typography variant="h5" sx={{margin:"0px", textAlign:"right", color:"black"}}>
                          {ExperienceData[currentExperienceView].Location}
                        </Typography>
                      }
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="subtitle1" style={{margin:"0px", marginTop:"15px", textAlign:"left", paddingLeft:"15px", paddingRight:"15px" }}>
                        {ExperienceData[currentExperienceView].Overview}
                      </Typography>

                      <List sx={{paddingLeft:"60px", paddingRight:"60px"}}>
                        {ExperienceData[currentExperienceView].BulletPoints.map((Bullet)=>{
                          return(
                            <ListItem disablePadding sx={{margin:"0px"}}>
                              <ListItem>
                                <Stack direction="column" alignItems="flex-start" gap={1}>
                                    
                                   <Typography sx={{margin:"0px", color:"black"}} variant="body2">{Bullet.BulletText}</Typography>
                                    {Bullet.SubBullet[0].length>0 && Bullet.SubBullet.length>1 &&
                                      <List sx={{margin:"0px"}}>
                                        {
                                          Bullet.SubBullet.map((sub)=>
                                            <ListItem sx={{margin:"0px"}}>
                                              <Typography sx={{margin:"0px", color:"black"}} variant="body1">{`\u2022 ${sub}`}</Typography>
                                            </ListItem>
                                          )
                                        }
                                      </List>   
                                    }      
                                </Stack>
                              </ListItem>                         
                            </ListItem>
                          )
                        })}
                      </List>
                      <hr />
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>

              









          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>


      </TabContext>             
    </Box>



      
  )
}