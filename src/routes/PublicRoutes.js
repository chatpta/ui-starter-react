import { lazy } from "react";

// project import
import CommonLayout from "layout/CommonLayout";
import Loadable from "components/Loadable";

// render - login
const PublicPageOne = Loadable( lazy( () => import("pages/public/public-page-one") ) );
const PublicPageTwo = Loadable( lazy( () => import("pages/public/public-page-two") ) );

// ==============================|| AUTH ROUTING ||============================== //

const PublicRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <CommonLayout />
      ),
      children: [
        {
          path: "public-page-one",
          element: <PublicPageOne />
        },
        {
          path: "public-page-two",
          element: <PublicPageTwo />
        },
      ]
    }
  ]
};

export default PublicRoutes;
