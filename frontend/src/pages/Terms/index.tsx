import { Typography, Container, Paper } from "@mui/material";
const Terms = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, minHeight: "50dvh" }}>
      <Paper sx={{ padding: 3, marginTop: 3, paddingTop: 10 }}>
        <Typography variant="h3" gutterBottom mt={1}>
          Ecommerce Terms and Conditions:
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Order Acceptance:
        </Typography>
        <Typography variant="caption">
          All orders placed through our website are subject to acceptance by
          [Your Company Name]. We reserve the right to refuse or cancel any
          order for any reason at any time.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Pricing and Availability:
        </Typography>
        <Typography variant="caption">
          All prices are in Indian rupees and are subject to change without
          notice. We make every effort to ensure the accuracy of pricing and
          product information, but errors may occur. In the event of an error,
          we reserve the right to cancel any orders placed with incorrect
          pricing or product information.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Shipping and Delivery:
        </Typography>
        <Typography variant="caption">
          We aim to ship orders within 4 business days of receiving payment.
          Delivery times may vary depending on your location and shipping
          method. We are not responsible for delays caused by shipping carriers
          or customs.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Returns and Exchanges:
        </Typography>
        <Typography variant="caption">
          We accept returns and exchanges within 10 days of delivery. Items must
          be in their original condition with tags attached. Please contact us
          to initiate a return or exchange.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Payment Methods:
        </Typography>
        <Typography variant="caption">
          We accept payment by credit card, debit card, and PayPal. All payments
          are processed securely through our payment processor.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Disclaimer of Warranties:
        </Typography>
        <Typography variant="caption">
          We make no representations or warranties of any kind, express or
          implied, regarding the products sold on this website. All products are
          sold "as is" and "as available."
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Limitation of Liability:
        </Typography>
        <Typography variant="caption">
          In no event shall Amazon.in be liable for any direct, indirect,
          incidental, special, or consequential damages arising out of or in any
          way connected with your purchase or use of any products sold on this
          website.
        </Typography>

        <Typography variant="caption">
          By placing an order on our website, you agree to be bound by these
          terms and conditions. If you have any questions about these terms and
          conditions, please contact us at contact@email.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Terms;
