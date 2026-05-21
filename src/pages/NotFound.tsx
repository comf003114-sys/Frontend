import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const dishes = ["🥘", "🍷", "🧆", "🥗", "🍖", "🫕", "🥩", "🍳"];

const NotFound = () => {
  const [emoji, setEmoji] = useState("🍽️");

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(dishes[Math.floor(Math.random() * dishes.length)]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1E1E20",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        px: 3,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,35,49,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {[
        { top: "10%", left: "8%", content: "🍷", size: "60px", opacity: 0.08 },
        { top: "15%", right: "10%", content: "🏔️", size: "70px", opacity: 0.07 },
        { bottom: "15%", left: "6%", content: "🫕", size: "65px", opacity: 0.08 },
        { bottom: "12%", right: "8%", content: "🍇", size: "60px", opacity: 0.07 },
      ].map((d, i) => (
        <Typography
          key={i}
          sx={{
            position: "absolute",
            fontSize: d.size,
            opacity: d.opacity,
            top: d.top,
            bottom: d.bottom,
            left: d.left,
            right: d.right,
            pointerEvents: "none",
            filter: "blur(2px)",
          }}
        >
          {d.content}
        </Typography>
      ))}

      <Box sx={{ position: "relative", zIndex: 1 }}>

        <Typography
          sx={{
            fontSize: "100px",
            lineHeight: 1,
            mb: 2,
            transition: "all 0.3s",
            filter: "drop-shadow(0 0 20px rgba(139,35,49,0.3))",
          }}
        >
          {emoji}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "100px", md: "160px" },
            fontWeight: 700,
            fontFamily: "'Georgia', serif",
            lineHeight: 1,
            background: "linear-gradient(135deg, #8B2331, #E8C87A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          404
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mb: 3 }}>
          <Box sx={{ width: "60px", height: "1px", backgroundColor: "rgba(139,35,49,0.4)" }} />
          <Typography sx={{ color: "#8B2331", fontSize: "14px" }}>●</Typography>
          <Box sx={{ width: "60px", height: "1px", backgroundColor: "rgba(139,35,49,0.4)" }} />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "22px", md: "30px" },
            fontFamily: "'Georgia', serif",
            color: "#fff",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Страница не найдена
        </Typography>

        <Typography sx={{ color: "#555", fontSize: "16px", maxWidth: "400px", mx: "auto", lineHeight: 1.8, mb: 5 }}>
          Похоже, это блюдо не в нашем меню. Вернитесь на главную и выберите что-нибудь вкусное!
        </Typography>

        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <Box
            component={Link}
            to="/"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: "50px",
              backgroundColor: "#8B2331",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#6e1c27",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 24px rgba(139,35,49,0.4)",
              },
            }}
          >
            На главную
          </Box>

          <Box
            component={Link}
            to="/favorites"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: "50px",
              border: "1px solid rgba(232,200,122,0.3)",
              color: "#E8C87A",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
              "&:hover": {
                borderColor: "#E8C87A",
                backgroundColor: "rgba(232,200,122,0.08)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Избранное
          </Box>
        </Box>

        <Typography
          component={Link}
          to="/"
          sx={{
            display: "block",
            mt: 8,
            fontSize: "16px",
            fontWeight: 700,
            color: "rgba(139,35,49,0.4)",
            letterSpacing: "3px",
            fontFamily: "'Georgia', serif",
            textDecoration: "none",
            "&:hover": { color: "#8B2331" },
            transition: "color 0.3s",
          }}
        >
          CHACHA CLUB
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;