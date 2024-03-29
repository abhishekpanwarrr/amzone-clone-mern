import {
  Box,
  Card,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<any>([]);

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/v1/payment/${user?._id}`
        );
        if (response.status === 200) {
          setOrders(response.data.data);
        } else {
          setOrders([]);
        }
      } catch (error) {
        setOrders([]);
      } finally {
        setLoading(false);
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
      {orders.length <= 0 ? (
        <Box display={"flex"} justifyContent={"center"} minHeight={"60dvh"}>
          <Typography variant="h3">No order found</Typography>
        </Box>
      ) : (
        <Box>
          <Box mx={5} px={5} mt={2}>
            <Typography
              variant="h2"
              sx={{
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Your orders <Chip label={orders?.length} color="info" />
            </Typography>
          </Box>
          {orders.map((order: any, orderIndex: number) => (
            <Card
              key={orderIndex}
              sx={{
                my: 2,
                px: 5,
                mx: 5,
                borderRadius: 5,
              }}
            >
              <Box py={1} display={"flex"} gap={30}>
                <Stack>
                  <Typography variant="h3" my={1}>
                    Razorpay IDs:
                  </Typography>
                  <Typography variant="caption">
                    Order ID: {order.razorpayOrderId}
                  </Typography>
                  <Typography variant="caption">
                    Payment ID: {order.razorpayPaymentId}
                  </Typography>
                </Stack>
                <Box>
                  <Typography
                    variant="subtitle2"
                    bgcolor={"cornflowerblue"}
                    width={"max-content"}
                    color={"#fff"}
                    px={2}
                    py={1}
                    borderRadius={2}
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Total order value: ₹ {order?.totalAmount}
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ mb: 0.5 }} />
              {order.orderItems.map((item: any, itemIndex: number) => (
                <Box
                  key={itemIndex}
                  display={"flex"}
                  justifyContent={"space-between"}
                  gap={4}
                  mb={1}
                  py={2}
                >
                  <Stack flex={1} gap={0.5}>
                    <Typography variant="h5" fontWeight={800}>
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle2">
                      Category: {item.category}
                    </Typography>
                    <Typography
                      variant="subtitle2"
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
                    <Typography
                      variant="subtitle2"
                      bgcolor={"beige"}
                      width={"max-content"}
                      px={2}
                      py={1}
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant="subtitle2" my={1}>
                      Description: {item.description}
                    </Typography>
                  </Stack>
                  <Box flex={1}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ maxWidth: "200px" }}
                    />
                  </Box>
                </Box>
              ))}
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Orders;
