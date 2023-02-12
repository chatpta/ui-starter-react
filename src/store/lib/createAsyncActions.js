import { createActions } from "./createActions";

export const createAsyncActions = objectName => {
    const nameLowerCase = objectName.toLowerCase();
    const ac = createActions( objectName );
    return {
        [ nameLowerCase + "Fetch" ]: ( requestObject ) => {
            return dispatch => {
                dispatch( ac[ nameLowerCase + "Update" ]( { pending: true } ) );
                return fetch( requestObject )
                    .then( res => res.json() )
                    .then( res => dispatch( ac[ nameLowerCase + "Update" ]( { pending: false, ...res } ) ) )
                    .catch( error => dispatch( ac[ nameLowerCase + "Update" ]( { pending: false, error: error } ) ) );
            }
        }
    };
};
