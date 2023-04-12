import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// project import
import Loadable from "components/Loadable";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

// render - landing page
const PagesLanding = Loadable( lazy( () => import("pages/landing/LandingPage") ) );

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes( [
    {
      path: "/",
      element: <PagesLanding />
    },
    PublicRoutes,
    ProtectedRoutes,
    AuthRoutes
  ] );
}
