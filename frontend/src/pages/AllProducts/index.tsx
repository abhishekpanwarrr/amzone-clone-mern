import { Box, Typography } from "@mui/material";
import AllProduct from "../../components/AllProduct";
import { allProducts, responsive } from "../../data";
import Carousel from "react-multi-carousel";

export default function AllProducts() {
  return (
    <Box paddingX={10} py={3}>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        sx={{
          textDecoration: "underline",
        }}
        my={2}
        ml={2}
      >
        {" "}
        All Products
      </Typography>
      <Box>
        <Carousel swipeable responsive={responsive}>
          {allProducts.length > 0 &&
            allProducts?.map((item) => {
              return <AllProduct key={item.id} item={item} />;
            })}
        </Carousel>
      </Box>
    </Box>
  );
}
