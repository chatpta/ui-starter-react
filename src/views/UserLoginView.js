import React from "react";
import LoginPage from "../pages/authPages/login/LoginPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";


export default function UserLoginView() {
    return (
        <div>
            <AppBarChatpta/>
            <LoginPage/>
        </div>
    );
}
