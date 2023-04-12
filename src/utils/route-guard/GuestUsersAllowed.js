import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// project import
import { APP_DEFAULT_PATH } from "config";
import useAuth from "hooks/useAuth";

// ==============================|| GUEST GUARD ||============================== //

/**
 * Authenticated users go back or go to default path.
 * @param children
 * @returns {*}
 * @constructor
 */
const GuestUsersAllowed = ( { children } ) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect( () => {
    if ( isLoggedIn ) {
      navigate( location?.state?.from ? location?.state?.from : APP_DEFAULT_PATH, {
        state: {
          from: ""
        },
        replace: true
      } );
    }
  }, [ isLoggedIn, navigate, location ] );

  return children;
};

GuestUsersAllowed.propTypes = {
  children: PropTypes.node
};

export default GuestUsersAllowed;
