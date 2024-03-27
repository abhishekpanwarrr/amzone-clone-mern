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

const Cart = () => {
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

    const result = await axios.post("http://localhost:8000/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_ZKW9P6DhoEOS2s",
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { "" },
      order_id: order_id,
      handler: async function (response: any) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post("http://localhost:8000/orders", data);

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Amazon Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      mt={9}
      minHeight={"100dvh"}
    >
      <Box flex={4} px={10} py={2}>
        <Box boxShadow={3} p={1} borderRadius={2}>
          <Typography variant="h3" fontWeight={700} py={2} pl={1}>
            Your Shopping Cart
          </Typography>
          <Divider />
          <Stack gap={3}>
            {[1, 2].map((item) => (
              <CartItem key={item} />
            ))}
          </Stack>
          <Box
            mt={2}
            py={3}
            display={"flex"}
            width={"100%"}
            justifyContent={"end"}
          >
            <Typography variant="h4" fontWeight={800} color={"#333"}>
              Subtotal (1 item) -{" "}
              <Chip color="error" size="medium" label={"$999"} />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box flex={2} pr={4} mt={3}>
        <Card>
          <CardContent>
            <Typography variant="h4">
              Subtotal (1 item) -{" "}
              <Chip color="error" size="medium" label={"$999"} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              size="medium"
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
