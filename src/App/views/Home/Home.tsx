import React, { useState } from 'react'
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { CurrentResumeObject } from '../../models/Service/ResumeModel'
import IconButton from '@mui/material/IconButton';
import { AppBlockingSharp, Circle, Delete, Drafts, Facebook, FormatListBulleted, Inbox, LinkedIn, Send, WebStories } from '@mui/icons-material';
import ContactPhone from '@mui/icons-material/ContactPhone';

export const Home = () => {
  const [PersonalData, SetPersonalData] = useState(CurrentResumeObject.PersonalData)
  const [ExperienceData, SetExperienceData] = useState(CurrentResumeObject.Experience.items)

  let Experience = ExperienceData.map((experience)=>console.log(experience))

  return (

      <Grid container data-testid="Home"  >
        <Grid item xs={12} style={{height:"25px"}} />

        <Grid item xs={1} />

        <Grid item xs={10} textAlign="center" sx={{padding: 2, backgroundColor:"rgb(0, 0, 0, 0.7)"}}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h2" sx={{ margin: "0px", textAlign: "left" }}>
                {PersonalData.First} {PersonalData.Last} {PersonalData.Acronyms}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Typography variant="h5" sx={{ margin: "0px", textAlign: "right" }}>
                {/*PersonalData.Address.City*/} {/*PersonalData.Address.State*/}
              </Typography>
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
                          <AppBlockingSharp fontSize='large' /> 
                        </IconButton>
                      )
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
                ExperienceData.map((Experience)=>{
                  return(
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container>
                          <Grid item xs={10}>
                            {
                              <Stack direction="row">
                                <Typography variant="h4" style={{margin:"0px", paddingRight:15, textAlign:"left", display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                  <b style={{color:"rgb(186,210,231,0.8)"}}>{Experience.Company}</b> 
                                </Typography>
                              
                                <Typography variant="overline" style={{margin:"0px", textAlign:"left", display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}><b>{Experience.Organization}</b></Typography>
                              </Stack>
                            } 
                          </Grid>
                         
                          <Grid item xs={2}>
                            {
                              <p style={{margin:"0px", textAlign:"right"}}>
                                {String(Experience.Start.getMonth())}/{String(Experience.Start.getFullYear())} - {
                                !Experience.IsCurrent ? 
                                String(Experience.Start.getMonth()) + "/" + String(Experience.End.getFullYear()) 
                                  :
                                  "Current"
                                } 
                              </p>
                            }
                          </Grid>

                          <Grid item xs={6}>
                            { <Typography variant="h5" sx={{margin:"0px", textAlign:"left"}}>
                                {Experience.JobTitle}
                              </Typography>} 
                          </Grid>
                          <Grid item xs={6}>
                            {
                              <Typography variant="h5" sx={{margin:"0px", textAlign:"right"}}>
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
                                      <Stack direction="row" alignItems="center" gap={1}>
                                          
                                        <Circle sx={{width:"4px", }} /> <Typography sx={{margin:"0px"}} variant="body2">{Bullet.BulletText}</Typography>
                                          {Bullet.SubBullet[0].length>0 && Bullet.SubBullet.length>1 &&
                                            <List sx={{margin:"0px"}}>
                                              {
                                                Bullet.SubBullet.map((sub)=>
                                                  <ListItem sx={{margin:"0px"}}>
                                                    <Typography sx={{margin:"0px"}} variant="body1">{sub}</Typography>
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
  )
}