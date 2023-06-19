import { CustomerSignup } from "./views/CustomerSignup";
import { ServiceProviderSignup } from "./views/ServiceProviderSignup";
import { Home } from "./views/Home";
import { Blog } from "./views/Blog";
import { Auth } from "./functions/Auth";
import { About } from "./views/About";
import { createBrowserRouter } from 'react-router-dom';
import { Admin } from "./views/Admin";

export const paths: any = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Admin',
    element: <Admin />,
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
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/ServiceProviderSignup",
    element: <ServiceProviderSignup />
  },
  {
    path: "/CustomerSignup",
    element: <CustomerSignup />
  }
];

export const router = createBrowserRouter(paths);
