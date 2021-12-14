import React from 'react';
import { useEffect } from "react";

import useLandStyle from "./landStyle";
import StoreConnectUserReadOnly from "../../../store/storeConnectUserReadOnly";


function LandElement( ) {
    // const { user } = props;

    const classes = useLandStyle();

    useEffect( () => {
        }, [  ]
    );

    return (
        <div className={ classes.container }>
            <h1>This is landing page</h1>
        </div>
    );
}

export default StoreConnectUserReadOnly( LandElement );
