import { lazy } from "react";

// project import
import CommonLayout from "layout/CommonLayout";
import Loadable from "components/Loadable";
import AuthenticatedUserAllowed from "utils/route-guard/AuthenticatedUserAllowed";

// render - login
const ProtectedPageOne = Loadable( lazy( () => import("pages/protected/protected-page-one") ) );
const ProtectedPageTwo = Loadable( lazy( () => import("pages/protected/protected-page-two") ) );

// ==============================|| AUTH ROUTING ||============================== //

const ProtectedRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthenticatedUserAllowed>
          <CommonLayout />
        </AuthenticatedUserAllowed>
      ),
      children: [
        {
          path: "protected-page-one",
          element: <ProtectedPageOne />
        },
        {
          path: "protected-page-two",
          element: <ProtectedPageTwo />
        },
      ]
    }
  ]
};

export default ProtectedRoutes;
