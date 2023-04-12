import PropTypes from "prop-types";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled( "div" )( ( { theme } ) => ( {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  "& > * + *": {
    marginTop: theme.spacing( 2 )
  }
} ) );

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

// ==============================|| MINIMAL LAYOUT ||============================== //

const CommonLayout = () => {

  return (
    <>
      <Suspense fallback={ <Loader /> }>
        <Outlet />
      </Suspense>
    </>
  );
};

CommonLayout.propTypes = {
  layout: PropTypes.string
};

export default CommonLayout;
