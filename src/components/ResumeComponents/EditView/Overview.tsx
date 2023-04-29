import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import { Grid, List, ListItem, ListItemText } from '@mui/material'
import { Cache } from 'aws-amplify';
import { Overview as OverviewInterface, OverviewTemplate } from '../../../models/Service/ResumeModel';

function Overview({editModal}:any) {
  const [overview,setOverview] = useState<OverviewInterface>(OverviewTemplate)

  function accomplishmentBullets(){
    return (
      <List dense={true}>
          {overview.Accomplishments.map((accomplishment,i)=>{
            return(<ListItem>
              <ListItemText
                primary={i}
              />   
            </ListItem>
        ) })}
      </List>
  )}

  useEffect(()=>{
    let cachedResume = Cache.getItem('resume')
    let {Resume,createdAt,id,overviewResumeId,owner,updatedAt,...OverviewData} = cachedResume.temporaryResume.data.getResume.Overview
    setOverview(OverviewData)
  },[])

  return(
      <Grid container spacing={2} onClick={()=>editModal()} >
        <Grid item xs={12} sx={{padding:'10px'}} />
          <Typography variant="h6" gutterBottom>
              {overview.Summary.Summary}
          </Typography>

        <Grid item xs={12} sx={{padding:'10px'}} />
      </Grid>
  );
}


export default Overview