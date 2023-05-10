import { Avatar, Box, Button, Stack, Typography } from "@mui/material"
import { HomepageCalloutsProps } from "./HomeTypes";
import Image from "mui-image";

export const CalloutBoxes = ({ isMobile, callouts }: HomepageCalloutsProps) => {
  return (
    <Box
        sx={{
          minHeight: "110vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/BarnInterior.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
    >
      {callouts.map((callout, index) => (
        <Box
          key={index}
          sx={{
            width: '650px',
            height: '500px',
            p: 5,
            m: 3,
            bgcolor: 'primary.main',
            boxShadow: 1,
            alignItems: 'center',
            textAlign: 'center',
            flex: 1,
          }}
        >
          <Box>
            <Stack direction="column">
              <Typography variant="h6">
                {callout.title}
              </Typography>
              <Image
                src={callout.image}
                alt={callout.title}
                style={{ height: '50px' }}
              />
             
              <ul style={{alignContent:'start'}}>
                {callout.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Stack>
          </Box>


          <Button
            variant="contained"
            sx={{
              bgcolor: 'secondary.main',
              color: 'common.white',
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
              fontSize: 16,
            }}
          >
            {callout.buttonText}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
