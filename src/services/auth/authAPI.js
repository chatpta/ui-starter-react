export function loginRequest( loginObject = {} ) {

  if ( isValidLoginUser( loginObject ) ) {

    return loginFetchRequest( loginObject );

  } else {

    return new Promise( resolve => resolve( { data: "login_input_error" } ) );

  }
}

export function registerRequest( registerObject = {} ) {

  if ( isValidRegisterUser( registerObject ) ) {

    return registerFetchRequest( registerObject );

  } else {

    return new Promise( resolve => resolve( { data: "register_input_error" } ) );

  }
}

export function forgotPasswordRequest( forgotPasswordObject = {} ) {

  if ( isValidForgotPasswordEmail( forgotPasswordObject ) ) {

    return forgotPasswordFetchRequest( forgotPasswordObject );

  } else {

    return new Promise( resolve => resolve( { data: "email_input_error" } ) );

  }
}

export function changePasswordRequest( changePasswordObject = {} ) {

  if ( isValidChangePasswordUser( changePasswordObject ) ) {

    return changePasswordFetchRequest( changePasswordObject );

  } else {

    return new Promise( resolve => resolve( { data: "change_password_input_error" } ) );

  }
}


/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/

function loginFetchRequest( loginObject ) {
  const loginRequestBody = JSON.stringify( { user: loginObject } );
  const loginUrl = "http://localhost:30000/api/v1/auth/login";

  return fetch( postRequestWithoutJwt( loginRequestBody, loginUrl ) )
    .then( res => handleFetchResponse( res ) )
    .then( res => ( { data: res } ) )
    .catch( () => ( { data: "fetch_error" } ) );
}

function registerFetchRequest( registerObject ) {
  const registerRequestBody = JSON.stringify( { user: registerObject } );
  const registerUrl = "http://localhost:30000/api/v1/auth/register";

  return fetch( postRequestWithoutJwt( registerRequestBody, registerUrl ) )
    .then( res => handleFetchResponse( res ) )
    .then( res => ( { data: res } ) )
    .catch( () => ( { data: "fetch_error" } ) );
}

function forgotPasswordFetchRequest( forgotPasswordObject ) {
  const forgotPasswordRequestBody = JSON.stringify( { user: forgotPasswordObject } );
  const registerUrl = "http://localhost:30000/api/v1/auth/recover";

  return fetch( postRequestWithoutJwt( forgotPasswordRequestBody, registerUrl ) )
    .then( res => handleFetchResponse( res ) )
    .then( res => ( { data: res } ) )
    .catch( () => ( { data: "fetch_error" } ) );
}

function changePasswordFetchRequest( changePasswordObject ) {
  const changePasswordRequestBody = JSON.stringify( { user: changePasswordObject } );
  const registerUrl = "http://localhost:30000/api/v1/auth/change-password";

  return fetch( patchRequestWithoutJwt( changePasswordRequestBody, registerUrl ) )
    .then( res => handleFetchResponse( res ) )
    .then( res => ( { data: res } ) )
    .catch( () => ( { data: "fetch_error" } ) );
}

function postRequestWithoutJwt( body, url ) {
  return new Request( url,
    {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": window.location.origin
      },
      body: body
    } );
}

function patchRequestWithoutJwt( body, url ) {
  return new Request( url,
    {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": window.location.origin
      },
      body: body
    } );
}

function handleFetchResponse( res ) {
  if ( !res.ok ) {
    return res.json();
  } else {
    return res.json();
  }
}

function isValidLoginUser( loginObject ) {
  return ( loginObject?.email?.length > 0 ) && ( loginObject?.password?.length > 0 );
}

function isValidRegisterUser( loginObject ) {
  return ( ( loginObject?.email?.length > 0 ) &&
    ( loginObject?.password?.length > 0 ) &&
    ( loginObject?.first_name?.length > 0 ) );
}

function isValidForgotPasswordEmail( forgotPasswordObject ) {
  return ( forgotPasswordObject?.email?.length > 0 );
}

function isValidChangePasswordUser( changePasswordObject ) {
  return ( ( changePasswordObject?.email?.length > 0 ) &&
    ( changePasswordObject?.password?.length > 0 ) &&
    ( changePasswordObject?.new_password?.length > 0 ) );
}
