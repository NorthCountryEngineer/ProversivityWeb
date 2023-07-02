import { useState } from "react"
import { useMediaQuery, useTheme } from "@mui/material"

/**
 * A hook that manages the state and behavior of the Drawer Fab button.
 * @returns {Object} - An object containing the following properties and methods:
 *   - drawerOpen: A boolean indicating whether the Drawer is currently open.
 *   - drawerFabHidden: A boolean indicating whether the Drawer Fab button is hidden.
 *   - toggleDrawer: A function that toggles the Drawer state and the Drawer Fab button visibility.
 *   - setDrawerFabHidden: A function that sets the Drawer Fab button visibility.
 *   - isMobile: A boolean indicating whether the current screen size is considered "mobile".
 *   - justifyContent: A string representing the justifyContent CSS property, based on the screen size.
 */
export function ProversivityAppBarHooks() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerFabHidden, setDrawerFabHidden] = useState(false)

  // Determine whether the current screen size is considered "mobile".
  const breakpoint = useTheme().breakpoints.values.sm
  const isMobile = useMediaQuery(`(max-width:${breakpoint}px)`)

  // Set the justifyContent CSS property based on the screen size.
  const justifyContent = isMobile ? "center" : "flex-start"

  // Toggle the Drawer state and the Drawer Fab button visibility.
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    setDrawerFabHidden(!drawerOpen)
  }

  return {
      drawerOpen,
      drawerFabHidden,
      toggleDrawer,
      setDrawerFabHidden,
      isMobile,
      justifyContent
  }
}


  