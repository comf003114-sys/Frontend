import React from "react";
import { AppBar, Toolbar, Box, Button, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface HeaderProps {
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1a1a1a", borderBottom: "2px solid #8B2331" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>

        {/* Логотип */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ color: "#8B2331", letterSpacing: "2px", fontFamily: "Georgia" }}
        >
          CHACHA CLUB
        </Typography>

        {/* Навигация */}
        <Box display="flex" gap={3}>
          <Button component={Link} to="/" sx={{ color: "#FFFFFF", "&:hover": { color: "#8B2331" } }}>
            Каталог
          </Button>
          <Button
            component={Link}
            to="/favorites"
            sx={{ color: "#FFFFFF", "&:hover": { color: "#8B2331" } }}
            startIcon={
              <Badge badgeContent={favoritesCount} color="error">
                <FavoriteIcon sx={{ fontSize: "18px" }} />
              </Badge>
            }
          >
            Избранное
          </Button>
          <Button component={Link} to="/about" sx={{ color: "#FFFFFF", "&:hover": { color: "#8B2331" } }}>
            О нас
          </Button>
        </Box>

        {/* Кнопка входа */}
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          startIcon={<RestaurantMenuIcon />}
          sx={{
            color: "#8B2331",
            borderColor: "#8B2331",
            "&:hover": { backgroundColor: "#8B2331", color: "#FFFFFF" },
          }}
        >
          Войти
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;