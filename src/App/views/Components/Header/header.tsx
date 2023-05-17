import { ProversivityAppBar, menuItems } from './headerComponents'
import { loadFont as SourceCodePro } from "@remotion/google-fonts/Farro"

// Import the Source Code Pro font family
const SourceCodeProFont = SourceCodePro().fontFamily

const drawerWidth = 400

// Define the Header component
export function Header({title}) {

  // Render the ProversivityAppBar component with the dynamic title, font, drawer width, and menu items
  return (
    <ProversivityAppBar 
      dynamicTitle={title} 
      font={SourceCodeProFont} 
      drawerWidth={drawerWidth}
      menuItems={menuItems}
    />
  )
}
