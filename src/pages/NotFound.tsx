import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ backgroundColor: "#1E1E20" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "16rem",
          color: "gray",
          "@media screen and (max-width: 768px)": { fontSize: "9rem" },
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          color: "gray",
          textAlign: "center",
          "@media screen and (max-width: 768px)": { fontSize: "1rem" },
        }}
      >
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to={"/"}
        sx={{
          marginTop: "1.5rem",
          backgroundColor: "#2e2e31",
          color: "gray",
          borderRadius: "0.5rem",
          fontSize: "1.3rem",
          "&:hover": { backgroundColor: "gray", color: "#dddddd" },
        }}
      >
        Main page
      </Button>
    </Box>
  );
};

export default NotFound;