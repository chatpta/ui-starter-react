import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { urls } from "../config";

// Lazy load pages
const HomePageView = React.lazy( () => import('../views/HomePageView') );
const UserLoginView = React.lazy( () => import('../views/UserLoginView') )
const UserCreateAccountView = React.lazy( () => import('../views/UserCreateAccountView') )
const UserRecoverPasswordView = React.lazy( ( () => import('../views/UserRecoverPasswordView') ) );
const UserChangePasswordView = React.lazy( () => import("../views/UserChangePasswordView") );
const UsersPageView = React.lazy( () => import('../views/UsersPageView') );
const ItemsPageView = React.lazy( () => import('../views/ItemsPageView') );
const NotFoundPageView = React.lazy( () => import('../views/NotFoundPageView') );

function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path={ urls.getRootPath() } element={ <HomePageView/> }/>
                    <Route path={ urls.usersLoginPath() } element={ <UserLoginView/> }/>
                    <Route path={ urls.usersRegisterPath() } element={ <UserCreateAccountView/> }/>
                    <Route path={ urls.usersPasswordRecoverPath() } element={ <UserRecoverPasswordView/> }/>
                    <Route path={ urls.usersChangePasswordPath() } element={ <UserChangePasswordView/> }/>
                    <Route path="users" element={ <UsersPageView/> }/>
                    <Route path="items" element={ <ItemsPageView/> }/>
                    <Route path="*" element={ <NotFoundPageView/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
