import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Divider,
  Link,
} from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "white", // Set background color to white
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green",
                },
              "& .MuiOutlinedInput-input.Mui-focused": {
                color: "green",
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            margin="normal"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "green",
                },
              "& .MuiOutlinedInput-input.Mui-focused": {
                color: "green",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            Login
          </Button>
          <Divider sx={{ margin: "16px 0" }} />
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link href="/signup" color="primary">
              Create Account
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export { LoginForm };
