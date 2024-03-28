import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Divider, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, likeDislikeProduct } from "../../redux/state";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AllProduct = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: any) => state.likedProducts);
  const likedProduct = likedProducts.find((p: any) => p === item.id);
  const handleProduct = async (id: any) =>
    navigate(`/product/${id}`, { state: item, replace: true });

  const handleLike = (id: any) => {
    console.log("id", id);

    dispatch(likeDislikeProduct(id));
  };
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    setMsg("Item added successfully");
    setOpen(true);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={item.imageurl}
          sx={{
            objectFit: "contain",
          }}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h4" color="text.secondary">
            {item.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography paragraph fontWeight={"400"}>
            Descritpion:
          </Typography>
          <Typography
            paragraph
            fontSize={"14px"}
            maxHeight={60}
            overflow={"clip"}
          >
            {item.description}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <IconButton
                aria-label="add to favorites"
                role="button"
                onClick={() => handleLike(item.id)}
              >
                <FavoriteIcon
                  sx={{
                    color: likedProduct ? "red" : "",
                  }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={3}
              mb={3}
            >
              <Button variant="outlined" size="small" onClick={handleAddToCart}>
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
          </Box>
        </CardActions>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={msg}
        action={action}
      />
    </>
  );
};

export default AllProduct;
