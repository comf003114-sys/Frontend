import { Box, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Menu = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E20",
      }}
      py={5}
    >
      <Typography
        variant="h2"
        textAlign="center"
        color="white"
        fontSize="80px"
        fontWeight={500}
        mb={4}
      >
        Menu
      </Typography>

      <Box mb={3}>
        <SearchBar value={search} onChange={setSearch} />
      </Box>

      <Typography color="#AAAAAA" fontSize="14px">
        Введите название блюда для поиска
      </Typography>
    </Box>
  );
};

export default Menu;