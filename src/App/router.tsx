import { Blog } from "./views/Blog";
import { Auth } from "./views/Auth";
import { About } from "./views/About";
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './views/Home';
import { About as ServiceProviderAbout } from './views/ServiceProvider/About';
import { Admin } from "./views/Admin";

export const paths: any = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ServiceProvider',
    element: <ServiceProviderAbout />,
  },
  {
    path: '/Admin',
    element: <Admin />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Blog',
    element: <Blog />,
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Auth",
    element: <Auth />
  },
  {
    path: "/Blog",
    element: <Blog />
  },];

export const router = createBrowserRouter(paths);
