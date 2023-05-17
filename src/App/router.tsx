import {createBrowserRouter} from "react-router-dom"
import { Home } from "./views/Home"
import Resume from './views/Tools/ResumeTool/Resume'
import ListResumes from './views/Tools/ResumeTool/ListResumes'
import { Authentication } from "./views/Authentication"
import { About } from "./views/About/About"
import { Admin } from "./views/Admin/Admin"
import { Blog } from "./views/Blog"
import { About as ServiceProviderAbout } from "./views/ServiceProvider/About"

export const paths: any = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ServiceProvider/About",
      element: <ServiceProviderAbout />,
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
    {
      path: "/Blog",
      element: <Blog />
    }
  ]

export const router = createBrowserRouter(paths)