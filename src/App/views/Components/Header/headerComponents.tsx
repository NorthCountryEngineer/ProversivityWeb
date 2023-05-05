import Image from "mui-image";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from "react";
import { MenuItem } from '@mui/material';
import { useDrawerFab } from "./headerHooks";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { ListItemIcon, ListItemText, Menu } from '@mui/material';
import { ManageAccounts, ChevronRight, NoteAdd, EmojiNature, Brightness4 } from '@mui/icons-material';

import type { MenuItemProps, ProversivityAppBarProps } from './headerTypes'

export const menuItems:MenuItemProps[] = [
    {
        href: '/Resumes',
        label: 'Resume Tool',
        icon: <NoteAdd/>,
    },
    {
        href: '/FarmCam',
        label: 'FarmWatch Tool (invite only)',
        icon: <EmojiNature/>,
    },
    {
        href: '',
        label: 'Dark Mode',
        icon: <Brightness4/>,
    },
];

/**
 * A functional component that renders a sidebar using Material-UI's Drawer component.
 * @param {Object} props - The input props for the component.
 * @param {number} props.drawerWidth - The width of the sidebar drawer.
 * @param {boolean} props.drawerOpen - Whether or not the sidebar drawer is open.
 * @param {function} props.toggleDrawer - A function to toggle the state of the sidebar drawer.
 * @param {string} props.font - The font to be used for the sidebar.
 * @param {Array} props.menuItems - An array of objects representing the menu items in the sidebar.
 * @returns {JSX.Element} The rendered sidebar component.
 */
export const Sidebar = ({ drawerWidth, drawerOpen, toggleDrawer, font, menuItems }) => {
    
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <Box sx={{ width: drawerWidth }}>
          <Menu
            open={drawerOpen}
            onClose={()=>handleClose()}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
              {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                  </MenuItem>
              ))}
    
              <MenuItem onClick={()=>toggleDrawer()}>
                  <ChevronRight />
                  <ListItemText primary="Close" />
              </MenuItem>
          </Menu>
        </Box>
      </>
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
        <Fab
            variant="extended"
            color="primary"
            size="small"
            sx={{
                top: 10,
                right: 10,
                marginLeft: 0,
                position: "absolute",
                display: drawerFabHidden ? "none" : "block",
                zIndex: (theme) => theme.zIndex.drawer + 11,
            }}

            onClick={handleDrawerOpen}
            aria-label="add"
         >
            <ManageAccounts sx={{ mr: 1 }} />
        </Fab>
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
            display: "contents",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <Image
                src="/Images/Logo_NCE_Light.png"
                fit="inherit"
                showLoading={true}
                errorIcon={true}
                duration={5000}
                bgColor="transparent"
                style={{ width: 105, height: 105, paddingTop: "2px"}}
            />

        </Box>
  
        <Typography variant="h5" fontFamily={font}>
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
export const ProversivityAppBar = ({ 
  dynamicTitle, 
  font, 
  drawerWidth,
  menuItems
}: ProversivityAppBarProps) => {

  const { 
    drawerOpen, 
    drawerFabHidden, 
    toggleDrawer,
    isMobile,
    justifyContent,
  } = useDrawerFab();

  
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          top: 0,
          height: "125px",
          zIndex: (theme) => theme.zIndex.drawer + 10
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container sx={{ alignItems: "center", justifyContent }}>
            <Grid item xs={3.5}>
              <NorthCountryEngineerLogoAndTitle dynamicTitle={dynamicTitle} font={font} />
            </Grid>
            <Grid item xs={6.5} />
            <Grid item xs={2}>
              <UserManagementFab 
                  drawerFabHidden = {drawerFabHidden}
                  handleDrawerOpen = {() => toggleDrawer()}
              />
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
  


