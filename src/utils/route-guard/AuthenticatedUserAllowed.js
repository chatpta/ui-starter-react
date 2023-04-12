import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Guest users go to login page.
 * @param children
 * @returns {*}
 * @constructor
 */
const AuthenticatedUserAllowed = ( { children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', {
        state: {
          from: location.pathname
        },
        replace: true
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

AuthenticatedUserAllowed.propTypes = {
  children: PropTypes.node
};

export default AuthenticatedUserAllowed;
