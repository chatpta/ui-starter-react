import React from "react";
import LoginPage from "../pages/authPages/LoginPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";


export default function UserLoginView() {
    return (
        <div>
            <AppBarChatpta/>
            <LoginPage/>
        </div>
    );
}
