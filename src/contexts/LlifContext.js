import PropTypes from "prop-types";
import { createContext, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    loginAsync,
    registerAsync,
    forgotAsync,
    changePasswordAsync,
    logout,
    selectAuth,
    setLoginTrue,
    setKeepLoggedIn
} from "store/reducers/authReducers";

// project import
import Loader from "components/Loader";

// ==============================|| AUTH0 CONTEXT & PROVIDER ||============================== //

const LlifContext = createContext( null );

export const LlifProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const authState = useSelector( selectAuth );

    const loginUser = async ( userLoginObj ) => dispatch( loginAsync( userLoginObj ) );

    const setUserIsLoginTrue = useCallback( () => dispatch( setLoginTrue() ), [ dispatch ] );

    const setKeepUserLoggedIn = useCallback( checked => dispatch( setKeepLoggedIn( checked ) ), [dispatch] );

    const logoutUser = useCallback( () => dispatch( logout() ), [ dispatch ] );

    const registerUser = async ( userRegisterObject ) => dispatch( registerAsync( userRegisterObject ) );

    const forgotUserPassword = async ( passwordForgotObject ) => dispatch( forgotAsync( passwordForgotObject ) );

    const changeUserPassword = async ( changePasswordObject ) => dispatch( changePasswordAsync( changePasswordObject ) );

    const getUserEmail = () => authState?.user?.email;

    function verifyToken( authState ) {
        return authState?.user?.jwt;
    }

    useEffect( () => {
        const init = async () => {
            try {
                if ( verifyToken( authState ) ) {
                    setKeepUserLoggedIn( false );
                    setUserIsLoginTrue();
                }
            } catch ( err ) {
                logoutUser();
            }
        };
        init().catch( logoutUser );
    }, [ authState, logoutUser, setUserIsLoginTrue, setKeepUserLoggedIn ] );

    if ( authState.isInitialized !== undefined && !authState.isInitialized ) {
        return <Loader/>;
    }

    return (
        <LlifContext.Provider
            value={ {
                ...authState,
                loginUser,
                registerUser,
                forgotUserPassword,
                changeUserPassword,
                getUserEmail,
                logoutUser,
                setKeepUserLoggedIn
            } }
        >
            { children }
        </LlifContext.Provider>
    );
};

LlifProvider.propTypes = {
    children: PropTypes.node
};

export default LlifContext;
