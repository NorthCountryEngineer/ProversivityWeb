import React, {useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import Divider from '@mui/material/Divider';
import MockData from '../../../dataMock.json'

export default function Experience(){
    let ExperienceArray:any = MockData[0]["Experience"]

    const resumeItems = ExperienceArray.map((Experience:any)=>
        <>
            <Grid container spacing={0}>
                <Grid item xs={4} display="flex" justifyContent="flex-start" alignItems="center">
                    <Typography variant="h4" gutterBottom textAlign='left' sx={{padding:'10px;'}} >
                        {Experience["CompanyName"]}
                    </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4} display="flex" justifyContent="flex-end" alignItems="center">
                    <Typography variant="h5" gutterBottom textAlign='left' sx={{padding:'10px;'}} >
                        Start: {Experience["StartDate"]}
                        {Experience["IsCurrentRole"] ? "/ Present" : "/ End: " + Experience["EndDate"]}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom textAlign='left' sx={{paddingLeft:'10px;'}} >
                        {Experience["JobTitle"]}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom textAlign='left' sx={{paddingLeft:'10px;'}} >
                            {Experience["Summary"]}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{padding:'10px;'}} />

                <Grid item xs={2} sx={{padding:'10px;'}}/>
                <Grid item xs={6}>
                    {Experience["highlights"].map((Highlight:any)=>
                        <>
                            <Typography variant="body1" gutterBottom textAlign='left' sx={{paddingLeft:'10px;'}} >
                                {Highlight[0]}
                            </Typography>
                           
                            {
                                Highlight[1].map(
                                    (Subhighlight:any)=>
                                        <Typography variant="body2" gutterBottom textAlign='left' sx={{paddingLeft:'10px;'}} >
                                            {Subhighlight}
                                        </Typography>
                                )
                            }
                            
                        </>
                    )}
                </Grid>
                <Grid item xs={3} sx={{padding:'10px;'}}/>

                <Grid item xs={12} sx={{padding:'10px;'}} />


                <Divider />
            </Grid>
        </>

    )

    return(
        <>
            <Typography variant="h3" gutterBottom textAlign='left' sx={{padding:'10px;'}} >
                Professional Experience
            </Typography>
            {resumeItems}
            
        </>
    )
}