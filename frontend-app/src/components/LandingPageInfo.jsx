import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LandingPageInfo = () => {
  return (
    <div>
      <Grid container spacing={2} flexDirection="column">
        {" "}
        {/* Add flexDirection="column" */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              marginRight: "10px",
              padding: "10px",
              "&:hover": {
                borderColor: "darkgreen",
              },
              "&:active": {
                borderColor: "green",
              },
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              textAlign="left"
              sx={{
                "@media (max-width: 600px)": { variant: "h4", component: "h4" },
                color: "white", // Add white text color
                fontWeight: "bold", // Add bold font weight
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
              }}
            >
              Welcome to TrackMySubs! The #1 application for managing
              subscriptions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "10px" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                textAlign: "left",
                color: "white", // Add white text color
                fontWeight: "bold", // Add bold font weight
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
              }}
            >
              Take control of your subscription spending with our easy-to-use
              tool. Consolidate all your subscriptions in one place, monitor
              your expenses, and discover potential savings. Start budgeting
              smarter today and see how much you can save by keeping track of
              your subscriptions.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box
            sx={{
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "green",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
                "&:active": {
                  backgroundColor: "green",
                },
                width: "200px", // BEGIN: Increase button width
                height: "60px", // Increase button height
                fontSize: "20px", // Increase button font size
                fontWeight: "bold", // Add bold font weight
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export { LandingPageInfo };
