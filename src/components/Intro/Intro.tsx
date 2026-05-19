import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop",
];

const Intro = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              letterSpacing: "6px",
              color: "#E8C87A",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Добро пожаловать в
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "52px", md: "88px", lg: "110px" },
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Georgia', serif",
              lineHeight: 1,
              letterSpacing: "-3px",
              mb: 3,
              textShadow: "0 4px 40px rgba(0,0,0,0.6)",
            }}
          >
            Chacha Club
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              color: "rgba(255,255,255,0.75)",
              maxWidth: "540px",
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            Волшебный мир грузинской культуры, традиций и вкусов в самом сердце города
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
            <Button
              variant="contained"
              onClick={handleScroll}
              sx={{
                backgroundColor: "#8B2331",
                "&:hover": {
                  backgroundColor: "#6e1c27",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(139,35,49,0.6)",
                },
                fontSize: "15px",
                fontWeight: 600,
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
            >
              Меню
            </Button>

            <Button
              variant="outlined"
              component={Link}
              to="/dishes/1"
              sx={{
                borderColor: "rgba(232,200,122,0.6)",
                color: "#E8C87A",
                "&:hover": {
                  borderColor: "#E8C87A",
                  backgroundColor: "rgba(232,200,122,0.1)",
                  transform: "translateY(-2px)",
                },
                fontSize: "15px",
                fontWeight: 600,
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
            >
              Блюдо дня
            </Button>
          </Box>
        </motion.div>

        <Box
          sx={{
            position: "absolute",
            bottom: "36px",
            display: "flex",
            gap: 1,
          }}
        >
          {images.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              sx={{
                width: i === currentImageIndex ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  i === currentImageIndex
                    ? "#E8C87A"
                    : "rgba(255,255,255,0.35)",
                cursor: "pointer",
                transition: "all 0.4s",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;