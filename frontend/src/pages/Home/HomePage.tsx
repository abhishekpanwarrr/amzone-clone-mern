import { Box, CircularProgress } from "@mui/material";
import SliderBox from "../../components/Slider";
import AllProducts from "../AllProducts";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/v1/product", {
          method: "GET",
        });
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setProducts([]);
      }
    })();
  }, []);
  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        width={"80%"}
        mx={"auto"}
        minHeight={"60dvh"}
      >
        <CircularProgress size={50} />
      </Box>
    );
  }
  return (
    <Box>
      <SliderBox products={products} />
      <AllProducts products={products} />
    </Box>
  );
};

export default HomePage;
