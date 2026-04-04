import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск блюд..."
      variant="outlined"
      size="small"
      sx={{
        width: "320px",
        "& .MuiOutlinedInput-root": {
          color: "#FFFFFF",
          borderRadius: "25px",
          backgroundColor: "rgba(255,255,255,0.05)",
          "& fieldset": { borderColor: "#8B2331" },
          "&:hover fieldset": { borderColor: "#FFFFFF" },
          "&.Mui-focused fieldset": { borderColor: "#8B2331" },
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#AAAAAA",
          opacity: 1,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#8B2331" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;