import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: "280px",
        position: "relative",
        backgroundColor: "#2a2a2c",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <IconButton
        onClick={handleLike}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          "&:hover": { backgroundColor: "rgba(139,35,49,0.8)" },
        }}
        size="small"
      >
        {liked ? (
          <FavoriteIcon sx={{ color: "#8B2331", fontSize: "20px" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#FFFFFF", fontSize: "20px" }} />
        )}
      </IconButton>

      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ backgroundColor: "#DDDDDD" }}>
        <Typography fontWeight={700} fontSize="16px" color="#000000">
          {product.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography fontSize="14px" color="#000000">
            {product.weight} гр
          </Typography>
          <Typography fontSize="14px" fontWeight={700} color="#8B2331">
            {product.price} MDL
          </Typography>
          <Typography fontSize="14px" color="#000000">
            {product.time_to_cook} мин
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;