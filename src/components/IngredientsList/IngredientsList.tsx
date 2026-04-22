import React from "react";
import { Box, Chip, Typography } from "@mui/material";

interface IngredientsListProps {
  dishId: number;
}

const mockIngredients: Record<number, string[]> = {
  1: ["Тесто", "Говядина", "Свинина", "Лук", "Чеснок", "Специи"],
  2: ["Тесто", "Сыр сулугуни", "Яйцо", "Масло", "Соль"],
  3: ["Свинина", "Лук", "Томаты", "Специи", "Уксус"],
  4: ["Виноградные листья", "Рис", "Говядина", "Лук", "Специи"],
  5: ["Курица", "Томаты", "Лук", "Чеснок", "Кинза", "Специи"],
  6: ["Шпинат", "Грецкие орехи", "Чеснок", "Специи"],
  7: ["Говядина", "Лук", "Специи", "Уксус"],
  8: ["Баклажан", "Перец", "Томаты", "Лук", "Чеснок", "Специи"],
};

const IngredientsList: React.FC<IngredientsListProps> = ({ dishId }) => {
  const ingredients = mockIngredients[dishId] || ["Ингредиенты не указаны"];

  return (
    <Box mt={2}>
      <Typography variant="h6" color="#FFFFFF" mb={2}>
        Ингредиенты
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {ingredients.map((ingredient, index) => (
          <Chip
            key={index}
            label={ingredient}
            sx={{
              backgroundColor: "#8B2331",
              color: "#FFFFFF",
              fontSize: "14px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default IngredientsList;