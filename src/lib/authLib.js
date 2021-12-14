import { pathAndURL } from "../config";
import LoginErrorAlert from "../pages/authPages/alert/LoginErrorAlert";

function handlers( user, userMutate, userFetch ) {

    const logInUser = ( user, userReset ) => {

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

    const saveUserInLocalStore = ( user, rememberMe ) => {
        if ( rememberMe ) {
            localStorage.setItem( "user", JSON.stringify( { ...user, loggedIn: true, } ) );
            return true;
        } else {
            return false;
        }
    }

    const deleteUserFromLocalStore = () => {
        localStorage.removeItem( "user" );
    }

    const logoutUser = ( user, userReset ) => {

        if ( user?.loggedIn ) {
            userReset( {} );
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

    const showLoginErrorAlert = user => {
        if ( user?.error === "wrong credentials" ) {
            return ( <LoginErrorAlert/> )
        }
    };

    const firstNameChange = ( event ) => {

        userMutate( { first_name: event.target.value } );

    }

    const emailChange = ( event ) => {

        userMutate( { email: event.target.value, error: null } );

    }

    const passwordChange = ( event ) => {

        userMutate( { password: event.target.value, error: null } );

    }

    const clickCreateUser = e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.first_name && user?.email && user?.password ) {

            userFetch( postReqCreateUser( JSON.stringify( { user } ) ) );

        }

    }


    const clickLoginUser = userMutate => e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.email && user?.password ) {

            userFetch( postReqLoginUser( JSON.stringify( { user } ) ) );
            userMutate( { password: "" } );

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
        logInUser,
        saveUserInLocalStore,
        deleteUserFromLocalStore,
        logoutUser,
        isUserLoggedIn,
        getUserName,
        getJwt,
        showLoginErrorAlert,
    };
}

export { handlers };


