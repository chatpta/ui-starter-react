import { postReq } from "../../pages/lib/httpRequest";
import { pathAndURL } from "../../config";

export function fetchUserProfileByUserToken( userJwt ) {

    return postReq( {}, pathAndURL.profileURL(), userJwt );

}
