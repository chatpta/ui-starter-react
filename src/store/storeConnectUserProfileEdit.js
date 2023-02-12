import { connect } from "react-redux";
import reduxStoreUtility from "./lib";

const prSct = reduxStoreUtility.createActions( "User_Profile" );
const user_profileMutate = dispatch => keyValue => dispatch( prSct.user_profileMutate( keyValue ) );
const user_profileReset = dispatch => resetValue => dispatch( prSct.user_profileReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "User_Profile" );
const user_profileFetch = dispatch => request => dispatch( prsAct.user_profileFetch( request ) );


function StoreConnectUserProfileEdit( Element ) {

    const mapStateToProps = state => {
        return {
            user_profile: state.user_profile,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            user_profileFetch: user_profileFetch( dispatch ),
            user_profileMutate: user_profileMutate( dispatch ),
            user_profileReset: user_profileReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectUserProfileEdit;
