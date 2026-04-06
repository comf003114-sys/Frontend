import React from "react";
import { Box, Button } from "@mui/material";

export type PriceFilter = "all" | "cheap" | "medium" | "expensive";

interface FilterButtonsProps {
  active: PriceFilter;
  onChange: (filter: PriceFilter) => void;
}

const filters: { label: string; value: PriceFilter }[] = [
  { label: "Все", value: "all" },
  { label: "До 100 MDL", value: "cheap" },
  { label: "100–200 MDL", value: "medium" },
  { label: "Дороже 200 MDL", value: "expensive" },
];

const FilterButtons: React.FC<FilterButtonsProps> = ({ active, onChange }) => {
  return (
    <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap" mb={2}>
      {filters.map((f) => (
        <Button
          key={f.value}
          variant={active === f.value ? "contained" : "outlined"}
          onClick={() => onChange(f.value)}
          size="small"
          sx={{
            borderColor: "#8B2331",
            color: active === f.value ? "#FFFFFF" : "#AAAAAA",
            backgroundColor: active === f.value ? "#8B2331" : "transparent",
            borderRadius: "20px",
            fontSize: "12px",
            "&:hover": {
              backgroundColor:
                active === f.value ? "#6e1c27" : "rgba(139,35,49,0.15)",
              borderColor: "#8B2331",
            },
          }}
        >
          {f.label}
        </Button>
      ))}
    </Box>
  );
};

export default FilterButtons;