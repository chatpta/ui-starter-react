import React, { useEffect, useState } from "react";

// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";

// project import
import useAuth from "hooks/useAuth";
import IconButton from "components/@extended/IconButton";
import AnimateButton from "components/@extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import { valueChange, valuesValidate } from "pages/auth/lib/validation";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// ============================|| RESET PASSWORD ||============================ //

const AuthChangePassword = () => {
    const { reqResponse, getUserEmail, changeUserPassword } = useAuth();
    const navigate = useNavigate();

    // Form control
    const [ capsWarning, setCapsWarning ] = React.useState( false );
    const [ showPassword, setShowPassword ] = React.useState( false );
    const [ showResetPassword, setShowResetPassword ] = React.useState( false );

    // Form values
    const initialValues = {
        email: { value: getUserEmail(), error: false, message: "" },
        password: { value: "", error: false, message: "" },
        new_password: { value: "", error: false, message: "" }
    };
    const [ formValues, setFormValues ] = React.useState( initialValues );
    const [ isSubmitting, setIsSubmitting ] = React.useState( false );
    const [ level, setLevel ] = useState();

    const handleChangePasswordClick = ( formValues, setIsSubmitting, setFormValues ) => event => {
        event.preventDefault();
        event.stopPropagation();

        setIsSubmitting( true );

        changeUserPassword( {
            email: formValues?.email?.value,
            password: formValues?.password?.value,
            new_password: formValues?.new_password?.value
        } );

        setFormValues( { ...initialValues, password: { value: "", error: false, message: "" } } );
    };

    const handleBlur = event => setFormValues( valuesValidate( event, formValues ) );
    const handleChange = event => setFormValues( valueChange( event, formValues ) );

    const handleClickShowPassword = () => {
        setShowPassword( !showPassword );
    };

    const handleClickShowResetPassword = () => {
        setShowResetPassword( !showResetPassword );
    };

    const handleMouseDownPassword = ( event ) => {
        event.preventDefault();
    };

    const changePassword = ( value ) => {
        const temp = strengthIndicator( value );
        setLevel( strengthColor( temp ) );
    };

    const onKeyDown = ( keyEvent ) => {
        if ( keyEvent.getModifierState( "CapsLock" ) ) {
            setCapsWarning( true );
        } else {
            setCapsWarning( false );
        }
    };

    useEffect( () => {
        changePassword( "" );
    }, [] );

    useEffect( () => {

        const authTimeOut = setTimeout( () => {
            setIsSubmitting( false );
        }, 3000 );

        return () => clearTimeout( authTimeOut );
    }, [ isSubmitting, setIsSubmitting ] );

    useEffect( () => {

        if ( reqResponse && isSubmitting ) {

            setIsSubmitting( false );

            navigate( "/auth/change-password-success", {
                state: {
                    from: ""
                },
                replace: true
            } );
        }

    }, [ setIsSubmitting, isSubmitting, reqResponse, navigate ] );

    return (
        <>
            <form>
                <Grid container spacing={ 3 }>
                    <Grid item xs={ 12 }>
                        <Stack spacing={ 1 }>
                            <InputLabel htmlFor="password-login">Current password</InputLabel>
                            <OutlinedInput
                                fullWidth
                                color={ capsWarning ? "warning" : "primary" }
                                error={ formValues?.password?.error }
                                id="password-login"
                                type={ showPassword ? "text" : "password" }
                                value={ formValues?.password?.value }
                                name="password"
                                onBlur={ ( event ) => {
                                    setCapsWarning( false );
                                    handleBlur( event );
                                } }
                                onKeyDown={ onKeyDown }
                                onChange={ handleChange }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ handleClickShowPassword }
                                            onMouseDown={ handleMouseDownPassword }
                                            edge="end"
                                            color="secondary"
                                        >
                                            { showPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/> }
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Enter password"
                            />
                            { capsWarning && (
                                <Typography variant="caption" sx={ { color: "warning.main" } }
                                            id="warning-helper-text-password-login">
                                    Caps lock on!
                                </Typography>
                            ) }
                            { formValues?.password?.error && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    { formValues?.password?.message }
                                </FormHelperText>
                            ) }
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Stack spacing={ 1 }>
                            <InputLabel htmlFor="password-reset">New password</InputLabel>
                            <OutlinedInput
                                fullWidth
                                error={ formValues?.new_password?.error }
                                id="password-new"
                                type={ showResetPassword ? "text" : "password" }
                                value={ formValues?.new_password?.value }
                                name="new_password"
                                onBlur={ handleBlur }
                                onChange={ ( e ) => {
                                    handleChange( e );
                                    changePassword( e.target.value );
                                } }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={ handleClickShowResetPassword }
                                            onMouseDown={ handleMouseDownPassword }
                                            edge="end"
                                            color="secondary"
                                        >
                                            { showResetPassword ? <EyeOutlined/> : <EyeInvisibleOutlined/> }
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Enter password"
                            />
                            {/*{ touched.password && errors.password && (*/ }
                            {/*  <FormHelperText error id="helper-text-password-reset">*/ }
                            {/*    { errors.password }*/ }
                            {/*  </FormHelperText>*/ }
                            {/*) }*/ }
                        </Stack>
                        <FormControl fullWidth sx={ { mt: 2 } }>
                            <Grid container spacing={ 2 } alignItems="center">
                                <Grid item>
                                    <Box sx={ { bgcolor: level?.color, width: 85, height: 8, borderRadius: "7px" } }/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" fontSize="0.75rem">
                                        { level?.label }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                    {/*{ errors.submit && (*/ }
                    {/*  <Grid item xs={ 12 }>*/ }
                    {/*    <FormHelperText error>{ errors.submit }</FormHelperText>*/ }
                    {/*  </Grid>*/ }
                    {/*) }*/ }
                    <Grid item xs={ 12 }>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={ isSubmitting }
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={ handleChangePasswordClick( formValues, setIsSubmitting, setFormValues ) }
                            >
                                Reset Password
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthChangePassword;
