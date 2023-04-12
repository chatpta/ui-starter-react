import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import CommonLayout from 'layout/CommonLayout';
import GuestUsersAllowed from 'utils/route-guard/GuestUsersAllowed';
import AuthenticatedUserAllowed from "utils/route-guard/AuthenticatedUserAllowed";

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/forgot-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/check-mail')));
const AuthChangePassword = Loadable(lazy(() => import('pages/auth/change-password')));
const AuthChangePasswordSuccess = Loadable(lazy(() => import('pages/auth/change-password-success')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/code-verification')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestUsersAllowed>
          <CommonLayout />
        </GuestUsersAllowed>
      ),
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    },
    {
      path: '/auth',
      element: (
        <AuthenticatedUserAllowed>
          <CommonLayout />
        </AuthenticatedUserAllowed>
      ),
      children: [
        {
          path: 'change-password',
          element: <AuthChangePassword />
        },
        {
          path: 'change-password-success',
          element: <AuthChangePasswordSuccess />
        }
      ]
    }
  ]
};

export default AuthRoutes;
