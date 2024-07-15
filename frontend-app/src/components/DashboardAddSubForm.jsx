import React from "react";
import {
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Stack,
  Box,
  Card,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext, AllSubs } from "../context/UserContext";

import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material"; // Added import for CheckCircle icon

function DashboardAddSubForm() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [addedSubscriptions, setAddedSubscriptions] = useState([]);
  const { userContext } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allSubs, setAllSubs } = useContext(AllSubs);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add subscription to addedSubscriptions
    const name = e.target.elements.name.value;
    const cost = e.target.elements.cost.value;

    setAddedSubscriptions([
      ...addedSubscriptions,
      {
        name: name,
        cost: cost,
        category: selectedCategory,
      },
    ]);
    // Clear form fields
    e.target.elements.name.value = "";
    e.target.elements.cost.value = "";
    setSelectedCategory("");
    setSuccessMessage(false);
  };

  const postSubscriptions = () => {
    // Post all subscriptions to the backend
    addedSubscriptions.forEach((subscription) => {
      setAllSubs([...allSubs, subscription]);
      axios
        .post(
          `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/subscription/${userContext}`,
          {
            title: subscription.name,
            cost: subscription.cost,
            category: subscription.category,
          }
        )
        .then((response) => {
          console.log(response);
          setSuccessMessage(true);
          setAddedSubscriptions([]);
        });
    });
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "4px",
        marginTop: "20px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        style={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Add Subscriptions
      </Typography>

      {/* MUI Form */}
      <Box sx={{ marginBottom: "10px" }}>
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
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Gaming">Gaming</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Health and Fitness">
                  Health and Fitness
                </MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                <MenuItem value="Home Services">Home Services</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </Stack>
        </form>
      </Box>

      {/* Display added subscriptions */}
      {addedSubscriptions.length === 0 ? (
        <Typography
          variant="body1"
          style={{
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          No Subscriptions Added
        </Typography>
      ) : (
        <>
          {addedSubscriptions.map((subscription, index) => (
            <Box sx={{ marginBottom: "10px" }} key={index}>
              <Card
                sx={{
                  backgroundColor: "lightgray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
        <Box>
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
                fontSize: "20px",
              }}
            />{" "}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export { DashboardAddSubForm };
