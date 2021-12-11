import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Copyright from "../../../components/Copyright/Copyright";
import { handlers } from "./loginElementLib";
import { useEffect } from "react";


export default function LoginElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );
    let navigate = useNavigate();


    useEffect( () => {
            if ( user?.jwt && user?.pending === false ) {
                userReset( { status: "logged in", jwt: user?.jwt } );
                navigate( "/" );
            }
        }, [ user?.pending, userReset, user?.jwt, navigate, user ]
    );

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={ {
                    paddingTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                } }
            >
                <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={ { mt: 1 } }>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={ user?.email }
                        onChange={ handle.emailChange }
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={ user?.password }
                        onChange={ handle.passwordChange }
                    />
                    <div style={ { display: "flex", justifyContent: "center" } }>
                        <FormControlLabel
                            control={ <Checkbox value="remember" color="primary"/> }
                            label="Remember me"
                        />
                    </div>
                    <Button
                        style={ { marginTop: 8 } }
                        fullWidth
                        type="submit"
                        variant="contained"
                        size={ "large" }
                        sx={ { mt: 3, mb: 2 } }
                        onClick={ handle.clickCreateUser }
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to={ "/recover" }
                                  style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to={ "/users/register" }
                                  style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                { "Don't have an account? Sign Up" }
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={ { mt: 8, mb: 4 } }/>
        </Container>
    );
}
