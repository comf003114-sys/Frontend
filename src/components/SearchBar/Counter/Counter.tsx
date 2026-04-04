import React from "react";
import { Box, Typography } from "@mui/material";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <Box display="flex" justifyContent="center" mb={1}>
      <Typography sx={{ color: "#AAAAAA", fontSize: "14px", letterSpacing: "0.5px" }}>
        Найдено блюд:{" "}
        <Box component="span" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
          {count}
        </Box>
      </Typography>
    </Box>
  );
};

export default Counter;