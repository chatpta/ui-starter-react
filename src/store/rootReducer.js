/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * All rights reserved 2019                                                   *
 ******************************************************************************/

import { combineReducers } from "redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";

const pro = reduxStoreUtility.createReducer( "PRODUCT" );
const prs = reduxStoreUtility.createReducer( "PRODUCTS" );
const usr = reduxStoreUtility.createReducer( "USER" );
const img = reduxStoreUtility.createReducer( "IMAGE" );
const crt = reduxStoreUtility.createReducer( "CART" );
const dls = reduxStoreUtility.createReducer( "DEALS" );

const app = combineReducers( {
    product: pro.productReducer,
    products: prs.productsReducer,
    user: usr.userReducer,
    image: img.imageReducer,
    cart: crt.cartReducer,
    deals: dls.dealsReducer
} );

export default app;
