import React, { useState } from 'react'
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { CurrentResumeObject } from '../../models/Service/ResumeModel'
import IconButton from '@mui/material/IconButton';
import { AppBlockingSharp, Delete, Drafts, Facebook, Inbox, LinkedIn, Send, WebStories } from '@mui/icons-material';
import ContactPhone from '@mui/icons-material/ContactPhone';
import Divider from '@mui/material/Divider';

export const Home = () => {
  const [PersonalData, SetPersonalData] = useState(CurrentResumeObject.PersonalData)
  const [ExperienceData, SetExperienceData] = useState(CurrentResumeObject.Experience.items)

  let Experience = ExperienceData.map((experience)=>console.log(experience))

  return (

      <Grid container data-testid="Home"  >
        <Grid item xs={12} style={{height:"25px"}} />

        <Grid item xs={1} />

        <Grid item xs={10} textAlign="center" sx={{padding: 2, backgroundColor:"rgb(0, 0, 0, 0.3)"}}>
          <Grid container>
            <Grid item xs={6}>
              {<p style={{margin:"0px", textAlign:"left"}}>{PersonalData.First} {PersonalData.Last} {PersonalData.Acronyms} </p>} 
            </Grid>
            <Grid item xs={6}>
              {<p style={{margin:"0px", textAlign:"right"}}>{PersonalData.Address.City}, {PersonalData.Address.State}</p>}
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              {<p style={{margin:"0px", textAlign:"left"}}>{PersonalData.JobTitle}</p>} 
            </Grid>
            <Grid item xs={6}>
              <p style={{margin:"0px", textAlign:"right"}}>
                <IconButton color="info" href={"mailto:" +PersonalData.Contact.email} target="_blank">
                  <Send fontSize='large' /> 
                </IconButton>
                <IconButton color="info" href={"tel:"+PersonalData.Contact.phone} target="_blank">
                  <ContactPhone fontSize='large' /> 
                </IconButton>

                {PersonalData.SocialMedias.map(
                  (SocialMedia)=>
                  {
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
                  }
                )
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
                          <Grid item xs={6}>
                            {<p style={{margin:"0px", textAlign:"left"}}>{Experience.Company}  -  {Experience.JobTitle}</p>} 
                          </Grid>
                          <Grid item xs={6}>
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
                            {<p style={{margin:"0px", textAlign:"left"}}>{Experience.Organization}</p>} 
                          </Grid>
                          <Grid item xs={6}>
                            {
                              <p style={{margin:"0px", textAlign:"right"}}>
                                {Experience.Location}
                              </p>
                            }
                          </Grid>

                          <Grid item xs={12}>
                            <p style={{margin:"0px", marginTop:"15px", textAlign:"left", paddingLeft:"15px", paddingRight:"15px" }}>{Experience.Overview}</p>
                            <List sx={{paddingLeft:"30px", paddingRight:"30px"}}>
                              {Experience.BulletPoints.map((Bullet)=>{
                                return(
                                  <ListItem disablePadding>
                                    <ListItem>
                                      <Typography variant="body1">
                                        {Bullet.BulletText}
                                        <List>
                                          {
                                            Bullet.SubBullet &&
                                            Bullet.SubBullet.map((sub)=>
                                              <ListItem>
                                                <Typography variant="body2">{sub}</Typography>
                                              </ListItem>
                                            )
                                          }
                                        </List>         
                                      </Typography>
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