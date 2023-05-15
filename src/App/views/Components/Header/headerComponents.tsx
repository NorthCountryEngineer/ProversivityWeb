import Image from "mui-image";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from "react";
import { Avatar, Button, ClickAwayListener, IconButton, Link, MenuItem } from '@mui/material';
import { ProversivityAppBarHooks } from "./headerHooks";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { ListItemIcon, ListItemText, Menu } from '@mui/material';
import { NoteAdd, ExitToApp, Login, Person } from '@mui/icons-material';
import type { MenuItemProps, HeaderProps } from './headerTypes'
import theme from "../../../theme/BaseTheme"
import { Auth } from "aws-amplify";
import { useAuthentication } from "../../Authentication/AuthenticationHooks";


export const menuItems:MenuItemProps[] = [
    {
        href: '/Resumes',
        label: 'Manage My Account',
        icon: <NoteAdd/>,
    }
];

/**
 * A functional component that renders a sidebar using Material-UI's Drawer component.
 * @param {Object} props - The input props for the component.
 * @param {number} props.drawerWidth - The width of the sidebar drawer.
 * @param {boolean} props.drawerOpen - Whether or not the sidebar drawer is open.
 * @param {function} props.toggleDrawer - A function to toggle the state of the sidebar drawer.
 * @param {string} props.font - The font to be used for the sidebar.
 * @param {Array} props.menuItems - An array of objects representing the menu items in the sidebar.
 * @param {function} props.handleLogout - A function to handle the logout functionality.
 * @returns {JSX.Element} The rendered sidebar component.
 */
export const Sidebar = ({ drawerWidth, drawerOpen, toggleDrawer, font, menuItems}) => {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await Auth.signOut();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box sx={{ width: drawerWidth }}>
        <Menu
          open={drawerOpen}
          onClose={handleClose}
          onBackdropClick={()=>toggleDrawer()}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                </MenuItem>
            ))}
            
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </MenuItem>
        </Menu>
      </Box>
    </ClickAwayListener>
  );
};

/**
 * A functional component that renders a FAB button for user management, with the option to hide it.
 * @param {Object} props - The input props for the component.
 * @param {boolean} props.drawerFabHidden - Whether or not the FAB button is hidden.
 * @param {function} props.handleDrawerOpen - A function to handle the opening of a drawer.
 * @returns {JSX.Element} The rendered FAB button component.
 */
export function UserManagementFab({ drawerFabHidden, handleDrawerOpen }: any) {
  return (
    <Avatar
      sx={{
        position: "absolute",
        bottom: "25px",
        right: "50px",
        zIndex: 1111,
        boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
        display: drawerFabHidden ? "none" : "block",
      }}
      onClick={handleDrawerOpen}
      aria-label="add"
   / >
  );
}
  
   

/**
 * A React component that renders the North Country Engineer logo and dynamic title with the specified font.
 * @param {Object} props - The input props for the component.
 * @param {string} props.dynamicTitle - The dynamic title to be displayed next to the logo.
 * @param {string} props.font - The font to be used for the title.
 * @returns {JSX.Element} - The rendered North Country Engineer logo and dynamic title.
 */
export const NorthCountryEngineerLogoAndTitle = ({ dynamicTitle, font }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Box
        sx={{
          height: 105,
          width: 105,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 2, // Add a fixed distance between the logo and text
        }}
      >
        <Image
          src="/Images/Logo_NCE_Light.png"
          fit="inherit"
          showLoading={true}
          errorIcon={true}
          duration={5000}
          bgColor="transparent"
          style={{ width: 105, height: 105, paddingTop: "2px" }}
        />
      </Box>

      <Typography variant="h5" fontFamily={font} sx={{ whiteSpace: 'pre-line' }}>
        {dynamicTitle}&#8482;
      </Typography>
    </Stack>
  );
};


/**
 * Renders a customized AppBar for the Proversivity website, which includes the NorthCountryEngineerLogoAndTitle component and a Sidebar component.
 * 
 * @param {string} dynamicTitle - The dynamic title to be displayed in the AppBar.
 * @param {string} font - The font to be used for the dynamicTitle.
 * @param {number} drawerWidth - The width of the Sidebar drawer in pixels.
 * @param {boolean} drawerOpen - A boolean indicating whether the Sidebar drawer is open or closed.
 * @param {boolean} drawerFabHidden - A boolean indicating whether the UserManagementFab should be hidden.
 * @param {function} toggleDrawer - A callback function that toggles the Sidebar drawer.
 * @param {object[]} menuItems - An array of objects representing the menu items to be displayed in the Sidebar.
 * 
 * @returns {JSX.Element} - A customized AppBar component.
 */
export const ProversivityAppBar = ({ dynamicTitle, font, drawerWidth, menuItems}: HeaderProps) => {
  const { 
    drawerOpen, 
    drawerFabHidden, 
    toggleDrawer,
    isMobile,
    justifyContent
  } = ProversivityAppBarHooks();

  const isAuthenticated = useAuthentication(); 

  const handleUserButton = () => {
    if(isAuthenticated){
      toggleDrawer()
    }else{
      window.location.href="/Login"
    }
  }

  const dynamicButton = () => {
    try{
      return(
        <Button
          variant="contained"
          color="secondary"
          sx={{
            marginTop: '25px',
            borderRadius: '50%',
            width: '64px',
            height: '64px',
          }}
          onClick={() => handleUserButton()}
        >
          <Stack direction="column" spacing={0} alignItems="center">
            {isAuthenticated ? 
              <Person fontSize="large" style={{ color: 'white' }} /> 
            : 
              <Login fontSize="large" style={{ color: 'white' }} />
            }
          </Stack>
        </Button>
      )} 
    catch(error){
      return(
        <div>Please contact eric@northcountryengineer.com</div>
      )
    }
  }
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          top: 0,
          height: "115px",
          zIndex: 1110,
          backgroundColor: "rgba(255, 255, 255, 0.8)"
        }}
        elevation={0}
      >
        <Toolbar>
          
        <Grid container sx={{ alignItems: justifyContent }}>
          <Grid item xs={3.5} justifyContent="flex-start">
            <NorthCountryEngineerLogoAndTitle dynamicTitle={dynamicTitle} font={font} />
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={.5} sx={{ justifyContent: justifyContent, alignContent:"space-around" }}>
            {dynamicButton()}
          </Grid>
        </Grid>

        </Toolbar>
        <Sidebar
            drawerWidth={drawerWidth}
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer}
            font={font}
            menuItems={menuItems}
        />   
      </AppBar>
    </Box>
  );
};