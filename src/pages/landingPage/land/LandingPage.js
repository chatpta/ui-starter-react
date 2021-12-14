import React from 'react';
import { useEffect } from "react";

import useLandStyle from "./landStyle";
import StoreConnectUserReadOnly from "../../../store/storeConnectUserReadOnly";


function LandingElement() {
    // const { user } = props;

    const classes = useLandStyle();

    useEffect( () => {
        }, []
    );

    return (
        <div className={ classes.container }>
            <h1>CHATPTA</h1>
            <h2>Canada's own Asian store</h2>
            <h3>Coming soon</h3>
        </div>
    );
}

export default StoreConnectUserReadOnly( LandingElement );
