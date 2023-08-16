/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, Typography } from "@mui/material";

// import { useEffect } from "react";
// import useStockCall from "../hooks/useStockCall";
// import { useSelector } from "react-redux";

import { useState } from "react";
import ProductModal from "../modals/ProductModal";
import ProductCard from "../components/ProductCard";
// import ProductCard from "../components/ProductCard";

const Products = () => {
  // const { getStockData } = useStockCall();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  // const { products } = useSelector((state) => state.stock);

  // useEffect(() => {
  //   getStockData("products");
  // }, []);

  const handleNewProduct = () => {
    setOpen(true);
  };

  return (
    <div>
      <Typography variant="h4" color={"red"} mb={3}>
        Product
      </Typography>
      <Button onClick={handleNewProduct} variant="contained">
        NEW PRODUCT
      </Button>
      <ProductCard />

      <ProductModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Products;
