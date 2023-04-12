import { Link } from "react-router-dom";

// material-ui
import { Box, Button, Grid, Typography } from "@mui/material";

// project import
import AnimateButton from "components/@extended/AnimateButton";
import AuthWrapper from "sections/auth/AuthWrapper";

// ================================|| CHECK MAIL ||================================ //

const ProtectedPageTwo = () => {

  return (
    <AuthWrapper>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 }>
          <Box sx={ { mb: { xs: -0.5, sm: 0.5 } } }>
            <Typography variant="h3">Protected page two</Typography>
            <Typography color="secondary" sx={ { mb: 0.5, mt: 1.25 } }>
              Only logged in users can see me.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={ 12 }>
          <AnimateButton>
            <Button
              component={ Link }
              to={ "/login" }
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ProtectedPageTwo;
