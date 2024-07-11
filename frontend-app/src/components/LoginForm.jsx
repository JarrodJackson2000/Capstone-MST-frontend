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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, SubContext, AllSubs } from "../context/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userContext, setUserContext } = useContext(UserContext);
  const { userHasSubscriptions, setUserHasSubscriptions } =
    useContext(SubContext);

  const { allSubs, setAllSubs } = useContext(AllSubs);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here

    // Use axios GET to check if email and password are correct
    // If email and password are correct, set the user context and redirect to the dashboard
    // If email and password are incorrect, display an error message

    axios
      .get(
        `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/user/${email}?type=string`
      )
      .then((response) => {
        console.log(response.data.res._id);
        console.log(response.data.res.password);
        if (
          response.data.res.email === email &&
          response.data.res.password === password
        ) {
          setUserContext(response.data.res._id);
          navigate("/get-started");
          axios
            .get(
              `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/subscription/${response.data.res._id}`
            )
            .then((response) => {
              if (response.data.subscriptions.length > 0) {
                setAllSubs(response.data.subscriptions);
                setUserHasSubscriptions(true);
              }
            });
        } else {
          alert("Email or password is incorrect.");
        }
      });
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
              "& .MuiInputLabel-root.Mui-focused": {
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
              "& .MuiInputLabel-root.Mui-focused": {
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
