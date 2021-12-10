import { connect } from "react-redux";
import reduxStoreUtility from "@chatpta/redux-store-utility";
import CreateAccountElement from "./CreateAccountElement";


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

const LoginPage = connect( mapStateToProps, mapDispatchToProps )( CreateAccountElement );

export default LoginPage;
