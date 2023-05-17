import { AccountBox, CheckCircle, FreeBreakfast, Message, MonetizationOn } from "@mui/icons-material"
import { CalloutBoxes } from "../../Home"
import { Grid } from "@mui/material"
import SignupForm from "./AboutComponents"

export function About(){
  const callouts = [
    {
      title:'Get started in a few short steps', 
      image:'/Images/Home_provider.jpg', 
      steps:[
        {
          icon: <AccountBox fontSize="large" />, 
          text:'Answer a few questions to create your profile'
        },
        {
          icon: <CheckCircle fontSize="large" />, 
          text:'Take skills tests to earn skills badges'
        },
        {
          icon: <Message fontSize="large" />, 
          text:'Answer requests for proposals or message prospective clients'
        },
        {
          icon: <MonetizationOn fontSize="large" />, 
          text:'Communicate, set a payment schedule, and get paid right in application'
        },
        {
          icon: <FreeBreakfast fontSize="large" />, 
          text:'All for free!'
        },
      ], 
      buttonText:'Get started!'
    }]

  return(
    <Grid container sx={{backgroundColor:'primary.main'}}>
      <Grid item xs={6}>
        <CalloutBoxes isMobile={false} callouts={callouts} />
      </Grid>
      <Grid item xs={6} >
        <SignupForm />
      </Grid>
    </Grid>
  )
}