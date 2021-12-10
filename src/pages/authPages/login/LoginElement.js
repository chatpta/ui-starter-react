import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useLoginElementStyle from "./LoginElementStyle";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";


function LoginElement( props ) {
    const { userFetch } = props;

    const classes = useLoginElementStyle();

    const [ userLogin, setUserLogin ] = React.useState( { username: '', password: '' } );

    const postReq = body => new Request( "http://localhost:3001/login",
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': window.location.origin
            },
            body: body
        } );


    const handleClickLogin = e => {
        e.stopPropagation();
        e.preventDefault();
        if ( userLogin?.username && userLogin?.password ) {
            userFetch( postReq( JSON.stringify( userLogin ) ) );
        }
    };


    return (
        <div className={ classes.loginRoot }>
            <div className={ classes.innerContainer }>
                <div className={ classes.contactFormContainer }>
                    <h2 className={ classes.title }>Login</h2>
                    <h4 className={ classes.title }>
                        <Hidden xsDown> Do not have account ? </Hidden>
                        <Link to={ "/register" } style={ { textDecoration: 'none' } }>
                            <span className={ classes.createAccount }>Register !</span>
                        </Link>
                    </h4>
                    <TextField
                        id="username"
                        variant="outlined"
                        placeholder={ "Username" }
                        color="primary"
                        size={ "small" }
                        fullWidth
                        className={ classes.textField }
                        value={ userLogin.username }
                        onChange={ event => setUserLogin( { ...userLogin, username: event.target.value } ) }
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
                        value={ userLogin.password }
                        onChange={ event => setUserLogin( { ...userLogin, password: event.target.value } ) }
                    />
                    <div className={ classes.rememberLine }>
                        <FormControlLabel
                            control={ <Checkbox
                                checked={ true }
                                onChange={ null }
                                name="remember"
                                color={ "primary" }
                            /> }
                            label="Remember me"
                        />
                        <Link to={ "/recover" } style={ { textDecoration: 'none' } }>
                            <p className={ classes.forgotPassword }>Forgot password?</p>
                        </Link>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={ classes.sendButton }
                        size={ "large" }
                        fullWidth
                        onClick={ handleClickLogin }
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginElement;
