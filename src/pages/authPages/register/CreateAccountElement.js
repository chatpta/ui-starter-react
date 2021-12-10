import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Hidden } from "@mui/material";

import useCreateAccountElementStyle from "./CreateAccountElementStyle";
import { handlers } from "./CreateAccountElementLib";


function CreateAccountElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );

    const classes = useCreateAccountElementStyle();

    useEffect( () => {
            if ( user?.message === "account created" && user?.pending === false ) {
                userReset( { status: "account created" } );
            }
        }, [ user?.pending, user?.message, userReset ]
    );

    return (
        <div className={ classes.root }>
            <div className={ classes.innerContainer }>
                <div className={ classes.contactFormContainer }>
                    <h2 className={ classes.title }>Create account</h2>
                    <h4 className={ classes.title }>
                        <Hidden xsDown> Already have account, </Hidden>
                        <Link to={ "/login" } style={ { textDecoration: 'none' } }>
                            <span className={ classes.createAccount }>Login</span>
                        </Link>
                    </h4>
                    <TextField
                        id="username"
                        variant="outlined"
                        placeholder={ "First Name" }
                        color="primary"
                        size={ "small" }
                        fullWidth
                        className={ classes.textField }
                        value={ user?.first_name }
                        onChange={ handle.firstNameChange }
                    />
                    <TextField
                        id="email"
                        variant="outlined"
                        placeholder={ "Email" }
                        color="primary"
                        size={ "small" }
                        fullWidth
                        className={ classes.textField }
                        value={ user?.email }
                        onChange={ handle.emailChange }
                    />
                    <TextField
                        id="password"
                        variant="outlined"
                        placeholder={ "Password" }
                        color="primary"
                        size={ "small" }
                        type="password"
                        fullWidth
                        className={ classes.textField }
                        value={ user?.password }
                        onChange={ handle.passwordChange }
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={ classes.sendButton }
                        size={ "large" }
                        fullWidth
                        onClick={ handle.clickCreateUser }
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateAccountElement;
