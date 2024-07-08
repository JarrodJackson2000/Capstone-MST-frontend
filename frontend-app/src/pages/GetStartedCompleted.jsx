import React from "react";
import { Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

function GetStartedCompleted() {
  const navigate = useNavigate();

  const handleViewDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px",
        }}
      >
        Well done on completing your introduction to My Sub Tracker.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px",
        }}
      >
        Click "Visit Dashboard" to start viewing and managing your
        subscriptions.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ borderRadius: "20px" }}
        onClick={handleViewDashboard}
      >
        View Dashboard
      </Button>
    </>
  );
}

export { GetStartedCompleted };
