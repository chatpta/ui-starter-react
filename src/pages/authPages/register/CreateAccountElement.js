import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useCreateAccountElementStyle from "./CreateAccountElementStyle";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";


function CreateAccountElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;

    const classes = useCreateAccountElementStyle();

    function handleFirstNameChange( event ) {
        userMutate( { firstName: event.target.value } )
    }

    function handleEmailChange( event ) {
        userMutate( { email: event.target.value } )
    }

    function handlePasswordChange( event ) {
        userMutate( { password: event.target.value } )
    }

    const postReq = body => new Request( "http://localhost:3001/create",
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin
            },
            body: body
        } );


    const handleClickCreateUser = e => {
        e.stopPropagation();
        e.preventDefault();
        if ( user?.firstName && user?.email && user?.password ) {
            userFetch( postReq( JSON.stringify( user ) ) );
        }
    };

    useEffect( () => {
            userReset( {} );
        }, []
    );

    console.log( user );

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
                        value={ user?.firstName }
                        onChange={ handleFirstNameChange }
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
                        onChange={ handleEmailChange }
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
                        onChange={ handlePasswordChange }
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={ classes.sendButton }
                        size={ "large" }
                        fullWidth
                        onClick={ handleClickCreateUser }
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CreateAccountElement;
