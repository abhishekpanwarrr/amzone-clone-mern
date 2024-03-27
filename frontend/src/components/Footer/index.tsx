import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    {
      title: "Get to Know Us",
      links: ["About Us", "Careers", "Press Releases", "Amazon Science"],
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon",
        "Sell under Amazon Accelerator",
        "Protect and Build Your Brand",
        "Amazon Global Selling",
        "Become an Affiliate",
        "Fulfilment by Amazon",
        "Advertise Your Products",
        "Amazon Pay on Merchants",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "COVID-19 and Amazon",
        "Your Account",
        "Returns Centre",
        "100% Purchase Protection",
        "Amazon App Download",
        "Help",
      ],
    },
  ];
  return (
    <Box paddingX={10} py={3}>
      <Box display={"flex"} gap={10}>
        {menuItems.map((item) => (
          <Box>
            <Typography my={3} variant="h5" fontWeight={"600"}>
              {item.title}
            </Typography>
            <Box display={"flex"} flexDirection={"column"}>
              {item.links.map((item) => (
                <Link
                  to={"/"}
                  style={{
                    color: "#222",
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="overline" mb={0.5} fontWeight={"400"}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
