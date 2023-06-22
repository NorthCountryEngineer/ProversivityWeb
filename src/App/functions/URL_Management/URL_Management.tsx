import { useEffect, useState } from "react"

/**
 * A custom hook that returns the current view based on the current URL.
 * @returns {string} - The current view.
 */
export const useCurrentView = () => {
    // Get the current view from the URL
    const [currentView, setCurrentView] = useState<String>(
      String(String(window.location).split("/").pop())
    )
  
    // Update the current view when the component mounts
    useEffect(() => {
      setCurrentView(String(String(window.location).split("/").pop()))
    }, [])
  
    // Return the current view
    return currentView
  }
  
  