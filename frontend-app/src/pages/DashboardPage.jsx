import { DashboardNavBar } from "../components/DashboardNavBar";
import { DashboardTotalCost } from "../components/DashboardTotalCost";
import { useState } from "react";
import { DashboardPieChart } from "../components/DashboardPieChart";
import { DashboardAddSubForm } from "../components/DashboardAddSubForm";

function DashboardPage() {
  const [totalCost, setTotalCost] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <>
      <DashboardNavBar />
      <DashboardTotalCost totalCost={totalCost} setTotalCost={setTotalCost} />
      <DashboardPieChart
        categories={categories}
        setCategories={setCategories}
      />
      <DashboardAddSubForm />
    </>
  );
}

export { DashboardPage };
