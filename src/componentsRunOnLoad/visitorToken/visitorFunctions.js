import { postReq } from "../../pages/lib/httpRequest";
import { pathAndURL } from "../../config";

export function saveVisitorInLocalStore( visitor ) {
    if ( visitor?.data?.visitor_id && visitor?.data?.visitor_token ) {
        localStorage.setItem( "visitor", JSON.stringify( visitor ) );
    }
}

export function fetchNewVisitor() {

    return postReq( {}, pathAndURL.authVisitorURL() );

}
