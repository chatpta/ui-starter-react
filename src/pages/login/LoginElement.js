import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useLoginElementStyle from "./LoginElementStyle";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";


function Login() {
    const classes = useLoginElementStyle();

    const [ user, setUser ] = React.useState( { username: '', password: '' } );

    console.log( user );

    return (
        <div className={ classes.loginRoot }>
            <div className={ classes.innerContainer }>
                <div className={ classes.contactFormContainer }>
                    <h2 className={ classes.title }>Login</h2>
                    <h4 className={ classes.title }>
                        <Hidden xsDown> Do not have account ? </Hidden>
                        <Link to={ "/create-account" } style={ { textDecoration: 'none' } }>
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
                        value={ user.username }
                        onChange={ event => setUser( { ...user, username: event.target.value } ) }
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
                        value={ user.password }
                        onChange={ event => setUser( { ...user, password: event.target.value } ) }
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
                        <Link to={ "/forgot-password" } style={ { textDecoration: 'none' } }>
                            <p className={ classes.forgotPassword }>Forgot password?</p>
                        </Link>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={ classes.sendButton }
                        size={ "large" }
                        fullWidth
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
