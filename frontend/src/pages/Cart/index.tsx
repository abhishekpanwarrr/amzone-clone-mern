import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CartItem from "../../components/Cart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import navLogo from "../../assets/images/nav-logo.svg";
import { clearCart, setSnackBarMsg } from "../../redux/state";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log("🚀 ~ Cart ~ cart:", cart);
  const user = useSelector((state: any) => state.user);
  console.log("🚀 ~ Cart ~ user:", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc: any, next: any) => {
    return acc + next.price * next.quantity;
  }, 0);

  function loadScript(src: any) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const result = await axios.post(
      "http://localhost:8000/api/v1/payment/orders",
      {
        amount: totalPrice,
        orderId: uuidv4(),
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { amount, id: order_id, currency } = result.data.data;

    const options = {
      key: import.meta.env.RAZOR_KEY,
      amount: amount,
      currency: currency,
      name: "Abhishek Corp.",
      description: "Test Transaction",
      image: { navLogo },
      order_id: order_id,
      handler: async function (response: any) {
        const data = {
          totalAmount: totalPrice,
          orderItems: cart,
          userId: user?._id,
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:8000/api/v1/payment/verify",
          data
        );
        if (result.status === 200) {
          await handleCartAndRedirect();
        } else {
          alert("Something went wrong please connect with us.");
        }
      },
      notes: {
        address: "Abhishek Corporate Office",
      },
      theme: {
        color: "#00353F",
      },
    };
    // @ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const handleCartAndRedirect = async () => {
    dispatch(setSnackBarMsg(`Order placed successfully`));
    setTimeout(() => {
      dispatch(clearCart());
      navigate("/home");
    }, 1000);
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} minHeight={"70dvh"}>
      <Box flex={4} px={10} py={2}>
        <Box boxShadow={1} p={1} borderRadius={2}>
          <Typography variant="h3" fontWeight={700} py={2} pl={1}>
            Your Shopping Cart
          </Typography>
          <Divider />
          <Stack gap={3}>
            {cart.length <= 0 ? (
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                pt={3}
                gap={3}
              >
                <Typography variant="h3">
                  Your shopping bag is empty.
                </Typography>
              </Box>
            ) : (
              cart.map((item: any, index: number) => (
                <CartItem key={index} item={item} />
              ))
            )}
          </Stack>
          <Box
            mt={2}
            py={3}
            display={"flex"}
            width={"100%"}
            justifyContent={"end"}
          >
            {cart.length > 0 && (
              <Typography variant="h4" fontWeight={800} color={"#333"}>
                Subtotal ({cart.length} Items) -{" "}
                <Chip color="error" size="medium" label={`₹ ${totalPrice}`} />
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box flex={2} pr={4} mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h4">
              Subtotal ({cart.length} Items) -{" "}
              <Chip
                color="error"
                size="medium"
                label={`₹ ${totalPrice ?? 0}`}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              size="medium"
              disabled={totalPrice === 0}
              onClick={displayRazorpay}
            >
              Checkout
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Cart;
