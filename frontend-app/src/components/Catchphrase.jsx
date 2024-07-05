import { Typography } from "@mui/material";

const Catchphrase = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "white", // Change color to white
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
        }}
      >
        My Sub Tracker
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "white", // Change color to white
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
        }}
      >
        Track, Manage, Save - Effortlessly.
      </Typography>
    </div>
  );
};

export { Catchphrase };
