import { Box, Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

interface MenuProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const Menu = ({ search, onSearchChange }: MenuProps) => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E20",
        borderBottom: "2px solid #8B2331",
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
        <SearchBar value={search} onChange={onSearchChange} />
      </Box>
    </Box>
  );
};

export default Menu;