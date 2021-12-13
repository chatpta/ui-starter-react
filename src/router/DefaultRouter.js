import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { urls } from "../config";

// Lazy load pages
const HomePageView = React.lazy( () => import('../views/HomePageView') );
const UsersPageView = React.lazy( () => import('../views/UsersPageView') );
const LoginView = React.lazy( () => import('../views/LoginView') )
const CreateAccountView = React.lazy( () => import('../views/CreateAccountView') )
const ItemsPageView = React.lazy( () => import('../views/ItemsPageView') );
const NotFoundPageView = React.lazy( () => import('../views/NotFoundPageView') );
const RecoverPageView = React.lazy( ( () => import('../views/RecoverPageView') ) );


function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path={ urls.getRootPath() } element={ <HomePageView/> }/>
                    <Route path={ urls.usersLoginPath() } element={ <LoginView/> }/>
                    <Route path={ urls.usersRegisterPath() } element={ <CreateAccountView/> }/>
                    <Route path={ urls.passwordRecoverPath() } element={ <RecoverPageView/> }/>
                    <Route path="users" element={ <UsersPageView/> }/>
                    <Route path="items" element={ <ItemsPageView/> }/>
                    <Route path="*" element={ <NotFoundPageView/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
