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
        "Access to skilled and verified talent",
        "Flexible hiring options",
        "User-friendly experience",
      ],
      buttonText: "Sign Up",
      image: `/Images/BarnInterior.png`
    },
    {
      title: "Join the Platform and Find Opportunities to Showcase Your Skills",
      bulletPoints: [
        "Access to a wider customer base",
        "Flexible work arrangements",
        "The ability to earn more income",
      ],
      buttonText: "Join Now",
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