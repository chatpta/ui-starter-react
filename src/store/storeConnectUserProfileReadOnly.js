import { connect } from "react-redux";


function storeConnectUserProfileReadOnly( Element ) {

    const mapStateToProps = state => {
        return {
            user_profile: state.user_profile,
        };
    };

    return connect( mapStateToProps, null )( Element );
}

export default storeConnectUserProfileReadOnly;
