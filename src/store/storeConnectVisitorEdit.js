import { connect } from "react-redux";
import reduxStoreUtility from "./lib";

const prSct = reduxStoreUtility.createActions( "Visitor" );
const visitorMutate = dispatch => keyValue => dispatch( prSct.visitorMutate( keyValue ) );
const visitorReset = dispatch => resetValue => dispatch( prSct.visitorReset( resetValue ) );
const prsAct = reduxStoreUtility.createAsyncActions( "Visitor" );
const visitorFetch = dispatch => request => dispatch( prsAct.visitorFetch( request ) );


function StoreConnectVisitorEdit( Element ) {

    const mapStateToProps = state => {
        return {
            visitor: state.visitor,
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            visitorFetch: visitorFetch( dispatch ),
            visitorMutate: visitorMutate( dispatch ),
            visitorReset: visitorReset( dispatch )
        };
    };

    return connect( mapStateToProps, mapDispatchToProps )( Element );
}

export default StoreConnectVisitorEdit;
