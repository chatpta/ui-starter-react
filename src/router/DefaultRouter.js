import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import LoginPage from "../pages/authPages/login/LoginPage";

// Lazy load pages
const HomePage = React.lazy( () => import('../views/HomePage') );
const UsersPage = React.lazy( () => import('../views/UsersPage') );
const ItemsPage = React.lazy( () => import('../views/ItemsPage') );
const NotFoundPage = React.lazy( () => import('../views/NotFoundPage') );

function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> }/>
                    <Route path="users" element={ <UsersPage/> }/>
                    <Route path="login" element={ <LoginPage/> }/>
                    <Route path="items" element={ <ItemsPage/> }/>
                    <Route path="*" element={ <NotFoundPage/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
