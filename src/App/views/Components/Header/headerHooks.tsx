import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { useMediaQuery } from "@mui/material";

/**
 * A custom hook that returns the current view based on the current URL.
 * @returns {string} - The current view.
 */
export const useCurrentView = () => {
  // Get the current view from the URL
  const [currentView, setCurrentView] = useState<String>(
    String(String(window.location).split("/").pop())
  );

  // Update the current view when the component mounts
  useEffect(() => {
    setCurrentView(String(String(window.location).split("/").pop()));
  }, []);

  // Return the current view
  return currentView;
};

/**
 * A custom hook that returns the email address of the currently authenticated user.
 * @returns {string | undefined} - The email address of the authenticated user, or undefined if no user is authenticated.
 */
export const useUserEmail = () => {
  const [userEmail, setUserEmail] = useState<String>();

  /**
   * Retrieves the email address of the currently authenticated user using the AWS Amplify Auth library.
   */
  const GetUserEmail = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserEmail(user.attributes.email);
    } catch (err) {
      console.log({ err });
    }
  };

  /**
   * Runs the GetUserEmail function once on component mount.
   */
  useEffect(() => {
    GetUserEmail();
  }, []);

  return userEmail;
};


/**
 * A React hook that subscribes to Hub events and returns the current dynamic title for the Proversivity website.
 * @returns {string} - The current dynamic title.
 */
export const useDynamicTitle = () => {
  const [dynamicTitle, setDynamicTitle] = useState<string>(
    "Engineering The North Country"
  );

  useEffect(() => {
    // Listen to "TitleUpdate" events using the Hub object from the AWS Amplify library
    Hub.listen("TitleUpdate", (data:any) => {
      // When a "TitleUpdate" event is received, update the dynamic title
      setDynamicTitle(data.payload.message);
    });
  }, []);

  return dynamicTitle;
};

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
export function useDrawerFab() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerFabHidden, setDrawerFabHidden] = useState(false);

  // Determine whether the current screen size is considered "mobile".
  const isMobile = useMediaQuery((theme:any) => theme.breakpoints.down("sm"));

  // Set the justifyContent CSS property based on the screen size.
  const justifyContent = isMobile ? "center" : "flex-start";

  // Toggle the Drawer state and the Drawer Fab button visibility.
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setDrawerFabHidden(!drawerOpen);
  };

  return {
      drawerOpen,
      drawerFabHidden,
      toggleDrawer,
      setDrawerFabHidden,
      isMobile,
      justifyContent
  };
}

/**
 * A hook that listens for title updates from AWS Amplify's Hub and returns the dynamic title.
 * @param {string} initialTitle - The initial title to use if there is no message in the payload.
 * @returns {string} - The dynamic title.
 */
export function useTitleUpdate(initialTitle: string) {
  const [dynamicTitle, setDynamicTitle] = useState(initialTitle);

  useEffect(() => {
      // Register a listener for "TitleUpdate" events using AWS Amplify's Hub
      Hub.listen('TitleUpdate', data => {
          // When a "TitleUpdate" event is triggered, update the dynamic title with the message payload or the initial title
          setDynamicTitle(data.payload.message ?? initialTitle);
      });

      // Deregister the listener when the component is unmounted to prevent memory leaks
      return () => {
          Hub.remove('TitleUpdate', () => {});
      };
  }, [initialTitle]);

  return dynamicTitle;
}



  