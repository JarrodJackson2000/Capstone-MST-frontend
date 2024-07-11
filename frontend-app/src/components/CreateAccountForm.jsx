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

import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add account creation logic here

    // Use axios GET to check if email is already in use
    // If email is already in use, display an error message
    // If email is not in use, create the account and redirect to login page

    axios
      .get(
        `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/user/${email}?type=string`
      )
      .then((response) => {
        if (response.data?.res?.email === email) {
          alert("Email is already in use.");
        } else {
          axios
            .post(
              "http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/user",
              {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              }
            )
            .then((response) => {
              console.log(response);
            })
            .then(() => {
              // Redirect to login page using useNavigate hook
              navigate("/login");
            });
        }
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "16px",
          backgroundColor: "white",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
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
            label="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
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
            Create Account
          </Button>
          <Divider sx={{ margin: "16px 0" }} />
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export { CreateAccountForm };
