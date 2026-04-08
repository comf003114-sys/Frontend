import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Register:", name, email, password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#1E1E20" }}
    >
      <Box
        sx={{
          backgroundColor: "#2a2a2c",
          borderRadius: "12px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #8B2331",
        }}
      >
        <Typography variant="h4" color="#FFFFFF" textAlign="center" mb={4} fontWeight={700}>
          Регистрация
        </Typography>

        <TextField
          fullWidth
          label="Имя"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#8B2331" },
              "&:hover fieldset": { borderColor: "#FFFFFF" },
            },
            "& .MuiInputLabel-root": { color: "#AAAAAA" },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#8B2331" },
              "&:hover fieldset": { borderColor: "#FFFFFF" },
            },
            "& .MuiInputLabel-root": { color: "#AAAAAA" },
          }}
        />

        <TextField
          fullWidth
          label="Пароль"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#8B2331" },
              "&:hover fieldset": { borderColor: "#FFFFFF" },
            },
            "& .MuiInputLabel-root": { color: "#AAAAAA" },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#8B2331",
            "&:hover": { backgroundColor: "#6e1c27" },
            py: 1.5,
            fontSize: "16px",
          }}
        >
          Зарегистрироваться
        </Button>

        <Typography color="#AAAAAA" textAlign="center" mt={3}>
          Уже есть аккаунт?{" "}
          <Link to="/login" style={{ color: "#8B2331" }}>
            Войти
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;