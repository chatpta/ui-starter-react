import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import RecoverPage from "../pages/authPages/recover/RecoverPage";

// Lazy load pages
const HomePageView = React.lazy( () => import('../views/HomePageView') );
const UsersPageView = React.lazy( () => import('../views/UsersPageView') );
const LoginView = React.lazy( () => import('../views/LoginView') )
const CreateAccountView = React.lazy( () => import('../views/CreateAccountView') )
const ItemsPageView = React.lazy( () => import('../views/ItemsPageView') );
const NotFoundPageView = React.lazy( () => import('../views/NotFoundPageView') );


function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path="/" element={ <HomePageView/> }/>
                    <Route path="users" element={ <UsersPageView/> }/>
                    <Route path="login" element={ <LoginView/> }/>
                    <Route path="users/register" element={ <CreateAccountView/> }/>
                    <Route path="recover" element={ <RecoverPage/> }/>
                    <Route path="items" element={ <ItemsPageView/> }/>
                    <Route path="*" element={ <NotFoundPageView/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
