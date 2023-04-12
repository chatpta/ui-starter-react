import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";


// project import
import IconButton from "components/@extended/IconButton";
import useAuth from "hooks/useAuth";
import AnimateButton from "components/@extended/AnimateButton";
import { valueChange, valuesValidate } from "pages/auth/lib/validation";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const { isLoggedIn, loginUser, setKeepUserLoggedIn } = useAuth();

  // Form control
  const [ capsWarning, setCapsWarning ] = React.useState( false );
  const [ showPassword, setShowPassword ] = React.useState( false );

  // Form values
  const initialValues = {
    email: { value: "", error: false, message: "" },
    password: { value: "", error: false, message: "" }
  };
  const [ formValues, setFormValues ] = React.useState( initialValues );
  const [ isSubmitting, setIsSubmitting ] = React.useState( false );
  const [ keepSigned, setKeepSigned ] = React.useState( false );

  const handleLoginClick = ( values, setKeepSignedCheck, setIsSubmitting ) => event => {
    event.preventDefault();
    event.stopPropagation();

    setIsSubmitting( true );
    setKeepUserLoggedIn( keepSigned );

    loginUser( {
      email: values?.email?.value,
      password: values?.password?.value
    } );

    setFormValues( { ...initialValues, password: { value: "", error: false, message: "" } } );
  };

  const handleBlur = event => setFormValues( valuesValidate( event, formValues ) );

  const handleChange = event => setFormValues( valueChange( event, formValues ) );

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleMouseDownPassword = ( event ) => {
    event.preventDefault();
  };

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
          <Grid item xs={ 12 }>
            <Stack spacing={ 1 }>
              <InputLabel htmlFor="email-login">Email Address</InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                value={ formValues?.email?.value }
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange }
                placeholder="Enter email address"
                fullWidth
                error={ formValues?.email?.error }
              />
              { formValues?.email?.error && (
                <FormHelperText error id="email-error-message">
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

          <Grid item xs={ 12 } sx={ { mt: -1 } }>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={ 2 }>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ keepSigned }
                    onChange={ ( event ) => setKeepSigned( event.target.checked ) }
                    name="checked"
                    color="primary"
                    size="small"
                  />
                }
                label={ <Typography variant="h6">Keep me sign in</Typography> }
              />
              <Link
                variant="h6"
                component={ RouterLink }
                to={ isLoggedIn ? "/auth/forgot-password" : "/forgot-password" }
                color="text.primary"
              >
                Forgot Password?
              </Link>
            </Stack>
          </Grid>
          {/*{ values.submit?.error && (*/ }
          {/*  <Grid item xs={ 12 }>*/ }
          {/*    <FormHelperText error>{ values?.submit?.message }</FormHelperText>*/ }
          {/*  </Grid>*/ }
          {/*) }*/ }
          <Grid item xs={ 12 } sx={ { pb: 1 } }>
            <AnimateButton>
              <Button
                disableElevation
                disabled={ isSubmitting }
                fullWidth size="large"
                type="submit"
                variant="contained"
                color="primary"
                onClick={ handleLoginClick( formValues, setKeepSigned, setIsSubmitting ) }
              >
                Login
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthLogin;
