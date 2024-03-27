import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ item }: any) => {
  console.log("item", item);
  const navigate = useNavigate();

  const handleProduct = async (id: any) => navigate(`/product/${id}`);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={item.imageurl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"} mt={3} mb={3}>
            <Button variant="outlined" size="small">
              Add to Cart
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleProduct(item?.id)}
            >
              See more
            </Button>
          </Box>
          <Divider />
        </Box>
      </CardActions>
      <CardContent>
        <Typography paragraph fontWeight={"400"}>
          Descritpion:
        </Typography>
        <Typography paragraph fontSize={"14px"}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AllProduct;
