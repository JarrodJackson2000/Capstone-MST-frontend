import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { UserContext } from "../context/UserContext";
import EditIcon from "@mui/icons-material/Edit";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "white",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  padding: "1rem",
});

const ProfileInfo = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const { userContext } = useContext(UserContext);

  useEffect(() => {
    // Fetch user data from the server on page load
    getData();
  }, []);

  // Fetch user data from the server
  function getData() {
    axios
      .get(`http://localhost:8080/user/${userContext}?type=objectId`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedData({
      firstName: userData.res.firstName,
      lastName: userData.res.lastName,
      email: userData.res.email,
      password: userData.res.password,
    });
  };

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Update user data using axios.put
    axios
      .put(`http://localhost:8080/user/${userContext}`, updatedData)
      .then((response) => {
        setIsEditing(false);
        // Update the displayed user data after successful save
        setUserData((prevUserData) => ({
          ...prevUserData,
          res: {
            ...prevUserData.res,
            ...updatedData,
          },
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Typography
        variant="h2"
        style={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        User Information
      </Typography>
      {Object.keys(userData).length > 0 ? (
        <>
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            First Name:{" "}
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={updatedData.firstName}
                onChange={handleInputChange}
              />
            ) : (
              userData.res.firstName
            )}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Last Name:{" "}
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={updatedData.lastName}
                onChange={handleInputChange}
              />
            ) : (
              userData.res.lastName
            )}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Email:{" "}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={updatedData.email}
                onChange={handleInputChange}
              />
            ) : (
              userData.res.email
            )}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Password:{" "}
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={updatedData.password}
                onChange={handleInputChange}
              />
            ) : (
              "********"
            )}
          </Typography>
          {isEditing ? (
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                borderRadius: "999px",
                color: "black",
              }}
              onClick={handleSave}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                borderRadius: "999px",
                color: "white",
              }}
              onClick={handleEdit}
            >
              <EditIcon style={{ color: "grey" }} />
            </Button>
          )}
        </>
      ) : (
        <Typography variant="body1">Loading user data...</Typography>
      )}
    </Container>
  );
};

export { ProfileInfo };
