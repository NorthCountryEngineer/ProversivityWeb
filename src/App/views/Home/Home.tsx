import React, { useState } from 'react'
import { Grid, Stack } from "@mui/material"
import { CurrentResumeObject } from '../../models/Service/ResumeModel'
import IconButton from '@mui/material/IconButton';
import { AppBlockingSharp, Delete, Facebook, LinkedIn, Send, WebStories } from '@mui/icons-material';
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
                        <p>{Experience.Company}</p>
                        <p>{String(Experience.End)}</p>
                        <p>{Experience.IsCurrent}</p>
                        <p>{Experience.JobTitle}</p>
                        <p>{Experience.Location}</p>
                        <p>{Experience.Organization}</p>
                        <p>{Experience.Overview}</p>
                        <p>{String(Experience.Start)}</p>
                        <p>{Experience.BulletPoints.map((BulletPoint)=>
                          <p>{BulletPoint.BulletText}</p>
                        )}</p>
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