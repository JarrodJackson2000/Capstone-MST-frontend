import {
  Typography,
  List,
  ListItem,
  useMediaQuery,
  TextField,
  Button,
  Stack,
  Box, // Add Box import
  Card, // Add Card import
} from "@mui/material";
import { useState } from "react"; // Add useState import
import axios from "axios"; // Add axios import
import { useContext } from "react"; // Add useContext import
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

function GetStartedForm({ category, body1, body2, body3, path }) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [addedSubscriptions, setAddedSubscriptions] = useState([]); // Add state for addedSubscriptions
  const { userContext } = useContext(UserContext);

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
          console.log(response);
        });
    });
  };

  return (
    <>
      <Typography
        variant="h3"
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          marginBottom: "20px", // Add margin bottom to create space
          textAlign: "center", // Center align the text
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
          textAlign: "center", // Center align the text
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
              textAlign: "center", // Center align the text
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
              textAlign: "center", // Center align the text
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
              textAlign: "center", // Center align the text
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
          padding: "20px",
          borderRadius: "4px",
          marginTop: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={2} alignItems="center">
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
                    borderColor: "green", // Change outline color to green when focused
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "green", // Change label color to green when focused
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
                    borderColor: "green", // Change outline color to green when focused
                  },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "green", // Change label color to green when focused
                },
              }}
            />
            <Button variant="contained" color="success" type="submit">
              Add
            </Button>
          </Stack>
        </form>
      </Box>
      {/* Display added subscriptions */}

      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "4px",
          marginTop: "20px",
        }}
      >
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
              <Card
                key={index}
                sx={{
                  backgroundColor: "lightgray",
                  padding: "10px",
                  marginBottom: "10px",
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
                </Box>
                <IconButton
                  color="error"
                  onClick={() => {
                    const subscriptionIndex = index; // Define subscriptionIndex here
                    const updatedSubscriptions = addedSubscriptions.filter(
                      (subscription, index) => index !== subscriptionIndex
                    );
                    setAddedSubscriptions(updatedSubscriptions);
                  }}
                >
                  <Delete />
                </IconButton>
              </Card>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
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
                Add all subscriptions
              </Button>
            </Box>
          </>
        )}
      </Box>
      {/* Skip and Next Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center align the buttons horizontally
          marginTop: "20px",
        }}
      >
        <Link to={path}>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "50px", color: "white" }}
          >
            Next
          </Button>
        </Link>
      </Box>
    </>
  );
}

export { GetStartedForm };
