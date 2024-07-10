import { DashboardNavBar } from "../components/DashboardNavBar";
import { DashboardTotalCost } from "../components/DashboardTotalCost";
import { useState } from "react";
import { DashboardPieChart } from "../components/DashboardPieChart";
import { DashboardAddSubForm } from "../components/DashboardAddSubForm";
import { DashboardSubDisplay } from "../components/DashboardSubDisplay";

import { Box, Grid } from "@mui/material";

function DashboardPage() {
  const [totalCost, setTotalCost] = useState("");

  return (
    <>
      <DashboardNavBar />
      <Box sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <DashboardTotalCost
                totalCost={totalCost}
                setTotalCost={setTotalCost}
              />
              <DashboardPieChart />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <DashboardAddSubForm />
          </Grid>
          <Grid item xs={12}>
            <DashboardSubDisplay />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export { DashboardPage };
