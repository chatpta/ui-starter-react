import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useRecoverElementStyle from "../lib/authStyle";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import { urls } from "../../../config";
import Copyright from "../../../components/Copyright/Copyright";
import { handlers } from "./RecoverElementLib";


function RecoverElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );

    const classes = useRecoverElementStyle();

    return (
        <div className={ classes.container }>
            <Container component="main" maxWidth="sm">
                <Box className={ classes.formBox }>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recover password
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={ { mt: 1 } }
                        className={ classes.form }
                    >
                        <TextField
                            id="email"
                            name="email"
                            margin="normal"
                            label="Email Address"
                            autoComplete="email"
                            required
                            autoFocus
                            fullWidth
                            value={ user?.email }
                            onChange={ handle.emailChange }
                        />
                        <Button
                            style={ { marginTop: 8 } }
                            fullWidth
                            type="submit"
                            variant="contained"
                            size={ "large" }
                            sx={ { mt: 3, mb: 2 } }
                            onClick={ handle.clickRecoverPassword }
                        >
                            Send
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to={ urls.usersLoginPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    { "Already have an account? Sign in" }
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

export default RecoverElement;
