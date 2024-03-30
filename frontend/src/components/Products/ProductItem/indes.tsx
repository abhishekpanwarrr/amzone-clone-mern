import { Button } from "@mui/material";

const ProductItem = ({ name, url, price, description }: any) => {
  return (
    <div className="card">
      <img className="product--image" src={url} alt="product image" />
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;
