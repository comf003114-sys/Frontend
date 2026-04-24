import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ backgroundColor: "#1E1E20" }}
        gap={3}
      >
        <Typography
          variant="h3"
          sx={{ color: "#8B2331", fontFamily: "Georgia", letterSpacing: "4px" }}
        >
          CHACHA CLUB
        </Typography>
        <CircularProgress sx={{ color: "#8B2331" }} size={60} />
      </Box>
    </motion.div>
  );
};

export default Preloader;