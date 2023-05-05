import {createBrowserRouter} from "react-router-dom";
import { Home } from "./views/Home";
import Resume from './views/Tools/ResumeTool/Resume'
import ListResumes from './views/Tools/ResumeTool/ListResumes';
import { Authentication } from "./views/Authentication/Authentication";
import { About } from "./views/About/About";
import { Admin } from "./views/Admin/Admin";

export const paths: any = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Admin",
      element: <Admin />
    },
    {
      path: "/Login",
      element: <Authentication />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Resume",
      element: <Resume />,
    },
    {
      path: "/Resume/:resumeID",
      element: <Resume/>,
    },
    {
      path: "/Resumes",
      element: <ListResumes />,
    },
  ]

export const router = createBrowserRouter(paths);