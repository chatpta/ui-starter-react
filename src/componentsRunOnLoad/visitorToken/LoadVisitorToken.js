import React from "react";

import StoreConnectVisitorEdit from "../../store/storeConnectVisitorEdit";
import { fetchNewVisitor, saveVisitorInLocalStore } from "./visitorFunctions";


function LoadVisitorToken( props ) {
    const { visitor, visitorFetch, visitorMutate } = props;


    React.useEffect( () => {
        if ( !visitor?.data?.visitor_id && !visitor?.visitorTokenRequested ) {
            visitorFetch( fetchNewVisitor() );
            visitorMutate( { visitorTokenRequested: true } );
        }

    }, [ visitorFetch, visitor, visitorMutate ] );

    React.useEffect( () => {
        saveVisitorInLocalStore( visitor );
    }, [ visitor ] );

    return null;
}

export default StoreConnectVisitorEdit( LoadVisitorToken )
