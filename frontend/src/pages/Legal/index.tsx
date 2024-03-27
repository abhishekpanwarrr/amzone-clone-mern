import { Typography, Container, Paper } from "@mui/material";
const Legal = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, minHeight: "50dvh" }}>
      <Paper sx={{ padding: 3, marginTop: 3, paddingTop: 10 }}>
        <Typography variant="h3" gutterBottom mt={1}>
          Legal Disclaimer:
        </Typography>
        Welcome to Amazon.in . By accessing or using our website, you agree to
        comply with and be bound by the following terms and conditions:
        <Typography variant="h4" gutterBottom mt={1}>
          Intellectual Property:
        </Typography>
        <Typography variant="caption">
          All content on this website, including text, graphics, logos, images,
          and software, is the property of Amazon.in or its licensors
          and is protected by copyright and other intellectual property laws.
          You may not reproduce, distribute, or transmit any content from this
          website without our prior written consent.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Disclaimer of Warranties:
        </Typography>
        <Typography variant="caption">
          This website is provided on an "as is" and "as available" basis
          without any warranties of any kind, either express or implied. A`mazon.in does not warrant that the website will be uninterrupted
          or error-free, that defects will be corrected, or that the website or
          the server that makes it available are free of viruses or other
          harmful components.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Limitation of Liability:
        </Typography>
        <Typography variant="caption">
          In no event shall [Your Company Name] be liable for any direct,
          indirect, incidental, special, or consequential damages arising out of
          or in any way connected with your use of this website or any
          information or content on this website
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Governing Law:
        </Typography>
        <Typography variant="caption">
          These terms and conditions shall be governed by and construed in
          accordance with the laws of Amazon.in, without regard to its
          conflict of law principles.
        </Typography>
        <Typography variant="h4" gutterBottom mt={1}>
          Changes to Terms and Conditions:
        </Typography>
        <Typography variant="caption">
          Amazon.in reserves the right to revise these terms and conditions at
          any time without prior notice. By using this website, you agree to be
          bound by the current version of these terms and conditions.
        </Typography>
        <Typography variant="caption">
          If you have any questions about these terms and conditions, please
          contact us at contact@email.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Legal;
