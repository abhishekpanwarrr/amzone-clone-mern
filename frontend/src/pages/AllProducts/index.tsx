import { Box, Typography } from "@mui/material";
import AllProduct from "../../components/AllProduct";
import { responsive } from "../../data";
import Carousel from "react-multi-carousel";

export default function AllProducts({ products }: any) {
  return (
    <Box paddingX={10} py={3}>
      {products.length > 0 && (
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
      )}
      <Box>
        <Carousel swipeable responsive={responsive}>
          {products?.length > 0 &&
            products?.map((item: any) => {
              return <AllProduct key={item._id} item={item} />;
            })}
        </Carousel>
      </Box>
    </Box>
  );
}
