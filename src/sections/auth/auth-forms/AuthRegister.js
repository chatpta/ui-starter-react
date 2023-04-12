import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  Link,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  InputAdornment
} from "@mui/material";

// project import
import IconButton from "components/@extended/IconButton";
import useAuth from "hooks/useAuth";
import AnimateButton from "components/@extended/AnimateButton";
import { valueChange, valuesValidate } from "pages/auth/lib/validation";

// assets
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const { registerUser } = useAuth();

  // Form control
  const [ capsWarning, setCapsWarning ] = React.useState( false );
  const [ showPassword, setShowPassword ] = React.useState( false );

  // Form values
  const initialValues = {
    first_name: { value: "", error: false, message: "" },
    email: { value: "", error: false, message: "" },
    password: { value: "", error: false, message: "" }
  };
  const [ formValues, setFormValues ] = React.useState( initialValues );
  const [ isSubmitting, setIsSubmitting ] = React.useState( false );

  const handleRegisterClick = ( formValues, setIsSubmitting ) => event => {
    event.preventDefault();
    event.stopPropagation();

    setIsSubmitting( true );

    registerUser( {
      first_name: formValues?.first_name?.value,
      email: formValues?.email?.value,
      password: formValues?.password?.value
    } );

    setFormValues( { ...initialValues, password: { value: "", error: false, message: "" } } );
  };

  const handleBlur = event => setFormValues( valuesValidate( event, formValues ) );
  const handleChange = event => setFormValues( valueChange( event, formValues ) );

  const handleClickShowPassword = () => setShowPassword( !showPassword );
  const handleMouseDownPassword = ( event ) => event.preventDefault();

  const onKeyDown = ( keyEvent ) => {
    if ( keyEvent.getModifierState( "CapsLock" ) ) {
      setCapsWarning( true );
    } else {
      setCapsWarning( false );
    }
  };

  useEffect( () => {

    const authTimeOut = setTimeout( () => {
      setIsSubmitting( false );
    }, 3000 );

    return () => clearTimeout( authTimeOut );
  }, [ isSubmitting, setIsSubmitting ] );


  return (
    <>
      <form>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } md={ 12 }>
            <Stack spacing={ 1 }>
              <InputLabel htmlFor="name-signup">Name*</InputLabel>
              <OutlinedInput
                id="first_name"
                type="first_name"
                value={ formValues?.first_name?.value }
                name="first_name"
                onBlur={ handleBlur }
                onChange={ handleChange }
                placeholder="Name"
                fullWidth
                error={ formValues?.first_name?.error }
              />
              { formValues?.first_name?.error && (
                <FormHelperText error id="helper-text-name-signup">
                  { formValues?.first_name?.message }
                </FormHelperText>
              ) }
            </Stack>
          </Grid>
          <Grid item xs={ 12 }>
            <Stack spacing={ 1 }>
              <InputLabel htmlFor="email-signup">Email*</InputLabel>
              <OutlinedInput
                fullWidth
                error={ formValues?.email?.error }
                id="email-register"
                type="email"
                value={ formValues?.email?.value }
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange }
                placeholder="john@hospital.com"
                inputProps={ {} }
              />
              { formValues?.email?.error && (
                <FormHelperText error id="helper-text-email-signup">
                  { formValues?.email?.message }
                </FormHelperText>
              ) }
            </Stack>
          </Grid>
          <Grid item xs={ 12 }>
            <Stack spacing={ 1 }>
              <InputLabel htmlFor="password-login">Password</InputLabel>
              <OutlinedInput
                fullWidth
                color={ capsWarning ? "warning" : "primary" }
                error={ formValues?.password?.error }
                id="password-register"
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
                      { showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined /> }
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter password"
              />
              { capsWarning && (
                <Typography variant="caption" sx={ { color: "warning.main" } } id="warning-helper-text-password-login">
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
            <Typography variant="body2">
              By Registering, you agree to our &nbsp;
              <Link variant="subtitle2" component={ RouterLink } to="#">
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant="subtitle2" component={ RouterLink } to="#">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          {/*{ values.submit?.error && (*/ }
          {/*  <Grid item xs={ 12 }>*/ }
          {/*    <FormHelperText error>{ values?.submit?.message }</FormHelperText>*/ }
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
                onClick={ handleRegisterClick( formValues, setIsSubmitting ) }
              >
                Register
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegister;
