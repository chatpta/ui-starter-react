import React from 'react';
import config from '../config';
import LegalPage from "../pages/legalPage/LegalPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";

export default function TermsOfUseView() {

    return (
        <div>
            <AppBarChatpta/>
            <LegalPage textData={ config.legalPage.termsOfUse }/>
        </div>
    );

};
