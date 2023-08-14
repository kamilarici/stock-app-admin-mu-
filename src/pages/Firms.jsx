import { Button, Grid, Typography } from "@mui/material";
import FrimCard from "../components/FirmCard";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getStockData("firms");
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"red"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
      <Grid container mt={3} spacing={5} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm.id}>
            <FrimCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Firms;