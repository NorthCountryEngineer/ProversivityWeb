import { Avatar, Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { HomepageCalloutsProps } from "./model"
import Image from "mui-image"

export const CalloutBoxes = ({ isMobile, callouts }: HomepageCalloutsProps) => {
  return (
    <Box
      sx={{
        minHeight: "10vh", // Adjust the height as needed
        display: "flex",
        justifyContent: "center", // Adjust the vertical alignment as needed
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row", // Adjust the direction based on device
        gap: 2, // Add gap between callout boxes if desired
        p: 2, // Adjust padding as needed
      }}
    >
      {callouts.map((callout, index) => (
        <Box
          key={index}
          sx={{
            width: '550px',
            height: '100%',
            p: 5,
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
                {callout.image &&
                  <Image
                    src={callout.image}
                    alt={callout.title}
                    style={{ objectFit:'contain', height:'400px' }}
                  />
                }
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
  )
}
