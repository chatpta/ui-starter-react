import { lazy } from "react";

// project import
import CommonLayout from "layout/CommonLayout";
import Loadable from "components/Loadable";

// render - login
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// ==============================|| AUTH ROUTING ||============================== //

const FallbackRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <CommonLayout />
      ),
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};

export default FallbackRoutes;
