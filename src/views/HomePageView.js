import React from "react";
import LandingPage from "../pages/landingPage/land/LandingPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";
import Footer from "../sections/footer/FooterComponent";

export default function HomePageView() {
    return (
        <div>
            <AppBarChatpta/>
            <LandingPage/>
            <Footer/>
        </div>
    );
}
