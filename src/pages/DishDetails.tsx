import { useParams, Link } from "react-router-dom";
import { Box, Typography, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import { products } from "../data/products";
import ReviewList from "../components/ReviewList/ReviewList";
import IngredientsList from "../components/IngredientsList/IngredientsList";

const categoryNames: Record<string, string> = {
  main: "Основное блюдо",
  grill: "Гриль",
  appetizer: "Закуска",
  soup: "Суп",
  bakery: "Выпечка",
  dessert: "Десерт",
};

const DishDetails = () => {
  const { id } = useParams();
  const dish = products.find((p) => p.id === Number(id));

  if (!dish) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"
        sx={{ backgroundColor: "#1E1E20" }}>
        <Typography color="#fff" fontSize="24px">Блюдо не найдено 🍽️</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh" }}>

      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", md: "55vh" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={dish.image}
          alt={dish.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(30,30,32,0.98) 100%)",
          }}
        />

        <Box
          component={Link}
          to="/"
          sx={{
            position: "absolute",
            top: 24,
            left: 32,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#fff",
            textDecoration: "none",
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50px",
            px: 2.5,
            py: 1,
            fontSize: "14px",
            transition: "all 0.2s",
            "&:hover": {
              backgroundColor: "rgba(139,35,49,0.6)",
              borderColor: "#8B2331",
            },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "16px" }} />
          Назад
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            left: { xs: 24, md: 48 },
          }}
        >
          <Chip
            label={categoryNames[dish.category] || dish.category}
            sx={{
              backgroundColor: "rgba(139,35,49,0.8)",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "1px",
              mb: 1.5,
              height: "26px",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "56px" },
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Georgia', serif",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            {dish.name}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: 6,
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 1, minWidth: "280px", maxWidth: "480px" }}>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              mb: 5,
            }}
          >
            {[
              { icon: <ScaleOutlinedIcon />, value: `${dish.weight} гр`, label: "Вес" },
              { icon: null, value: `${dish.price} MDL`, label: "Цена", highlight: true },
              { icon: <AccessTimeOutlinedIcon />, value: `${dish.time_to_cook} мин`, label: "Время" },
            ].map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: 2.5,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  ...(stat.highlight && {
                    borderColor: "rgba(139,35,49,0.4)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #8B2331, transparent)",
                    },
                  }),
                }}
              >
                {stat.icon && (
                  <Box sx={{ color: "#555", mb: 0.5, "& svg": { fontSize: "18px" } }}>
                    {stat.icon}
                  </Box>
                )}
                <Typography
                  sx={{
                    fontSize: stat.highlight ? "22px" : "18px",
                    fontWeight: 700,
                    color: stat.highlight ? "#E8C87A" : "#fff",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: "11px", color: "#444", letterSpacing: "1px", textTransform: "uppercase", mt: 0.5 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#E8C87A",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Ингредиенты
            </Typography>
            <IngredientsList dishId={dish.id} />
          </Box>
        </Box>

        <Box sx={{ flex: 1.2, minWidth: "300px" }}>
          <ReviewList dishId={dish.id} />
        </Box>
      </Box>
    </Box>
  );
};

export default DishDetails;