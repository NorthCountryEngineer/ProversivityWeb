import { Box, Button, Stack, Typography } from "@mui/material"
import { HomepageCalloutsProps } from "./HomeTypes";

export const CalloutBoxes = ({ isMobile, callouts }: HomepageCalloutsProps) => {
  return (
    <Box
        sx={{
          minHeight: "110vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Home_Wallpaper.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          py: { xs: 4, sm: 10 },
          px: { xs: 2, sm: 4 },
          bgcolor: 'background.dark',
          position: 'relative',
        }}
      >
        <Stack direction="column">
          {callouts.map((callout, index) => (
            <Box
              key={index}
              sx={{
                width: '350px',
                p: 2,
                mb: 4,
                bgcolor: 'primary.light',
                color: 'common.',
                borderRadius: 2,
                boxShadow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {callout.title}
                </Typography>
                <ul>
                  {callout.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
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
        </Stack>
      </Box>
    </Box>
  );
};

export const FounderName = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: '40px',
        left: '10px',
      }}
    >
      <Typography
        variant="h6"
        component="h1"
        sx={{
          mt: '20px',
          color: 'common.white',
        }}
      >
        <b>Eric Yager, Co-Founder</b>
      </Typography>
    </Box>
  )
}
