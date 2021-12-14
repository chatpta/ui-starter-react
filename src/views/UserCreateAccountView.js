import React from "react";
import CreateAccountPage from "../pages/authPages/register/CreateAccountPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";


export default function UserCreateAccountView() {
    return (
        <div>
            <AppBarChatpta/>
            <CreateAccountPage/>
        </div>
    );
}
