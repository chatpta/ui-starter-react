import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { pathAndURL } from "../config";
import Loading from "../sections/loading/Loading";

// Lazy load pages
const HomePageView = React.lazy( () => import('../views/HomePageView') );
const UserLoginView = React.lazy( () => import('../views/UserLoginView') )
const UserCreateAccountView = React.lazy( () => import('../views/UserCreateAccountView') )
const UserRecoverPasswordView = React.lazy( ( () => import('../views/UserRecoverPasswordView') ) );
const UserChangePasswordView = React.lazy( () => import("../views/UserChangePasswordView") );
const TermsOfUseView = React.lazy( () => import("../views/TermsOfUseView") );
const NotFoundPageView = React.lazy( () => import('../views/NotFoundPageView') );

function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <Loading/> }>
                <Routes>
                    <Route exact path={ pathAndURL.rootPath() } element={ <HomePageView/> }/>
                    <Route path={ pathAndURL.authUsersLoginPath() } element={ <UserLoginView/> }/>
                    <Route path={ pathAndURL.authUsersRegisterPath() } element={ <UserCreateAccountView/> }/>
                    <Route path={ pathAndURL.authUsersPasswordRecoverPath() } element={ <UserRecoverPasswordView/> }/>
                    <Route path={ pathAndURL.authUsersChangePasswordPath() } element={ <UserChangePasswordView/> }/>
                    <Route path={ pathAndURL.legalTermsOfUsePath() } element={ <TermsOfUseView/> }/>
                    <Route path="*" element={ <NotFoundPageView/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
