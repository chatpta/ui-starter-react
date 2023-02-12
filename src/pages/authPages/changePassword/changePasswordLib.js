import { pathAndURL } from "../../../config";
import { isPasswordString } from "@chatpta/validate/lib/validate";

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

    const passwordConfirmChange = ( event ) => {

        userMutate( { password_confirm: event.target.value } );

    }

    const clickChangePassword = e => {

        e.stopPropagation();
        e.preventDefault();

        if ( user?.password && user?.password_confirm && ( user?.password === user?.password_confirm ) ) {

            userFetch( postReq( JSON.stringify( { user } ) ) );

        }

    }

    function postReq( body ) {

        return new Request( pathAndURL.authUsersChangePasswordURL(),
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

    const handlePasswordBlur = ( error, setError ) => ( event ) => {

        if ( isPasswordString( event?.target?.value ) ) {

            setError( { ...error, password: false } );

        } else {

            setError( { ...error, password: true } );

        }
    }

    return {
        firstNameChange,
        emailChange,
        passwordChange,
        passwordConfirmChange,
        clickChangePassword,
        handlePasswordBlur
    };
}

export { handlers };


