import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(245, 245, 245, 0.5)", // Updated background color with transparency
        padding: "0.5rem", // Updated padding to make it thinner
        textAlign: "center",
        position: "absolute", // Updated position to absolute
        bottom: 0, // Positioned at the bottom
        left: 0, // Positioned at the left
        width: "100%", // Stretches the whole width
      }}
    >
      <Typography variant="body2" color="textSecondary">
        This is the footer.
      </Typography>
    </Box>
  );
};

export { Footer };
