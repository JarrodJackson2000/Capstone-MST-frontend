import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext, AllSubs } from "../context/UserContext";
import { Box, Typography, Button } from "@mui/material";

function DashboardTotalCost() {
  const [totalCost, setTotalCost] = useState(null);
  const [view, setView] = useState("weekly"); // Add view state
  const { userContext } = useContext(UserContext);
  const { allSubs, setAllSubs } = useContext(AllSubs);

  useEffect(() => {
    if (userContext) {
      // Call the API to get the total cost
      // Set the total cost in the state
      axios
        .get(
          `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/cost/${userContext}`
        )
        .then((response) => {
          setTotalCost(response.data.costs);
        });
    }
  }, [allSubs]);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const calculateMonthlyCost = () => {
    return totalCost * 4;
  };

  const calculateYearlyCost = () => {
    return totalCost * 52;
  };

  const renderTotalCost = () => {
    // Render the total cost based on the view
    if (view === "weekly") {
      return totalCost;
    } else if (view === "monthly") {
      return calculateMonthlyCost();
    } else if (view === "yearly") {
      return calculateYearlyCost();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
      >
        <Button
          variant={view === "weekly" ? "contained" : "outlined"}
          onClick={() => handleViewChange("weekly")}
          sx={{
            marginRight: "8px",
            color: "grey",
            borderColor: "white",
            backgroundColor: "white", // BEGIN: Change button color
            "&:hover": { backgroundColor: "white" },
          }}
        >
          Weekly
        </Button>
        <Button
          variant={view === "monthly" ? "contained" : "outlined"}
          onClick={() => handleViewChange("monthly")}
          sx={{
            marginRight: "8px",
            color: "grey",
            borderColor: "white",
            backgroundColor: "white", // Change button color
            "&:hover": { backgroundColor: "white" },
          }}
        >
          Monthly
        </Button>
        <Button
          variant={view === "yearly" ? "contained" : "outlined"}
          onClick={() => handleViewChange("yearly")}
          sx={{
            color: "grey",
            borderColor: "white",
            backgroundColor: "white", // Change button color
            "&:hover": { backgroundColor: "white" },
          }}
        >
          Yearly
        </Button>
      </Box>

      <Typography variant="h2" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Total cost: ${renderTotalCost()}
      </Typography>

      <Typography variant="body1" sx={{ marginTop: "16px" }}>
        Viewing total cost {view}
      </Typography>
    </Box>
  );
}

export { DashboardTotalCost };
