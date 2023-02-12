import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { isSimplePasswordStringFailureMessage } from "@chatpta/validate/lib/validate";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";

import lib from "./lib";
import { pathAndURL } from "../../config";
import storeConnect from "../../store/storeConnectUserEdit";
import { AuthContainer, FormBox, FormBoxContainer } from "./lib/authElements";


function CreateAccountPage( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = lib.authLib.handlers( user, userMutate, userFetch, userReset );

    const [ rememberMe ] = React.useState( false )
    const [ agree, setAgree ] = React.useState( false );
    const [ submit, setSubmit ] = React.useState( false );
    const [ error, setError ] = React.useState( {
        name: false,
        email: false,
        password: false,
        emailExist: false,
    } );

    function emailErrorText( error ) {

        if ( error?.email ) {
            return "Email format not correct.";
        } else if ( error?.emailExist ) {
            return "Email already exist."
        } else {
            return "";
        }
    }

    const handleAgreeChange = ( event ) => {
        setSubmit( false )
        setAgree( event.target.checked );
    };

    function agreeToTermsAndConditionLabel() {
        return (
            <div>
                <span>I accept the </span>
                <Link to={ pathAndURL.legalTermsOfUsePath() }
                      style={ { color: "black" } }>
                    terms of use
                </Link>
                <span> and </span>
                <Link to={ pathAndURL.legalTermsOfUsePath() }
                      style={ { color: "black" } }>
                    privacy policy.</Link>
            </div>
        );
    }

    useEffect( () => {
            if ( handle.logInUser( user, userReset ) && user?.pending === false ) {
                handle.saveUserInLocalStore( user, rememberMe );
                userMutate( { status: "account created" } );
            }

            return () => {
                if ( user?.error ) {
                    userMutate( { error: "" } )
                }
            };

        }, [ user, handle, userReset, rememberMe, userMutate ]
    );

    if ( handle.isUserLoggedIn( user ) ) {
        return ( <Navigate to={ -1 } replace={ true }/> );
    } else {
        return (
            <AuthContainer>
                <Container component="main" maxWidth="sm">
                    <FormBoxContainer>
                        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Create account
                        </Typography>

                        { handle.showRecordExistError( user ) || "" }

                        { handle.showAgreeToTermsAndConditions( submit, agree ) || "" }

                        <FormBox
                            component="form"
                        >
                            <TextField
                                id="first_name"
                                name="first_name"
                                margin="normal"
                                label="Name"
                                required
                                fullWidth
                                autoFocus
                                value={ user?.first_name || "" }
                                onChange={ handle.firstNameChangeCreateUser( error, setError ) }
                                onBlur={ handle.handleNameBlur( error, setError ) }
                                error={ error?.name }
                                helperText={ error?.name ? "Must be present." : "" }
                            />
                            <TextField
                                id="email"
                                name="email"
                                margin="normal"
                                label="Email"
                                autoComplete="email"
                                required
                                fullWidth
                                value={ user?.email || "" }
                                onChange={ handle.emailChangeCreateUser( error, setError ) }
                                onBlur={ handle.handleEmailBlur( error, setError ) }
                                error={ error?.email || error?.emailExist }
                                helperText={ emailErrorText( error ) }
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                margin="normal"
                                type="password"
                                autoComplete="current-password"
                                required
                                fullWidth
                                value={ user?.password || "" }
                                onChange={ handle.passwordChangeCreateUser( error, setError ) }
                                onBlur={ handle.handlePasswordBlur( error, setError ) }
                                error={ error?.password }
                                helperText={ error?.password ? isSimplePasswordStringFailureMessage( user?.password ) : "" }
                            />
                            <div style={ { display: "flex", justifyContent: "center" } }>
                                <FormControlLabel
                                    control={ <Checkbox value="remember" color="primary"/> }
                                    label={ agreeToTermsAndConditionLabel() }
                                    checked={ agree }
                                    onChange={ handleAgreeChange }
                                />
                            </div>
                            <Button
                                style={ { marginTop: 8 } }
                                fullWidth
                                type="submit"
                                variant="contained"
                                size={ "large" }
                                sx={ {
                                    mt: 3,
                                    mb: 2,
                                    height: 60,
                                } }
                                onClick={ handle.clickCreateUser( userReset, agree, setSubmit, error, setError ) }
                            >
                                Send
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to={ pathAndURL.authUsersLoginPath() }
                                          style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                        { "Already have account? Sign in" }
                                    </Link>
                                </Grid>
                            </Grid>
                        </FormBox>
                    </FormBoxContainer>
                </Container>
            </AuthContainer>
        );
    }
}

export default storeConnect( CreateAccountPage );
