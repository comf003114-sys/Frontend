import React from "react";
import { Box, Typography } from "@mui/material";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

interface FavoritesProps {
  products: Product[];
  onToggleFavorite: (id: number) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ products, onToggleFavorite }) => {
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh", pt: 10, px: 4 }}>
      <Typography variant="h3" color="#FFFFFF" textAlign="center" fontWeight={700} mb={2}>
        Избранное 🤍
      </Typography>

      <Typography color="#AAAAAA" textAlign="center" mb={4} fontSize="16px">
        У вас{" "}
        <Box component="span" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
          {products.length}
        </Box>{" "}
        избранных блюд
      </Typography>

      {products.length === 0 ? (
        <Box textAlign="center" mt={10}>
          <Typography color="#AAAAAA" fontSize="24px" mb={2}>
            Вы ещё ничего не добавили 🤍
          </Typography>
          <Typography color="#555555" fontSize="16px">
            Нажмите на ❤️ на карточке блюда чтобы добавить в избранное
          </Typography>
        </Box>
      ) : (
        <>
          <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" mb={4}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </Box>

          <Box
            sx={{
              backgroundColor: "#2a2a2c",
              borderRadius: "12px",
              border: "1px solid #8B2331",
              p: 3,
              maxWidth: "400px",
              mx: "auto",
              mb: 6,
              textAlign: "center",
            }}
          >
            <Typography color="#AAAAAA" fontSize="16px" mb={1}>
              Общая стоимость избранных:
            </Typography>
            <Typography color="#8B2331" fontSize="28px" fontWeight={700}>
              {totalPrice} MDL
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Favorites;