import { Home } from "./views/Home";
import { createBrowserRouter } from 'react-router-dom';
import React from "react";
import { Authenticate } from "./views/Authenticate";

export const paths: any = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Auth',
    element: <Authenticate />
  }
];

export const router = createBrowserRouter(paths);
