import { connect } from "react-redux";


function StoreConnectVisitorReadOnly( Element ) {

    const mapStateToProps = state => {
        return {
            visitor: state.visitor,
        };
    };

    return connect( mapStateToProps, null )( Element );
}

export default StoreConnectVisitorReadOnly;
