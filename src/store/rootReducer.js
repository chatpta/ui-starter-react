/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * All rights reserved 2019                                                   *
 ******************************************************************************/

import { combineReducers } from "redux";
import reduxStoreUtility from "./lib";

// Note argument to createReducer is not case sensitive.
const user = reduxStoreUtility.createReducer( "user" );
const userProfile = reduxStoreUtility.createReducer( "User_Profile" );
const visitor = reduxStoreUtility.createReducer( "visitor" );

const app = combineReducers( {
    user: user.userReducer, // Note the prefix 'user' in userReducer
    user_profile: userProfile.user_profileReducer,
    visitor: visitor.visitorReducer
} );

export default app;
