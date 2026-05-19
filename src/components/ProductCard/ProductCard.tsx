import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <Box
      onClick={() => navigate(`/dishes/${product.id}`)}
      sx={{
        width: "300px",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#252527",
        border: "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.35s",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(232,200,122,0.25)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        },
        "&:hover .card-overlay": {
          opacity: 1,
        },
        "&:hover .card-image": {
          transform: "scale(1.06)",
        },
      }}
    >
      <IconButton
        onClick={handleLike}
        size="small"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 3,
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          "&:hover": { backgroundColor: "rgba(139,35,49,0.8)" },
          transition: "all 0.2s",
        }}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "#8B2331", fontSize: "18px" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#fff", fontSize: "18px" }} />
        )}
      </IconButton>

      <Box sx={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <Box
          className="card-image"
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
          }}
        />
        <Box
          className="card-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
            opacity: 0,
            transition: "opacity 0.3s",
          }}
        />
      </Box>

      <Box sx={{ p: 2.5 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "17px",
            color: "#fff",
            mb: 2,
            fontFamily: "'Georgia', serif",
          }}
        >
          {product.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "#555" }}>
            {product.weight} гр
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#E8C87A",
            }}
          >
            {product.price}{" "}
            <Box component="span" sx={{ fontSize: "12px", color: "#555" }}>
              MDL
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "#555",
              fontSize: "13px",
            }}
          >
            <Box component="span" sx={{ fontSize: "12px" }}>⏱</Box>
            {product.time_to_cook} мин
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;