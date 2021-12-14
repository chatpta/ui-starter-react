import { pathAndURL } from "../../../config";
import LoginErrorAlert from "../alert/LoginErrorAlert";
import RecoverPasswordSendSuccessAlert from "../alert/RecoverPasswordSendSuccessAlert";
import RecordExistErrorAlert from "../alert/RecordExistErrorAlert";

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
        if ( user?.error === "validation_failure" || user?.error === "record_not_found" ) {
            return ( <LoginErrorAlert/> )
        }
    };

    const showRecoverPasswordAlert = user => {
        if ( user?.message === "please check your email" ) {
            return ( <RecoverPasswordSendSuccessAlert/> )
        }
    };

    const showRecordExistError = user => {
        if ( user?.error === "record_exist" || user?.error === "wrong_credentials" ) {
            return ( <RecordExistErrorAlert/> )
        }
    };

    const firstNameChange = ( event ) => {

        userMutate( { first_name: event.target.value } );

    }

    const emailChange = ( event ) => {

        userMutate( { email: event.target.value, error: null, message: "" } );

    }

    const passwordChange = ( event ) => {

        userMutate( { password: event.target.value, error: null } );

    }

    const clickCreateUser = ( userReset, agree ) => e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.first_name && user?.email && user?.password && agree ) {
            let userReceived = JSON.stringify( {
                user: {
                    first_name: user?.first_name,
                    email: user?.email,
                    password: user?.password
                }
            } );
            userReset( {} );
            userFetch( postReqCreateUser( userReceived ) );
        }

    }


    const clickLoginUser = userMutate => e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.email && user?.password ) {

            let userReceived = JSON.stringify( {
                user: {
                    email: user?.email,
                    password: user?.password
                }
            } );
            userMutate( { password: "" } );
            userFetch( postReqLoginUser( userReceived ) );

        }

    }

    const clickRecoverPassword = userMutate => e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.email ) {
            let userReceived = JSON.stringify( {
                user: {
                    email: user?.email
                }
            } );
            userMutate( { email: "" } );
            userFetch( postReqRecoverPassword( userReceived ) );

        }

    }

    function postReqRecoverPassword( body ) {
        return postReq( body, pathAndURL.usersPasswordRecoverURL() )
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
        showRecoverPasswordAlert,
        showRecordExistError,
        clickRecoverPassword,
    };
}

export { handlers };


