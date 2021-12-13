import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";

import { handlers } from "./CreateAccountElementLib";
import Copyright from "../../../components/Copyright/Copyright";
import { urls } from "../../../config";
import useCreateAccountElementStyle from "../lib/authStyle";


function CreateAccountElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );
    let navigate = useNavigate();
    const classes = useCreateAccountElementStyle();


    useEffect( () => {
            if ( user?.message === "account created" && user?.pending === false ) {
                userReset( { status: "account created" } );
                navigate( urls.usersLoginPath() );
            }
        }, [ user?.pending, user?.message, userReset, navigate ]
    );

    return (
        <div className={ classes.container }>
            <Container component="main" maxWidth="sm">
                <Box className={ classes.formBox }>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create account
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={ { mt: 1 } }
                        className={ classes.form }
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
                            onChange={ handle.firstNameChange }
                        />
                        <TextField
                            id="email"
                            name="email"
                            margin="normal"
                            label="Email Address"
                            autoComplete="email"
                            required
                            fullWidth
                            value={ user?.email || "" }
                            onChange={ handle.emailChange }
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
                            Send
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to={ urls.usersLoginPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    { "Already have account? Sign in" }
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={ { mt: 8, mb: 4 } }/>
            </Container>
        </div>
    );
}

export default CreateAccountElement;
