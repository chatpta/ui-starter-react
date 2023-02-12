import { connect } from "react-redux";


function StoreConnectUserVisitorReadOnly( Element ) {

    const mapStateToProps = state => {
        return {
            user: state?.user,
            visitor: state?.visitor,
        };
    };

    return connect( mapStateToProps, null )( Element );
}

export default StoreConnectUserVisitorReadOnly;
