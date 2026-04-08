import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, Chip, Divider } from "@mui/material";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { products } from "../data/products";

const DishDetails = () => {
  const { id } = useParams();
  const dish = products.find((p) => p.id === Number(id));

  if (!dish) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: "#1E1E20" }}>
        <Typography color="#FFFFFF" fontSize="24px">Блюдо не найдено 🍽️</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh", pt: 10, px: 6 }}>
      
      <Button component={Link} to="/" startIcon={<ArrowBackIcon />}
        sx={{ color: "#8B2331", mb: 3, "&:hover": { color: "#FFFFFF" } }}>
        Назад
      </Button>

      <Box display="flex" gap={6} flexWrap="wrap">
        
        {/* Левая колонка */}
        <Box flex={1} minWidth="300px">
          <Typography variant="h3" color="#FFFFFF" mb={3} fontWeight={700}>
            {dish.name}
          </Typography>

          <Box sx={{ borderRadius: "12px", overflow: "hidden", mb: 3 }}>
            <img src={dish.image} alt={dish.name}
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
          </Box>

          <Box display="flex" justifyContent="space-around" mb={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <ScaleOutlinedIcon sx={{ color: "#FFFFFF" }} />
              <Typography color="#FFFFFF">{dish.weight} гр</Typography>
            </Box>
            <Typography color="#8B2331" fontWeight={700} fontSize="20px">
              {dish.price} MDL
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTimeOutlinedIcon sx={{ color: "#FFFFFF" }} />
              <Typography color="#FFFFFF">{dish.time_to_cook} мин</Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#8B2331", mb: 3 }} />

          <Chip label="Категория" sx={{ backgroundColor: "#8B2331", color: "#FFFFFF", fontSize: "16px", mb: 2 }} />
          <Typography color="#AAAAAA" fontSize="16px">{dish.category}</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default DishDetails;