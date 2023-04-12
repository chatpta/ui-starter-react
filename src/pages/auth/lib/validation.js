import { isEmailString, isNameString, isSimplePasswordString } from "@chatpta/validate/lib/validate";
import { errorMessages } from "./messages";

function isError( event ) {
  switch ( event?.target?.name ) {
    case "email":
      return !isEmailString( event?.target?.value );
    case "password":
      return !isSimplePasswordString( event?.target?.value );
    case "first_name":
      return !isNameString( event?.target?.value );
    default:
      return false;
  }
}

export function valuesValidate( event, values ) {
  if ( event?.target?.value ) {
    return {
      ...values,
      [ event?.target?.name ]: {
        value: event?.target?.value,
        error: isError( event ),
        message: isError( event ) ? errorMessages( event ) : ""
      }
    };
  }
  return values;
}

export function valueChange( event, values ) {
  return {
    ...values,
    [ event?.target?.name ]: {
      value: event?.target?.value,
      error: false,
      message: ""
    }
  };
}

export function errorReset( event, values ) {
  return valueChange( event, values );
}

export function valueReset( event, values ) {
  return {
    ...values,
    [ event?.target?.name ]: {
      value: "",
      error: false,
      message: ""
    }
  };
}


