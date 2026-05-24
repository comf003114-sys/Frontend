import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { login } from "../api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        window.location.href = "/";
      } else {
        alert(data.message || "Ошибка входа");
      }
    } catch {
      alert("Ошибка подключения к серверу");
    }
  };

  const inputSx = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      borderRadius: "12px",
      backgroundColor: "rgba(255,255,255,0.04)",
      "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
      "&:hover fieldset": { borderColor: "rgba(139,35,49,0.6)" },
      "&.Mui-focused fieldset": { borderColor: "#8B2331" },
    },
    "& input::placeholder": { color: "#444", opacity: 1 },
  };

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
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: { xs: "0", md: "28%" },
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=1200&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(30,30,32,0.3), rgba(30,30,32,1))",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: { xs: "0", md: "28%" },
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=1200&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(30,30,32,0.3), rgba(30,30,32,1))",
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,35,49,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "420px",
          px: 3,
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#8B2331",
              letterSpacing: "3px",
              fontFamily: "'Georgia', serif",
              textDecoration: "none",
              "&:hover": { color: "#E8C87A" },
              transition: "color 0.3s",
            }}
          >
            CHACHA CLUB
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 2,
              justifyContent: "center",
            }}
          >
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} />
            <Typography sx={{ fontSize: "14px" }}>🍷</Typography>
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            p: { xs: 4, md: 5 },
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #8B2331, transparent)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Georgia', serif",
              textAlign: "center",
              mb: 1,
            }}
          >
            Вход
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#444",
              textAlign: "center",
              mb: 4,
              letterSpacing: "0.3px",
            }}
          >
            Войдите, чтобы сохранять избранное
          </Typography>

          <TextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={inputSx}
          />

          <TextField
            fullWidth
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ ...inputSx, mb: 3 }}
          />

          <Box
            onClick={handleLogin}
            sx={{
              width: "100%",
              py: 1.8,
              borderRadius: "12px",
              backgroundColor: "#8B2331",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#6e1c27",
                transform: "translateY(-1px)",
                boxShadow: "0 8px 24px rgba(139,35,49,0.4)",
              },
            }}
          >
            Войти
          </Box>
          <Box textAlign="center" mt={3}>
            <Typography sx={{ color: "#444", fontSize: "14px" }}>
              Нет аккаунта?{" "}
              <Box
                component={Link}
                to="/register"
                sx={{
                  color: "#8B2331",
                  textDecoration: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#E8C87A" },
                  transition: "color 0.3s",
                }}
              >
                Зарегистрироваться
              </Box>
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          mt={4}
          flexWrap="wrap"
        >
          {["🥘 Грузинская кухня", "🍷 Вина", "🏔 Традиции"].map((tag) => (
            <Typography
              key={tag}
              sx={{
                fontSize: "12px",
                color: "#333",
                letterSpacing: "0.5px",
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;