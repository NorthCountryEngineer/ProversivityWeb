import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { Fragment } from "react";
import React from "react";

export const Blog = React.forwardRef(()=>{
    const AnimatedTypography = styled(Typography)`
      display: inline-block;
      opacity: 0;
      animation: fadeIn 0.5s ease-in-out forwards;
  
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;
  
    const AnimatedHeaderText = ({ segments }) => {
      return (
        <Typography variant="h3" align="left">
          {segments.map((segmentGroup, groupIndex) => (
            <Fragment key={groupIndex}>
              {segmentGroup.map((segment, segmentIndex) => (
                <Fragment key={segmentIndex}>
                  <AnimatedTypography
                    variant="h3"
                    style={{
                      animationDelay: `${segment.transition}s`,
                      fontWeight: 'bold',
                      color: segment.color,
                    }}
                  >
                    {segment.text}
                  </AnimatedTypography>
                  <br />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Typography>
      );
    }
  
    const segments = [
      [
        { text: 'North Country Built', color: 'white', transition: 0 },
        { text: 'North Country Supported', color: 'white', transition: 1 },
        { text: 'North Country Engineer', color: 'white', transition: 3 },
      ]
    ];
  


  
  return(
    <Grid container 
      sx={{
        backgroundColor: 'primary.main',
        justifyContent: 'center',
        align: 'center',
      }}
    >
      <Grid item xs={6}>
        <Typography variant="h3" align="right">
          <AnimatedHeaderText segments={segments} />
        </Typography>
      </Grid>
      <Grid item xs={6} />


      <Grid item xs={12}>

      </Grid>
    </Grid>
  )
})