import React from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import Counter from "../Counter/Counter";

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {
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
    <>
      <Counter count={products.length} />
      {products.length === 0 ? (
        <Box textAlign="center" py={5}>
          <Typography color="#AAAAAA" fontSize="18px">
            Ничего не найдено 🍽
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent="center"
          mt={2}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </>
  );
};

export default ProductList;