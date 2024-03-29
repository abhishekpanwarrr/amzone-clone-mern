import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, setSnackBarMsg } from "../../redux/state";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
const SingleProduct = () => {
  const [product, setProduct] = useState<any>({});
  const location = useLocation();
  const modifiedString = location.pathname.replace("/product/", "");

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (quantity === 0 || quantity === null) {
      return alert("Please Select quantity");
    }
    dispatch(addToCart({ ...product, quantity }));
    dispatch(setSnackBarMsg(`${product.name} Added in cart`));
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/product/${modifiedString}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log("🚀 ~ data:", data);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setProduct({});
      }
    })();
  }, [modifiedString]);
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
    <Box px={5} my={2} minHeight={"60dvh"}>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        borderRadius={5}
        border={"1px solid rgba(0,0,0,0.2)"}
        mx={"auto"}
        maxWidth={1180}
      >
        <Box p={5} bgcolor={"rgba(0,0,0,0.2)"}>
          <img
            src={product.imageUrl}
            width={500}
            alt={product.name}
            style={{
              mixBlendMode: "color-burn",
              objectFit: "contain",
              aspectRatio: 3 / 2,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box className="info" p={5}>
          <Typography variant="h3" fontWeight={700}>
            {product.name}
          </Typography>
          <Box>
            <Typography variant="h5" my={2}>
              Price: <Chip color="secondary" label={`₹ ${product.price}`} />
            </Typography>
            <Typography
              variant="h3"
              mb={0.5}
              sx={{ textDecoration: "underline" }}
            >
              Descritption
            </Typography>
            <Typography variant="caption" maxWidth={500}>
              {product.description}
            </Typography>
            <Stack gap={0.5} my={2}>
              {product.extraDetails && (
                <Box>
                  <Typography
                    variant="h3"
                    mb={2}
                    sx={{ textDecoration: "underline" }}
                  >
                    Extra Details
                  </Typography>
                  {Object.entries(product.extraDetails).map(([key, value]) => (
                    <Typography variant="h5">
                      <Typography variant="caption" fontWeight={700}>
                        {key}
                      </Typography>
                      :{" "}
                      <Typography variant="caption" ml={1}>
                        {/* @ts-ignore */}
                        {value}
                      </Typography>
                    </Typography>
                  ))}
                </Box>
              )}
            </Stack>
            <Divider />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={3}
              mb={3}
              gap={5}
            >
              <FormControl
                fullWidth
                sx={{
                  flex: 1,
                }}
              >
                <InputLabel id="quantity">Quantity</InputLabel>
                <Select
                  labelId="quantity"
                  value={quantity}
                  label="Quantity"
                  onChange={(e: any) => setQuantity(e.target.value)}
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{
                  flex: 1,
                }}
                variant="contained"
                size="large"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default SingleProduct;
