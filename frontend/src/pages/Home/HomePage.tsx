import { Box } from "@mui/material";
import SliderBox from "../../components/Slider";
import AllProducts from "../AllProducts";

const HomePage = () => {
  return (
    <Box mt={9}>
      <SliderBox />
      <AllProducts />
    </Box>
  );
};

export default HomePage;
