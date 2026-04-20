import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&h=800&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&h=800&fit=crop",
];

const Intro = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight + 220, behavior: "smooth" });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        component="section"
        sx={{
          height: "100vh",
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          sx={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "12px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              color="#FFFFFF"
              fontWeight={700}
              maxWidth="700px"
            >
              The magical world of Georgian culture in "Chacha club"
            </Typography>
          </motion.div>

          <Box display="flex" gap={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Button
                variant="contained"
                onClick={handleScroll}
                sx={{
                  backgroundColor: "#8B2331",
                  "&:hover": { backgroundColor: "#6e1c27" },
                  fontSize: "18px",
                  px: 4,
                  py: 1.5,
                }}
              >
                Menu
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/dishes/1"
                sx={{
                  backgroundColor: "#8B2331",
                  "&:hover": { backgroundColor: "#6e1c27" },
                  fontSize: "18px",
                  px: 4,
                  py: 1.5,
                }}
              >
                Dish of the day
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Intro;