import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import { UserContext } from "../context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const DashboardNavBar = () => {
  const { setUserContext } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    // Redirect to the profile page
    navigate("/profile");
  };

  const handleLogout = () => {
    // Clear the user context and redirect to the login page
    setUserContext(null);
    navigate("/login");
  };

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
        <div>
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            aria-controls="profile-menu"
            aria-haspopup="true"
            edge="end"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export { DashboardNavBar };
