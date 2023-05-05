import { useDrawerFab, useTitleUpdate } from './headerHooks';
import { Sidebar, UserManagementFab, ProversivityAppBar, menuItems } from './headerComponents';
import { loadFont as SourceCodePro } from "@remotion/google-fonts/Farro";
import { Box } from '@mui/material';

// Import the Source Code Pro font family
const SourceCodeProFont = SourceCodePro().fontFamily;

const drawerWidth = 400;

// Define the Header component
export function Header() {
  // Get the dynamic title using the useTitleUpdate hook
  const dynamicTitle = useTitleUpdate("Engineering the North Country");

  // Render the ProversivityAppBar component with the dynamic title, font, drawer width, and menu items
  return (
    <ProversivityAppBar 
      dynamicTitle={dynamicTitle} 
      font={SourceCodeProFont} 
      drawerWidth={drawerWidth}
      menuItems={menuItems}
    />
  );
}
