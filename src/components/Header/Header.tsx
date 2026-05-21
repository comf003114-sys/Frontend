import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Typography, Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface HeaderProps {
  favoritesCount: number;
}

const navLinks = [
  { label: "Каталог", to: "/" },
  { label: "О нас", to: "/about" },
];

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled
          ? "rgba(18,18,20,0.92)"
          : "rgba(18,18,20,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(139,35,49,0.5)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.4)"
          : "none",
        transition: "all 0.4s ease",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 3, md: 6 },
          minHeight: "64px !important",
        }}
      >
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#8B2331",
            letterSpacing: "3px",
            fontFamily: "'Georgia', serif",
            textDecoration: "none",
            transition: "all 0.3s",
            "&:hover": {
              color: "#E8C87A",
              letterSpacing: "4px",
            },
          }}
        >
          CHACHA CLUB
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Box
                key={link.to}
                component={Link}
                to={link.to}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                  backgroundColor: isActive
                    ? "rgba(139,35,49,0.2)"
                    : "transparent",
                  border: "1px solid",
                  borderColor: isActive
                    ? "rgba(139,35,49,0.5)"
                    : "transparent",
                  transition: "all 0.25s",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(139,35,49,0.1)",
                    borderColor: "rgba(139,35,49,0.3)",
                  },
                }}
              >
                {link.label}
              </Box>
            );
          })}

          <Box
            component={Link}
            to="/favorites"
            sx={{
              px: 2.5,
              py: 1,
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: location.pathname === "/favorites"
                ? "#fff"
                : "rgba(255,255,255,0.5)",
              backgroundColor: location.pathname === "/favorites"
                ? "rgba(139,35,49,0.2)"
                : "transparent",
              border: "1px solid",
              borderColor: location.pathname === "/favorites"
                ? "rgba(139,35,49,0.5)"
                : "transparent",
              transition: "all 0.25s",
              "&:hover": {
                color: "#fff",
                backgroundColor: "rgba(139,35,49,0.1)",
                borderColor: "rgba(139,35,49,0.3)",
              },
            }}
          >
            <Badge
              badgeContent={favoritesCount}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#8B2331",
                  color: "#fff",
                  fontSize: "10px",
                  minWidth: "16px",
                  height: "16px",
                },
              }}
            >
              {favoritesCount > 0
                ? <FavoriteIcon sx={{ fontSize: "16px", color: "#8B2331" }} />
                : <FavoriteBorderIcon sx={{ fontSize: "16px" }} />
              }
            </Badge>
            Избранное
          </Box>
        </Box>

        <Box
          component={Link}
          to="/login"
          sx={{
            px: 3,
            py: 1,
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#8B2331",
            border: "1px solid #8B2331",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#8B2331",
              transform: "translateY(-1px)",
            },
          }}
        >
          Войти
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;