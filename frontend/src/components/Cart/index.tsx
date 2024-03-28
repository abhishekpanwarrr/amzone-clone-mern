import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/state";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item }: any) => {
  // const removeItem =() =>{}
  const dispatch = useDispatch();

  const removeItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        sx={{
          flex: 1,
          objectFit: "contain",
        }}
        component="img"
        width={350}
        height="194"
        image={item.imageurl}
        alt="Paella dish"
      />
      <CardContent
        sx={{
          flex: 2,
        }}
      >
        <Stack gap={1}>
          <Typography variant="h4" fontWeight={600} color="text.primary">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={400}
            color="text.secondary"
            maxHeight={69}
            overflow={"hidden"}
          >
            Description: {item.description}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={400}
            color="text.secondary"
            bgcolor={"beige"}
            width={"max-content"}
            px={2}
            py={1}
            sx={{
              fontWeight: 600,
            }}
            borderRadius={2}
          >
            Quantity: {item.quantity}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={400}
            color="text.secondary"
            bgcolor={"bisque"}
            width={"max-content"}
            px={2}
            py={1}
            borderRadius={2}
            sx={{
              fontWeight: 600,
            }}
          >
            Price: ₹ {item.price}
          </Typography>
        </Stack>
        <Box display={"flex"} justifyContent={"end"}>
          <Tooltip title="Delete item" placement="left">
            <IconButton
              size="large"
              aria-label="close"
              color="inherit"
              onClick={() => removeItem(item.id)}
            >
              <DeleteIcon sx={{ color: "chocolate" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
