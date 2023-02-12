import StoreConnectUserEdit from "../../../store/storeConnectUserEdit";
import React from 'react';
import { useEffect } from "react";
import { isPasswordStringFailureMessage } from "@chatpta/validate/lib/validate";
import { Link, useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { pathAndURL } from "../../../config";
import { handlers } from "./changePasswordLib";
import { AuthContainer, FormBox, FormBoxContainer } from "../lib/authElements";


function LoginElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );
    const [ error, setError ] = React.useState( { password: false } );
    let navigate = useNavigate();


    useEffect( () => {
            if ( user?.jwt && user?.pending === false ) {
                userReset( { status: "logged in", jwt: user?.jwt } );
                navigate( "/" );
            }
        }, [ user?.pending, userReset, user?.jwt, navigate, user ]
    );

    return (
        <AuthContainer>
            <Container component="main" maxWidth="sm">
                <FormBoxContainer>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change password
                    </Typography>
                    <FormBox
                        component="form"
                        noValidate
                    >
                        <TextField
                            id="password"
                            name="password"
                            margin="normal"
                            label="Password"
                            type="password"
                            required
                            autoFocus
                            fullWidth
                            value={ user?.password || "" }
                            onChange={ handle.passwordChange }
                            onBlur={ handle.handlePasswordBlur( error, setError ) }
                            error={ error?.password }
                            helperText={ error?.password ? isPasswordStringFailureMessage( user?.password ) : "" }
                        />
                        <TextField
                            id="password_confirm"
                            name="password_confirm"
                            margin="normal"
                            label="Password Confirm"
                            type="password"
                            required
                            fullWidth
                            value={ user?.password_confirm || "" }
                            onChange={ handle.passwordConfirmChange }
                        />
                        <Button
                            style={ { marginTop: 8 } }
                            fullWidth
                            type="submit"
                            variant="contained"
                            size={ "large" }
                            sx={ { mt: 3, mb: 2 } }
                            onClick={ handle.clickChangePassword }
                        >
                            Send
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={ pathAndURL.authUsersPasswordRecoverPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={ pathAndURL.authUsersRegisterPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    { "Don't have an account? Sign Up" }
                                </Link>
                            </Grid>
                        </Grid>
                    </FormBox>
                </FormBoxContainer>
            </Container>
        </AuthContainer>
    );
}

export default StoreConnectUserEdit( LoginElement );
