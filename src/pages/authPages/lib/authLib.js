import { pathAndURL } from "../../../config";

function handlers( user, userMutate, userFetch ) {

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

            userFetch( postReq( JSON.stringify( { user } ) ) );

        }

    }

    function postReq( body ) {

        return new Request( pathAndURL.usersRegisterURL(),
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
        clickCreateUser
    };
}

export { handlers };


