import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="get-started-container">
      <Typography
        variant="h3"
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px", // Add space between header and body
        }}
      >
        Welcome to My Sub Tracker
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        We're excited to help you manage your subscriptions effortlessly. Follow
        our simple step-by-step guide to get started. Click "Next" to begin
        adding your subscriptions.
      </Typography>
      <Link to="/get-started1">
        <Button
          variant="contained"
          style={{
            borderRadius: "50px",
            backgroundColor: "green",
            color: "white",
            marginTop: "20px",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}

export { GetStarted };
