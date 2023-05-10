import { useEffect } from "react";
import { CalloutBoxes } from "./HomeComponents";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/BaseTheme"

function Home() {
  const isMobile = window.innerWidth <= 600;

  useEffect(()=>{
    localStorage.setItem('pageTitle', 'Engineering the New York North Country')
  },[])

  const callouts = [
    {
      title: "Find Top Engineering Talent for Your Projects",
      bulletPoints: [
        "Connect with local service providers by either posting a project request or browsing through our directory of providers.",
        "Receive proposals from interested service providers, or reach out to them directly to discuss your project.",
        "Choose the right provider for you and coordinate directly with them to get the job done.",
      ],
      buttonText: "Learn more about becoming a customer",
      image: `/Images/BarnInterior.png`
    },
    {
      title: "Join the Platform and Find Opportunities to Showcase Your Skills",
      bulletPoints: [
        "Create a skills profile and take assessments to earn verificatio badges and showcase your expertise to potential customers.",
        "Browse customer project requests and submit proposals with your desired rates for the jobs you're interested in.",
        "Coordinate directly with the customer and get paid securely through the app on a schedule you both agree to",
      ],
      buttonText: "Learn more about being a service provider",
      image: `/Images/BarnInterior.png`,
    },
  ];

  return (
    
    <ThemeProvider theme={theme}>
      <CalloutBoxes isMobile={isMobile} callouts={callouts} />
    </ThemeProvider>
  );
};

export default Home