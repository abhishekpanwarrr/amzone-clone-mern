import {
  allProducts,
  headerSliderData,
  productData,
  responsive,
} from "../../data";
import ProductItem from "../Products/ProductItem/indes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { Box, Typography } from "@mui/material";
import AllProduct from "../AllProduct";
const SliderBox = () => {
  return (
    <Box>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1500}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        {headerSliderData.map((item) => {
          return (
            <Box
              width={"100%"}
              key={item.id}
              height={"auto"}
              position={"relative"}
            >
              <img
                src={item.imageUrl}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Typography position={"absolute"} bottom={10} left={"50%"}>
                {item.desc}
              </Typography>
            </Box>
          );
        })}
      </Carousel>

      <Box paddingX={10}>
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
          Newly added products
        </Typography>
        <Carousel swipeable responsive={responsive}>
          {productData.length > 0 &&
            allProducts?.map((item) => (
              <AllProduct key={item.id} item={item} />
            ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SliderBox;
