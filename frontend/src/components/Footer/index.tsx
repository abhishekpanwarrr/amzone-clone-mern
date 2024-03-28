import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const menuItems = [
    {
      title: "Get to Know Us",
      links: [
        { item: "About Us", link: "/home" },
        { item: "Privacy", link: "/privacy" },
        { item: "Terms", link: "/terms" },
        { item: "Legals", link: "/legal" },
      ],
    },
    {
      title: "Connect with Us",
      links: [
        { item: "Facebook", link: "/home" },
        { item: "Twitter", link: "/home" },
        { item: "Instagram", link: "/home" },
      ],
    },
    {
      title: "Make Money with Us",
      links: [
        { item: "Sell on Amazon", link: "/home" },
        { item: "Sell under Amazon Accelerator", link: "/home" },
        { item: "Protect and Build Your Brand", link: "/home" },
        { item: "Amazon Global Selling", link: "/home" },
        { item: "Become an Affiliate", link: "/home" },
        { item: "Fulfilment by Amazon", link: "/home" },
        { item: "Advertise Your Products", link: "/home" },
        { item: "Amazon Pay on Merchants", link: "/home" },
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        { item: "COVID-19 and Amazon", link: "/home" },
        { item: "Your Account", link: "/home" },
        { item: "Returns Centre", link: "/home" },
        { item: "100% Purchase Protection", link: "/home" },
        { item: "Amazon App Download", link: "/home" },
        { item: "Help", link: "/home" },
      ],
    },
  ];
  return (
    <Box paddingX={10} py={3} bgcolor={"#ddd"}>
      <Box display={"flex"} justifyContent={"center"} gap={10}>
        {menuItems.map((item, index) => (
          <Box key={index}>
            <Typography my={3} variant="h5" fontWeight={"600"}>
              {item.title}
            </Typography>
            <Box display={"flex"} flexDirection={"column"}>
              {item.links.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  style={{
                    color: "#222",
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="overline" mb={0.5} fontWeight={"400"}>
                    {item.item}
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
