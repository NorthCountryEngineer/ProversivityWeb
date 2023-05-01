import { CalloutBoxes, FounderName } from "./HomeComponents";
import { Box } from "@mui/system";

export default function Home() {
  const isMobile = window.innerWidth <= 600;

  const callouts = [
    {
      title: "Find Top Engineering Talent for Your Projects",
      bulletPoints: [
        "Access to skilled and verified talent",
        "Flexible hiring options",
        "User-friendly experience",
      ],
      buttonText: "Sign Up",
    },
    {
      title: "Join the Platform and Find Opportunities to Showcase Your Skills",
      bulletPoints: [
        "Access to a wider customer base",
        "Flexible work arrangements",
        "The ability to earn more income",
      ],
      buttonText: "Join Now",
      image: "your-photo-url.jpg",
    },
  ];

  return (
    <>
      <FounderName />
      <CalloutBoxes isMobile={isMobile} callouts={callouts} />
    </>
  );
};