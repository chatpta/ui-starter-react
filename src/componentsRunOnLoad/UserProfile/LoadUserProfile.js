import React from "react";

import { useSelector } from "react-redux";
import { fetchUserProfileByUserToken } from "./loadUserProfileFunction";
import StoreConnectUserProfileEdit from "../../store/storeConnectUserProfileEdit";


function LoadUserProfile( props ) {

    const { user_profile, user_profileFetch } = props;
    const user = useSelector( state => state?.user );
    const [ fetchUserProfileRequestSent, setFetchUserProfileRequestSent ] = React.useState( false );

    // Fetch user profile
    React.useEffect( () => {
        if ( !user_profile?.data?.profile_id && !fetchUserProfileRequestSent && user?.jwt ) {
            setFetchUserProfileRequestSent( true );
            user_profileFetch( fetchUserProfileByUserToken( user?.jwt ) );
        }
    }, [ fetchUserProfileRequestSent, user_profileFetch, user_profile, user ] );

    return null;
}

export default StoreConnectUserProfileEdit( LoadUserProfile );
