// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthChangePassword from 'sections/auth/auth-forms/AuthChangePassword';

// ================================|| RESET PASSWORD ||================================ //

const ChangePassword = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={1}>
          <Typography variant="h3">Reset Password</Typography>
          <Typography color="secondary">Please choose your new password</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthChangePassword />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ChangePassword;
