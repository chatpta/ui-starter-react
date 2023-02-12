import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link, Navigate } from "react-router-dom";

import { pathAndURL } from "../../config";
import lib from "./lib";
import storeConnect from "../../store/storeConnectUserEdit";
import { AuthContainer, FormBox, FormBoxContainer } from "./lib/authElements";


function RecoverPage( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = lib.authLib.handlers( user, userMutate, userFetch, userReset );

    if ( handle.isUserLoggedIn( user ) ) {
        return ( <Navigate to={ "/" } replace={ true }/> );
    } else {
        return (
            <AuthContainer>
                <Container component="main" maxWidth="sm">
                    <FormBoxContainer>
                        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Recover password
                        </Typography>

                        { handle.showRecoverPasswordAlert( user ) || "" }

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
                                onClick={ handle.clickRecoverPassword( userMutate ) }
                            >
                                Send
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to={ pathAndURL.authUsersLoginPath() }
                                          style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                        { "Already have an account? Sign in" }
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

export default storeConnect( RecoverPage );
