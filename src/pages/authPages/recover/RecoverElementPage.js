import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";
import RecoverElement from "./RecoverElement";


const prsAct = reduxStoreUtility.createAsyncActions( "User" );
const userFetch = dispatch => request => dispatch( prsAct.userFetch( request ) );

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userFetch: userFetch( dispatch )
    };
};

const LoginPage = connect( mapStateToProps, mapDispatchToProps )( RecoverElement );

export default LoginPage;
