import { pathAndURL } from "../../../config";

function handlers( user, userMutate, userFetch ) {

    const loggedInUser = ( user, userReset ) => {

        if ( user?.jwt && user?.pending === false ) {

            userReset( {
                loggedIn: true,
                jwt: user?.jwt,
                name: user?.name
            } );
            return true;
        }

        return false;
    };

    const getUserName = ( user ) => {
        return user?.name;
    };

    const getJwt = ( user ) => {
        return user?.jwt;
    };

    const isUserLoggedIn = ( user ) => {
        return user?.loggedIn;
    };

    const firstNameChange = ( event ) => {

        userMutate( { first_name: event.target.value } );

    }

    const emailChange = ( event ) => {

        userMutate( { email: event.target.value } );

    }

    const passwordChange = ( event ) => {

        userMutate( { password: event.target.value } );

    }

    const clickCreateUser = e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.first_name && user?.email && user?.password ) {

            userFetch( postReqCreateUser( JSON.stringify( { user } ) ) );

        }

    }


    const clickLoginUser = e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.email && user?.password ) {

            userFetch( postReqLoginUser( JSON.stringify( { user } ) ) );

        }

    }

    function postReqLoginUser( body ) {
        return postReq( body, pathAndURL.usersLoginURL() )
    }

    function postReqCreateUser( body ) {
        return postReq( body, pathAndURL.usersRegisterURL() )
    }

    function postReq( body, url ) {

        return new Request( url,
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Access-Control-Allow-Origin': window.location.origin
                },
                body: body
            } )
    }

    return {
        firstNameChange,
        emailChange,
        passwordChange,
        clickCreateUser,
        clickLoginUser,
        loggedInUser,
        isUserLoggedIn,
        getUserName,
        getJwt
    };
}

export { handlers };


