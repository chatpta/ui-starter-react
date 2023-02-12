// Email confirmed page. - DONE
// Password updated after password recovery.
// Account created after account creation.
// Login after logged in.
// Logout after logout.

import React, { useEffect } from "react";
import storeConnectUserReadOnly from "../../store/storeConnectUserReadOnly";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


function AfterActionPage( props ) {
    let navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect( () => {
        const timer = setTimeout( () => {
            navigate( from, { state: "fromEmailConfirmation", replace: true } );
        }, 3000 );
        return () => clearTimeout( timer );
    }, [ from, navigate ] );

    function handleRedirect( event ) {
        event.preventDefault();
        event.stopPropagation();

        navigate( from, { state: "fromEmailConfirmation", replace: true } );
    }

    return (
        <div>
            <Stack
                mt={ 8 }
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={ 8 }
            >
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {
                        ( props?.props?.emailConfirmed ) ?
                            "Your email is confirmed —" :
                            ( props?.props?.passwordResetConfirmed ) ?
                                "Your password is reset —" : null
                    }
                    <strong>
                        Redirecting to the store...
                    </strong>
                </Alert>
                <Button
                    variant="outlined"
                    onClick={ handleRedirect }
                >
                    Go to home page
                </Button>
            </Stack>
        </div>
    );
}

export default storeConnectUserReadOnly( AfterActionPage );
