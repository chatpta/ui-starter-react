import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { pathAndURL } from "../../config";
import { AuthContainer, FormBox, FormBoxContainer } from "./lib/authElements";
import { useSelector } from "react-redux";


export default function LoginOrRegisterPage() {
    const user = useSelector( state => state?.user );
    const navigate = useNavigate();

    function handleLoginClick( e ) {
        e.stopPropagation();
        e.preventDefault();
        navigate( pathAndURL.authUsersLoginPath(), { replace: true } );
    }

    function handleRegisterNewClick( e ) {
        e.stopPropagation();
        e.preventDefault();
        navigate( pathAndURL.authUsersRegisterPath(), { replace: true } );
    }

    if ( user?.loggedIn ) {
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
                                Welcome
                            </Typography>
                            <FormBox
                                component="form"
                            >
                                <Button
                                    style={ { marginTop: 8 } }
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size={ "large" }
                                    onClick={ handleLoginClick }
                                    sx={ {
                                        mt: 3,
                                        mb: 2,
                                        height: 60,
                                    } }
                                >
                                    Login
                                </Button>

                                <Button
                                    style={ { marginTop: 8 } }
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size={ "large" }
                                    onClick={ handleRegisterNewClick }
                                    sx={ {
                                        mt: 3,
                                        mb: 2,
                                        height: 60,
                                    } }
                                >
                                    Register New
                                </Button>
                            </FormBox>
                        </FormBoxContainer>
                    </Container>
                </AuthContainer>
            </React.Fragment>
        );
    }
}

