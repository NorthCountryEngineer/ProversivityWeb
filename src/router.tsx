import {createBrowserRouter} from "react-router-dom";
import { Home } from "./views/Home/Home";
import Resume from './views/Resume'
import ListResumes from './views/ListResumes';
import Admin from "./views/Admin";
import LoginSignup from "./views/LoginSignup";

export const paths: any = [
    {
      path: "/",
      element: <Home />,
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
    {
      path: "/Admin",
      element: <Admin />
    },
    {
      path: "/Login",
      element: <LoginSignup />
    }
  ]

export const router = createBrowserRouter(paths);