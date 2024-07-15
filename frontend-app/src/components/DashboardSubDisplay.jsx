import React, { useEffect, useState, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import axios from "axios";
import { UserContext, AllSubs } from "../context/UserContext";
import { Delete } from "@mui/icons-material";

const DashboardSubDisplay = () => {
  const { userContext } = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryCosts, setCategoryCosts] = useState({});
  const { allSubs, setAllSubs } = useContext(AllSubs);

  useEffect(() => {
    // Fetch all subscriptions for the user
    const fetchSubscriptions = async () => {
      if (userContext) {
        try {
          const response = await axios.get(
            `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/subscription/${userContext}`
          );
          setSubscriptions(response.data.subscriptions);
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
        }
      }
    };

    fetchSubscriptions();
  }, [allSubs, userContext]); // Update useEffect dependencies

  useEffect(() => {
    // Calculate categories
    const subscriptionCategories = new Set(
      subscriptions.map((subscription) => subscription.category)
    );
    setCategories(Array.from(subscriptionCategories));
  }, [subscriptions]);

  const calculateCategoryCosts = () => {
    // Calculate total cost for each category
    const costs = {};
    categories.forEach((category) => {
      const categorySubscriptions = subscriptions.filter(
        (subscription) => subscription.category === category
      );
      const totalCost = categorySubscriptions.reduce(
        (sum, subscription) => sum + subscription.cost,
        0
      );
      costs[category] = totalCost;
    });
    setCategoryCosts(costs);
  };

  useEffect(() => {
    calculateCategoryCosts();
  }, [categories, subscriptions]);

  const handleSubscriptionDeleted = async (deletedSubscriptionId) => {
    // Delete subscription
    try {
      await axios.delete(
        `http://ec2-3-106-116-28.ap-southeast-2.compute.amazonaws.com:8080/subscription/${deletedSubscriptionId}`
      );
      const updatedSubscriptions = subscriptions.filter(
        (subscription) => subscription._id !== deletedSubscriptionId
      );
      setSubscriptions(updatedSubscriptions);
      calculateCategoryCosts();
      setAllSubs(updatedSubscriptions); // Update allSubs context
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  const renderSubscriptionCards = (category) => {
    // Render subscription cards for a category
    return subscriptions
      .filter((subscription) => subscription.category === category)
      .map((subscription, index) => (
        <div key={subscription._id} style={{ marginBottom: "10px" }}>
          <Card>
            <CardContent>
              <Typography align="left">{subscription.title}</Typography>
              <Typography align="left">
                Cost: ${subscription.cost} per week
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  onClick={() => handleSubscriptionDeleted(subscription._id)}
                >
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </div>
      ));
  };

  return (
    // Display subscriptions by category
    <Box
      sx={{
        height: "400px",
        overflow: "auto",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {categories.map((category) => (
        <Accordion key={category}>
          <AccordionSummary>
            <Typography variant="h6" fontWeight="bold">
              {category} - Total Cost: ${categoryCosts[category]} per week
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {renderSubscriptionCards(category).map((card) => (
              <div key={card.key}>{card}</div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export { DashboardSubDisplay };
