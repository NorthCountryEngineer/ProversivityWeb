import { Avatar, Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
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
            height: '600px',
            p: 5,
            m: 3,
            bgcolor: 'primary.main',
            boxShadow: 1,
            alignItems: 'center',
            textAlign: 'center',
            flex: 1,
          }}
        >
            <Stack direction="column">

              <Typography variant="h4">
                {callout.title}
              </Typography>

              <Divider sx={{m:2}} />

              <Stack direction="row">
                  <Image
                    src={callout.image}
                    alt={callout.title}
                    style={{ objectFit:'contain', height:'400px' }}
                  />
                <List>
                  {callout.steps.map((point, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{point.icon}</ListItemIcon>
                      <ListItemText primary={point.text} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>

          <Divider sx={{m:2}} />

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
