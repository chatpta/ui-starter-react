import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


const HomePage = React.lazy( () => import('../views/HomePage') );
const UsersPage = React.lazy( () => import('../views/UsersPage') );
const ItemsPage = React.lazy( () => import('../views/ItemsPage') );


function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> }/>
                    <Route path="users" element={ <UsersPage/> }/>
                    <Route path="items" element={ <ItemsPage/> }/>
                    <Route
                        path="*"
                        element={
                            <main style={ { padding: "1rem" } }>
                                <p>Not found 404</p>
                            </main>
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
