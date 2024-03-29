import React from 'react'
import { ProversivityAppBar, menuItems } from './components'
import { loadFont as SourceCodePro } from "@remotion/google-fonts/Farro"

// Import the Source Code Pro font family
const SourceCodeProFont = SourceCodePro().fontFamily

const drawerWidth = 400

// Define the Header component
export const Header = () => {

  // Render the ProversivityAppBar component with the dynamic title, font, drawer width, and menu items
  return (
    <ProversivityAppBar 
      dynamicTitle="The North Country Engineer"
      font={SourceCodeProFont} 
      drawerWidth={drawerWidth}
      menuItems={menuItems}
    />
  )
}