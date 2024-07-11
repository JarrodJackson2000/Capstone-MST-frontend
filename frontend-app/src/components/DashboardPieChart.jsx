import React, { useEffect, useState, useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import axios from "axios";
import { UserContext, AllSubs } from "../context/UserContext";

const DashboardPieChart = () => {
  const { userContext } = useContext(UserContext);
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  const [data, setData] = useState([]);
  const { allSubs } = useContext(AllSubs);

  useEffect(() => {
    axios
      .get(
        `http://ec2-13-211-81-5.ap-southeast-2.compute.amazonaws.com:8080/subscription/${userContext}`
      )
      .then((response) => {
        setAllSubscriptions(response.data.subscriptions);
        const categoryMap = new Map();
        response.data.subscriptions.forEach((subscription) => {
          const { category, cost } = subscription;
          if (categoryMap.has(category)) {
            categoryMap.set(category, categoryMap.get(category) + cost);
          } else {
            categoryMap.set(category, cost);
          }
        });
        const totalCost = Array.from(categoryMap.values()).reduce(
          (a, b) => a + b,
          0
        );
        const newData = Array.from(categoryMap, ([name, value]) => ({
          name,
          value,
        }));
        setData(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [allSubs]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF00FF",
    "#00FFFF",
    "#FFFF00",
    "#FF0000",
    "#00FF00",
    "#0000FF",
  ];

  return (
    <div
      style={{
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        background: "white",
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export { DashboardPieChart };
