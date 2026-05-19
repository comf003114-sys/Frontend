import React from "react";
import { Box, Typography } from "@mui/material";
import type { Product } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Counter from "../Counter/Counter";

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  error,
  favorites,
  onToggleFavorite,
}) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={5}>
        <Typography color="#FFFFFF" fontSize="18px">
          Загрузка...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={5}>
        <Typography color="#8B2331" fontSize="18px">
          Ошибка: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#1E1E20",
        px: { xs: 3, md: 8 },
        py: 6,
      }}
    >
      <Counter count={products.length} />

      {products.length === 0 ? (
        <Box textAlign="center" py={8}>
          <Typography sx={{ fontSize: "48px", mb: 2 }}>🍽️</Typography>
          <Typography color="#444" fontSize="18px">
            Ничего не найдено
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
            mt: 2,
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductList;