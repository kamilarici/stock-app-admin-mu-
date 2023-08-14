import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

const Firms = () => {
  const { getFirms } = useStockCall();

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography mb={3} variant="h4" color={"red"}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container spacing={2} mt={5}>
        <Grid item>
          <FirmCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Firms;
