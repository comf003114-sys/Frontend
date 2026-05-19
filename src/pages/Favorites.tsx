import React from "react";
import { Box, Typography } from "@mui/material";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

interface FavoritesProps {
  products: Product[];
  onToggleFavorite: (id: number) => void;
}

const scenes = [
  {
    emoji: "🏔️",
    label: "Казбеги",
    desc: "Горная вершина Кавказа",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    accent: "#4a9eff",
  },
  {
    emoji: "🍇",
    label: "Кахетия",
    desc: "Сердце грузинского вина",
    bg: "linear-gradient(135deg, #2d1b33 0%, #4a1942 40%, #6b2d5e 100%)",
    accent: "#c084fc",
  },
  {
    emoji: "🌊",
    label: "Батуми",
    desc: "Жемчужина Чёрного моря",
    bg: "linear-gradient(135deg, #0d2137 0%, #1a3a5c 40%, #0d7377 100%)",
    accent: "#22d3ee",
  },
  {
    emoji: "🏛️",
    label: "Тбилиси",
    desc: "Древняя столица Грузии",
    bg: "linear-gradient(135deg, #2c1810 0%, #4a2c1a 40%, #8b4513 100%)",
    accent: "#E8C87A",
  },
];

const Favorites: React.FC<FavoritesProps> = ({ products, onToggleFavorite }) => {
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E20",
        minHeight: "100vh",
        pt: 10,
        px: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {products.length === 0 && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "8%",
              left: "-2%",
              width: "280px",
              height: "200px",
              opacity: 0.13,
              fontSize: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "blur(1px)",
              animation: "floatL 8s ease-in-out infinite",
              "@keyframes floatL": {
                "0%,100%": { transform: "translateY(0px) rotate(-3deg)" },
                "50%": { transform: "translateY(-12px) rotate(-1deg)" },
              },
            }}
          >
            🏔️
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "5%",
              right: "3%",
              opacity: 0.12,
              fontSize: "100px",
              filter: "blur(1px)",
              animation: "floatR 10s ease-in-out infinite",
              "@keyframes floatR": {
                "0%,100%": { transform: "translateY(0px) rotate(4deg)" },
                "50%": { transform: "translateY(-10px) rotate(2deg)" },
              },
            }}
          >
            🍇
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "2%",
              opacity: 0.1,
              fontSize: "80px",
              filter: "blur(1.5px)",
              animation: "floatL 12s ease-in-out infinite 2s",
            }}
          >
            ⛪
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "45%",
              right: "2%",
              opacity: 0.1,
              fontSize: "90px",
              filter: "blur(1.5px)",
              animation: "floatR 9s ease-in-out infinite 1s",
            }}
          >
            🌊
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "5%",
              opacity: 0.11,
              fontSize: "85px",
              filter: "blur(1px)",
              animation: "floatL 11s ease-in-out infinite 3s",
            }}
          >
            🍷
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "8%",
              right: "4%",
              opacity: 0.1,
              fontSize: "95px",
              filter: "blur(1px)",
              animation: "floatR 13s ease-in-out infinite 1.5s",
            }}
          >
            🌄
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(232,200,122,0.04) 0%, transparent 70%)",
              animation: "glow 6s ease-in-out infinite",
              "@keyframes glow": {
                "0%,100%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1)" },
                "50%": { opacity: 1, transform: "translate(-50%, -50%) scale(1.1)" },
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "35%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(74,158,255,0.04) 0%, transparent 100%)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "35%",
              height: "100%",
              background:
                "linear-gradient(270deg, rgba(192,132,252,0.04) 0%, transparent 100%)",
            }}
          />
        </Box>
      )}
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* Заголовок */}
        <Box textAlign="center" mb={6}>
          <Typography
            sx={{
              fontSize: { xs: "40px", md: "56px" },
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Georgia', serif",
              mb: 1,
            }}
          >
            Избранное 🤍
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", letterSpacing: "1px" }}>
            {products.length > 0
              ? `У вас ${products.length} избранных блюд`
              : "Ваш список избранного пуст"}
          </Typography>
        </Box>

        {products.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Box
              sx={{
                fontSize: "80px",
                mb: 4,
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)", opacity: 0.6 },
                  "50%": { transform: "scale(1.15)", opacity: 1 },
                },
              }}
            >
              🤍
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "24px",
                p: { xs: 4, md: 6 },
                maxWidth: "460px",
                textAlign: "center",
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
                    "linear-gradient(90deg, transparent, #E8C87A, transparent)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#fff",
                  fontFamily: "'Georgia', serif",
                  mb: 2,
                }}
              >
                Вы ещё ничего не добавили
              </Typography>
              <Typography
                sx={{ color: "#666", fontSize: "15px", lineHeight: 1.8, mb: 4 }}
              >
                Исследуйте наше меню и добавляйте понравившиеся блюда — они
                сохранятся здесь
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  backgroundColor: "rgba(232,200,122,0.08)",
                  border: "1px solid rgba(232,200,122,0.2)",
                  borderRadius: "50px",
                  px: 3,
                  py: 1.5,
                }}
              >
                <Typography sx={{ fontSize: "18px" }}>❤️</Typography>
                <Typography
                  sx={{ color: "#E8C87A", fontSize: "14px", letterSpacing: "0.5px" }}
                >
                  Нажмите на сердечко на карточке блюда
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 6,
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "700px",
              }}
            >
              {scenes.map((scene) => (
                <Box
                  key={scene.label}
                  sx={{
                    background: scene.bg,
                    border: `1px solid ${scene.accent}22`,
                    borderRadius: "16px",
                    px: 3,
                    py: 2.5,
                    minWidth: "140px",
                    textAlign: "center",
                    transition: "all 0.3s",
                    cursor: "default",
                    "&:hover": {
                      borderColor: `${scene.accent}66`,
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 24px ${scene.accent}22`,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "32px", mb: 1 }}>{scene.emoji}</Typography>
                  <Typography
                    sx={{
                      color: scene.accent,
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      mb: 0.5,
                    }}
                  >
                    {scene.label}
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "11px" }}>
                    {scene.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <>
            <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" mb={4}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(232,200,122,0.2)",
                p: 4,
                maxWidth: "400px",
                mx: "auto",
                mb: 8,
                textAlign: "center",
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
                    "linear-gradient(90deg, transparent, #E8C87A, transparent)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "13px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Общая стоимость
              </Typography>
              <Typography
                sx={{
                  color: "#E8C87A",
                  fontSize: "42px",
                  fontWeight: 700,
                  fontFamily: "'Georgia', serif",
                }}
              >
                {totalPrice} MDL
              </Typography>
              <Typography sx={{ color: "#444", fontSize: "13px", mt: 1 }}>
                {products.length} блюд в избранном
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Favorites;