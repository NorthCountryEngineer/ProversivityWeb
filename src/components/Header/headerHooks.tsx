import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const useCurrentView = () => {
  const [currentView, setCurrentView] = useState<String>(
    String(String(window.location).split("/").pop())
  );

  useEffect(() => {
    setCurrentView(String(String(window.location).split("/").pop()));
  }, []);

  return currentView;
};

export const useUserEmail = () => {
  const [userEmail, setUserEmail] = useState<String>();

  const GetUserEmail = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserEmail(user.attributes.email);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    GetUserEmail();
  }, []);

  return userEmail;
};

export const useDynamicTitle = () => {
  const [dynamicTitle, setDynamicTitle] = useState<any>(
    "Engineering The North Country"
  );

  useEffect(() => {
    Hub.listen("TitleUpdate", (data) => {
      setDynamicTitle(data.payload.message);
    });
  }, []);

  return dynamicTitle;
};

export function useDrawerFab() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerFabHidden, setDrawerFabHidden] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
      setDrawerFabHidden(!drawerOpen);
    };
  
    return {
        drawerOpen,
        drawerFabHidden,
        toggleDrawer,
        setDrawerFabHidden,
    };
  }

  export function useTitleUpdate(initialTitle: string) {
    const [dynamicTitle, setDynamicTitle] = useState(initialTitle);
  
    useEffect(() => {
      Hub.listen('TitleUpdate', data => {
        setDynamicTitle(data.payload.message ?? initialTitle);
      });
  
      return () => {
        Hub.remove('TitleUpdate', () => {});
      };
    }, [initialTitle]);
  
    return dynamicTitle;
  }
  