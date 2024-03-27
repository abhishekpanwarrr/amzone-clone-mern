import { Box, Button, Chip, Stack, Typography } from "@mui/material";
const SingleProduct = () => {
  return (
    <Box px={5} mt={12}>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        borderRadius={3}
        boxShadow={2}
      >
        <Box p={5}>
          <img
            src={
              "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="product-thumbnail"
          />
        </Box>
        <Box className="info" p={5}>
          <Typography variant="h3" fontWeight={700}>
            Fall limited edition sneakers
          </Typography>
          <Box>
            <Typography variant="h5" mt={2}>
              Price: <Chip color="secondary" label={"$ 999"} />
            </Typography>

            <Stack gap={0.5} mt={2}>
              <Typography variant="h5">Brand: samsung</Typography>
              <Typography variant="h5">Model Name: S23 Ultra 5G</Typography>
              <Typography variant="h5">
                Network Service Provider: Unlocked for All Carriers
              </Typography>
              <Typography variant="h5">
                Operating System: Android 13.0
              </Typography>
              <Typography variant="h5">Cellular Technology: 5G</Typography>
            </Stack>

            <Chip label="More about this item:" sx={{ mt: 4 }} />
            <Typography variant="body1" maxWidth={500}>
              Immerse yourself in music with these premium wireless Bluetooth
              headphones. Noise-cancellation technology ensures crystal-clear
              sound quality.{" "}
            </Typography>

            <Box display={"flex"} justifyContent={"end"} mt={3} mb={3}>
              <Button variant="contained" size="large">
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
      {/* <IconButton
        className="delete-button"
        size="small"
        disableRipple
        onClick={() => {}}
      ></IconButton> */}
    </Box>
  );
};

export default SingleProduct;
