import { DashboardNavBar } from "../components/DashboardNavBar";
import { DashboardTotalCost } from "../components/DashboardTotalCost";
import { useState } from "react";

function DashboardPage() {
  const [totalCost, setTotalCost] = useState("");
  const [categories, setCategories] = useState([]);
  const [costPerCategory, setCostPerCategory] = useState({});

  return (
    <>
      <DashboardNavBar />
      <DashboardTotalCost />
    </>
  );
}

export { DashboardPage };
