import { useEffect } from "react";
import { CalloutBoxes } from "./HomeComponents";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/BaseTheme"
import { AccountBox, Chat, FindInPage, Send, ThumbUp, Verified } from "@mui/icons-material";

function Home() {
  const isMobile = window.innerWidth <= 600;

  useEffect(()=>{
    localStorage.setItem('pageTitle', 'North Country Engineer')
  },[])

  const callouts = [  
    {    
      title: "Find Talent",    
      steps: [
        {
          icon: <FindInPage />,        
          text:  "Connect with local service providers who can help you with your needs.",  
        },      
        {        
          icon: <Chat />,        
          text:  "Reach out to service providers and discuss details",      
        },      
        {       
          icon: <ThumbUp />,        
          text: "Browse proposals and choose the service provider you want",      
        },
        {
          icon: <Send />,
          text:
            "Coordinate directly with the service provider and provide secure payment right through the app on a schedule you both agree to!",
        },
    ],
    buttonText: "Learn more about becoming a customer",
    image: `/Images/Home_customer.jpg`,
},
{
  title: "Join the Talent Network",
  steps: [
      {
        icon: <AccountBox />,
        text:
          "Create a free skills profile for customers to view",
      },
      {
        icon: <Verified />,
        text:
          "Increase your chances of being hired by taking free skills assessments.",
      },
      {
        icon: <FindInPage />,
        text:
          "Browse customer profiles and customer requests and coordinate directly with them in app",
      },
      {
        icon: <Send />,
        text:
          "Get paid securely through the app on a schedule you both agree to!",
      },
    ],
    buttonText: "Learn more about being a service provider",
    image: `/Images/Home_provider.jpg`,
  },
];


  return (
    
    <ThemeProvider theme={theme}>
      <CalloutBoxes isMobile={isMobile} callouts={callouts} />
    </ThemeProvider>
  );
};

export default Home