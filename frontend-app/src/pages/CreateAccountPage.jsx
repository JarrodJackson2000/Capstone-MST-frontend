import { CreateAccountForm } from "../components/CreateAccountForm";
import { Catchphrase } from "../components/Catchphrase";
import { Box, Grid } from "@mui/material";

function CreateAccountPage() {
  return (
    <Box className="login-page-container">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Catchphrase />
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <CreateAccountForm />
        </Grid>
      </Grid>
    </Box>
  );
}

export { CreateAccountPage };
