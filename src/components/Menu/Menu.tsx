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
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#1E1E20",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        borderBottom: "1px solid rgba(139,35,49,0.4)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(139,35,49,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            letterSpacing: "6px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Наши блюда
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "56px", md: "96px" },
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Georgia', serif",
            letterSpacing: "-3px",
            lineHeight: 1,
            mb: 2,
          }}
        >
          Menu
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 6,
          }}
        >
          <Box sx={{ width: "60px", height: "1px", backgroundColor: "rgba(139,35,49,0.5)" }} />
          <Box sx={{ fontSize: "16px" }}>🍷</Box>
          <Box sx={{ width: "60px", height: "1px", backgroundColor: "rgba(139,35,49,0.5)" }} />
        </Box>

        <SearchBar value={search} onChange={onSearchChange} />
      </Box>
    </Box>
  );
};

export default Menu;