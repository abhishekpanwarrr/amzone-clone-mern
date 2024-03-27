import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const CartItem = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        sx={{
          flex: 1,
        }}
        component="img"
        width={350}
        height="194"
        image={
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        alt="Paella dish"
      />
      <CardContent
        sx={{
          flex: 2,
        }}
      >
        <Stack gap={1}>
          <Typography variant="h4" fontWeight={600} color="text.primary">
            Item one
          </Typography>
          <Typography variant="body2" fontWeight={400} color="text.secondary">
            Color
          </Typography>
          <Typography variant="body2" fontWeight={400} color="text.secondary">
            Style
          </Typography>
          <Typography variant="body2" fontWeight={400} color="text.secondary">
            Quantity
          </Typography>
          <Box>
            <Typography
              variant="caption"
              fontWeight={400}
              color="text.secondary"
              mr={1}
            >
              Price:
            </Typography>

            <Button variant="outlined">$ 999</Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CartItem;
