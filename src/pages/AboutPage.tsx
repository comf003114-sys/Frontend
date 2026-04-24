import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#1E1E20" }}
    >
      <Typography variant="h4" color="#FFFFFF">
        О нас 🍷
      </Typography>
    </Box>
  );
};

export default AboutPage;