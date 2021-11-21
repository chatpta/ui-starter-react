import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "../views/HomePage";
import UsersPage from "../views/UsersPage";
import ItemsPage from "../views/ItemsPage";


function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route exact path="/" element={ <HomePage/> }/>
                    <Route path="items" element={ <ItemsPage/> }/>
                    <Route path="users" element={ <UsersPage/> }/>
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
