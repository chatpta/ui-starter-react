function handlers( user, userMutate, userFetch, userReset ) {

    const firstNameChange = ( event ) => {

        userMutate( { firstName: event.target.value } );

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

        if ( user?.firstName && user?.email && user?.password ) {
            userFetch( postReq( JSON.stringify( { user } ) ) );
            userReset( {} );
        }

    }

    function postReq( body ) {

        return new Request( "http://localhost:3001/users/register",
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


