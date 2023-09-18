import { Join } from "./views/Join"
import OneOnOneHelper from "./views/OneOnOneHelper/OneOnOneHelper";
import { Home } from "./views/Home";
import { Home as Resume_Home } from "./views/ResumeHome";
import { createBrowserRouter } from 'react-router-dom';
import React from "react";
import Authenticate from "./views/Authenticate/Authenticate";

export const paths: any = [
  {
    path: '/Resume',
    element: <Resume_Home />,
  },
  {
    path: '/Auth',
    element: <Authenticate />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/OneOnOneHelper",
    element: <OneOnOneHelper />
  },

  {
    path: "/join",
    element: <Join />
  },
];

export const router = createBrowserRouter(paths);
