import React from 'react';
import config from '../config';
import LegalPage from "../pages/legalPage/LegalPage";

export default function TermsOfUseView() {

    return (
        <LegalPage textData={ config.legalPage.termsOfUse }/>
    );

};
