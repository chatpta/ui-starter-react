import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "../views/HomePage";
import Users from "../views/Users";
import Items from "../views/Items";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="users" element={ <Items/> }/>
                <Route path="items" element={ <Users/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
