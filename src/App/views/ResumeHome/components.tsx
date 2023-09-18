import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, Stack, Typography } from "@mui/material"
import { CurrentResumeObject } from '../../models/Service/ResumeModel'
import IconButton from '@mui/material/IconButton'
import { LinkedIn, Send, WebStories } from '@mui/icons-material'
import ContactPhone from '@mui/icons-material/ContactPhone'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@mui/lab'

const samplePayload = { name: "My first todo", address: "Hello world!" };

export function TimelineView(){
  const [ExperienceData, SetExperienceData] = useState(CurrentResumeObject.Experience.items)
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)

  const openExperienceModal = () => {
    setExperienceModalOpen(true)
  }

  const handleClose = () => {
    setExperienceModalOpen(false);
  };

  return(
    <Timeline position="alternate">
      {
        ExperienceData.map((Experience,index)=>{
          return(
          <>
            <TimelineItem onClick={openExperienceModal}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="white"
              >
                {String(Experience.Start.getMonth()) + "/" + String(Experience.Start.getFullYear())}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  {Experience.Icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h4" component="span">
                  {Experience.Company}
                </Typography>
                <Typography variant="h6">{Experience.JobTitle}</Typography>
              </TimelineContent>
            </TimelineItem>
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
                    <b>{Experience.Company}</b> 
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
                      <b>{Experience.Organization}</b>
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
                        {String(Experience.Start.getMonth())}/{String(Experience.Start.getFullYear())} - {
                        !Experience.IsCurrent ? 
                        String(Experience.Start.getMonth()) + "/" + String(Experience.End.getFullYear()) 
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
                            {Experience.JobTitle}
                          </Typography>} 
                      </Grid>
                      <Grid item xs={6}>
                        {
                          <Typography variant="h5" sx={{margin:"0px", textAlign:"right", color:"black"}}>
                            {Experience.Location}
                          </Typography>
                        }
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="subtitle1" style={{margin:"0px", marginTop:"15px", textAlign:"left", paddingLeft:"15px", paddingRight:"15px" }}>
                          {Experience.Overview}
                        </Typography>

                        <List sx={{paddingLeft:"60px", paddingRight:"60px"}}>
                          {Experience.BulletPoints.map((Bullet)=>{
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
        </>














          )
        })
      }

    </Timeline>
  )
}

export function Resume() {
  const PersonalData = CurrentResumeObject.PersonalData
  const ExperienceData = CurrentResumeObject.Experience.items
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)
  const [currentExperienceView, setCurrentExperienceView] = useState(0)

  const loadExperienceModal = (experienceView:number) => {
    setCurrentExperienceView(experienceView)
    setExperienceModalOpen(true)
  }

  const handleClose = () => {
    setExperienceModalOpen(false);
  };

  return(
    <>
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
    </>

  )
}

export const HomeCustomerConversation = () => {
  return <></>;
};