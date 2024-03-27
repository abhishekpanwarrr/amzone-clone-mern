import { Typography, Container, Paper } from "@mui/material";
const Privacy = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, minHeight: "50dvh" }}>
      <Paper sx={{ padding: 3, marginTop: 3, paddingTop: 10 }}>
        <Typography variant="h3" gutterBottom mt={1}>
          Privacy Policy
        </Typography>
        Amzon.in is committed to protecting the privacy and security of your
        personal information. This Privacy Policy describes how we collect, use,
        and disclose your information when you use our website or services.
        <Typography variant="h4" gutterBottom mt={1}>
          Information We Collect:
        </Typography>
        <Typography variant="caption">
          We may collect personal information such as your name, email address,
          shipping address, billing information, and phone number when you place
          an order or register an account on our website. We also collect
          non-personal information such as your IP address, browser type, and
          device information.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          How We Use Your Information:
        </Typography>
        <Typography variant="caption">
          We use your personal information to process your orders, communicate
          with you about your orders, and provide customer support. We may also
          use your information to send you marketing communications about our
          products and services if you have opted in to receive them.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Disclosure of Your Information:
        </Typography>
        <Typography variant="caption">
          We may share your information with third-party service providers who
          assist us in operating our website, conducting our business, or
          servicing you. We may also disclose your information when required by
          law or to protect our rights, property, or safety.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Your Choices:
        </Typography>
        <Typography variant="caption">
          You have the right to access, update, or delete your personal
          information. You can also opt out of receiving marketing
          communications from us at any time by following the instructions in
          the communication or contacting us directly.{" "}
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Security:
        </Typography>
        <Typography variant="caption">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Changes to this Privacy Policy:
        </Typography>
        <Typography variant="caption">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the revised date will be indicated at the
          top of the page. We encourage you to review this Privacy Policy
          periodically for any changes. If you have any questions about this
          Privacy Policy, please contact us at contact@email.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Privacy;
