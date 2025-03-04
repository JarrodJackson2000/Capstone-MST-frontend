import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const { userContext } = useContext(UserContext);
  console.log(userContext);

  return (
    <AppBar
      style={{
        top: 0,
        backgroundColor: "#f8f8f8",
        border: "2px solid green",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f8f8f8",
          color: "green",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: "0",
              color: "green",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
            }}
          >
            MySubTracker
          </Typography>
        </div>
        <NavLink
          to="/login"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "50px",
              padding: "8px 16px",
              border: "1px solid green",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
            sx={{
              "&:focus": {
                border: "1px solid green",
              },
              "&:active": {
                border: "1px solid green",
              },
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            Log In
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
