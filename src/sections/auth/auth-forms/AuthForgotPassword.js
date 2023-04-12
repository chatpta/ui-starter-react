import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";

// project import
import useAuth from "hooks/useAuth";
import AnimateButton from "components/@extended/AnimateButton";
import { valueChange, valuesValidate } from "pages/auth/lib/validation";

// ============================|| FORGOT PASSWORD ||============================ //

const AuthForgotPassword = () => {
  const { forgotUserPassword, user } = useAuth();
  const navigate = useNavigate();

  // Form values
  const initialFormValues = { email: { value: "", error: false, message: "" } };
  const [ formValues, setFormValues ] = React.useState( initialFormValues );
  const [ isSubmitting, setIsSubmitting ] = React.useState( false );

  const handleForgotEmailClick = ( formValues, setIsSubmitting ) => event => {
    event.preventDefault();
    event.stopPropagation();

    setIsSubmitting( true );

    forgotUserPassword( {
      email: formValues?.email?.value
    } );

    setFormValues( initialFormValues );
  };

  const handleBlur = event => setFormValues( valuesValidate( event, formValues ) );
  const handleChange = event => setFormValues( valueChange( event, formValues ) );


  useEffect( () => {

    if ( user && isSubmitting ) {

      setIsSubmitting( false );

      navigate( "/check-mail", {
        state: {
          from: ""
        },
        replace: true
      } );
    }

  }, [ setIsSubmitting, isSubmitting, user, navigate ] );


  useEffect( () => {

    const authTimeOut = setTimeout( () => {
      setIsSubmitting( false );
    }, 1000 );

    return () => clearTimeout( authTimeOut );
  }, [ isSubmitting, setIsSubmitting ] );

  return (
    <>
      <form>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <Stack spacing={ 1 }>
              <InputLabel htmlFor="email-forgot">Email Address</InputLabel>
              <OutlinedInput
                fullWidth
                error={ formValues?.email?.error }
                id="email-forgot"
                type="email"
                value={ formValues?.email?.value }
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange }
                placeholder="Enter email address"
                inputProps={ {} }
              />
              { formValues?.email?.error && (
                <FormHelperText error id="helper-text-email-forgot">
                  { formValues?.email?.message }
                </FormHelperText>
              ) }
            </Stack>
          </Grid>
          {/*{errors.submit && (*/ }
          {/*  <Grid item xs={12}>*/ }
          {/*    <FormHelperText error>{errors.submit}</FormHelperText>*/ }
          {/*  </Grid>*/ }
          {/*)}*/ }
          <Grid item xs={ 12 } sx={ { mb: -2 } }>
            <Typography variant="caption">Do not forgot to check SPAM box.</Typography>
          </Grid>
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
                onClick={ handleForgotEmailClick( formValues, setIsSubmitting ) }
              >
                Send Password Reset Email
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthForgotPassword;
