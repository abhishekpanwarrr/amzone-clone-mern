import { Box, CircularProgress } from "@mui/material";
import SliderBox from "../../components/Slider";
import AllProducts from "../AllProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSnackBarMsg } from "../../redux/state";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://amzone-clone-backend.vercel.app/api/v1/product"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error: any) {
        console.log("🚀 ~ error:", error);
        if (error.code === "ERR_NETWORK") {
          dispatch(setSnackBarMsg("Network Error! Try again later"));
        }
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
