import React from "react"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(244,244,244,.8)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  return (
    <div>
      <Typography variant="h2">Service List</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item onClick={()=>{window.location.replace("/OneOnOneHelper")}}>1:1 manager</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}