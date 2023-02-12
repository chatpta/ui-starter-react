import StoreConnectUserEdit from "../../store/storeConnectUserEdit";
import React from 'react';
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, Navigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { pathAndURL } from "../../config";
import lib from "./lib";
import { AuthContainer, FormBox, FormBoxContainer } from "./lib/authElements";


function LoginElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const [ rememberMe, setRememberMe ] = React.useState( false )

    const handle = lib.authLib.handlers( user, userMutate, userFetch, userReset );

    const handleRememberMeChange = ( event ) => {
        setRememberMe( event.target.checked );
    };

    useEffect( () => {
            if ( handle.logInUser( user, userReset ) ) {
                handle.saveUserInLocalStore( user, rememberMe );
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
            <React.Fragment>
                <AuthContainer>
                    <Container component="main" maxWidth="sm">
                        <FormBoxContainer>
                            <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>

                            { handle.showLoginErrorAlert( user ) || "" }

                            <FormBox
                                component="form"
                            >
                                <TextField
                                    id="email"
                                    name="email"
                                    margin="normal"
                                    label="Email"
                                    autoComplete="email"
                                    required
                                    autoFocus
                                    fullWidth
                                    value={ user?.email || "" }
                                    onChange={ handle.emailChangeLogin }
                                />
                                <TextField
                                    id="password"
                                    name="password"
                                    margin="normal"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    fullWidth
                                    value={ user?.password || "" }
                                    onChange={ handle.passwordChangeLogin }
                                />
                                <div style={ { display: "flex", justifyContent: "center" } }>
                                    <FormControlLabel
                                        control={ <Checkbox value="remember" color="primary"/> }
                                        label="Remember me"
                                        checked={ rememberMe }
                                        onChange={ handleRememberMeChange }
                                    />
                                </div>
                                <Button
                                    style={ { marginTop: 8 } }
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size={ "large" }
                                    onClick={ handle.clickLoginUser( userMutate ) }
                                    sx={ {
                                        mt: 3,
                                        mb: 2,
                                        height: 60,
                                    } }
                                >
                                    Sign In
                                </Button>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={ 2 }
                                >
                                    <Grid item>
                                        <Link to={ pathAndURL.authUsersPasswordRecoverPath() }
                                              style={ { textDecoration: 'none', color: "black" } }>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid
                                        item
                                    >
                                        <Link to={ pathAndURL.authUsersRegisterPath() }
                                              style={ {
                                                  textDecoration: 'none',
                                                  color: "black",
                                                  width: "100%",
                                                  float: "right",
                                                  textAlign: "right",
                                              } }>
                                            { "Don't have an account? Sign Up" }
                                        </Link>
                                    </Grid>
                                </Grid>
                            </FormBox>
                        </FormBoxContainer>
                    </Container>
                </AuthContainer>
            </React.Fragment>
        );
    }
}

export default StoreConnectUserEdit( LoginElement );
