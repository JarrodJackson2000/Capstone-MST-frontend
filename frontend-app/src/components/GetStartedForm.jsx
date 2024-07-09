import React from "react";
import {
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Stack,
  Box,
  Card,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext, AllSubs } from "../context/UserContext";

import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material"; // Added import for CheckCircle icon

function GetStartedForm({ category, body1, body2, body3, path }) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [addedSubscriptions, setAddedSubscriptions] = useState([]);
  const { userContext } = useContext(UserContext);
  const { allSubs, setAllSubs } = useContext(AllSubs);
  const [subscriptionsAdded, setSubscriptionsAdded] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const cost = e.target.elements.cost.value;

    setAddedSubscriptions([
      ...addedSubscriptions,
      {
        name: name,
        cost: cost,
      },
    ]);
    e.target.elements.name.value = "";
    e.target.elements.cost.value = "";
    setSuccessMessage(false);
  };

  const postSubscriptions = () => {
    addedSubscriptions.forEach((subscription) => {
      axios
        .post(`http://localhost:8080/subscription/${userContext}`, {
          title: subscription.name,
          cost: subscription.cost,
          category: category,
        })
        .then((response) => {
          setAllSubs([...allSubs, response.data.subscription]);
          console.log(response);
        });
    });
    setSubscriptionsAdded(true);
    setSuccessMessage(true);
    setAddedSubscriptions([]); // Set addedSubscriptions back to an empty array
  };

  return (
    <>
      <Typography
        variant="h3"
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {category}
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
        }}
      >
        Here you can include your {category} subscriptions for example:
      </Typography>
      <List style={{ textAlign: "center" }}>
        <ListItem>
          <Typography
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: isMobile ? "14px" : "16px",
              textAlign: "center",
            }}
          >
            {body1}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: isMobile ? "14px" : "16px",
              textAlign: "center",
            }}
          >
            {body2}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontSize: isMobile ? "14px" : "16px",
              textAlign: "center",
            }}
          >
            {body3}
          </Typography>
        </ListItem>
      </List>
      {/* MUI Form */}
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          marginBottom: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            alignItems={isMobile ? "stretch" : "center"}
          >
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              required
              type="text"
              sx={{
                fontSize: isMobile ? "12px" : "14px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "green",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "green",
                },
              }}
            />
            <TextField
              label="Weekly Cost"
              name="cost"
              variant="outlined"
              required
              type="number"
              sx={{
                fontSize: isMobile ? "12px" : "14px",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "green",
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "green",
                },
              }}
            />

            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </Stack>
        </form>

        {/* Display added subscriptions */}
        {addedSubscriptions.length === 0 ? (
          <Typography
            variant="body1"
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            No Subscriptions Added
          </Typography>
        ) : (
          <>
            {addedSubscriptions.map((subscription, index) => (
              <Box sx={{ marginBottom: "10px", marginTop: "10px" }} key={index}>
                <Card
                  sx={{
                    backgroundColor: "lightgray",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Box>
                    <Typography variant="body1">
                      Subscription: {subscription.name}
                    </Typography>
                    <Typography variant="body1">
                      Cost: ${subscription.cost} per week
                    </Typography>
                    <Typography variant="body1">
                      Category: {subscription.category}
                    </Typography>
                  </Box>
                  <IconButton
                    color="error"
                    onClick={() => {
                      const subscriptionIndex = index;
                      const updatedSubscriptions = addedSubscriptions.filter(
                        (subscription, index) => index !== subscriptionIndex
                      );
                      setAddedSubscriptions(updatedSubscriptions);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Card>
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginBottom: "10px" }}>
                  <Button
                    onClick={postSubscriptions}
                    variant="contained"
                    color="success"
                    sx={{
                      borderRadius: "50px",
                      color: "white",
                      backgroundColor: "green",
                      padding: "10px 20px",
                    }}
                  >
                    Submit all subscriptions
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}

        {successMessage ? (
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              padding: "20px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="body1"
              style={{
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Subscriptions Successfully Submitted
              <CheckCircle
                style={{
                  color: "green",
                  marginLeft: "5px",
                  verticalAlign: "middle",
                  fontSize: "20px", // Add this line to make the checkbox smaller
                }}
              />{" "}
              {/* Added CheckCircle icon */}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export { GetStartedForm };
