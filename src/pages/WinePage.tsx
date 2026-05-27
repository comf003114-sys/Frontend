import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categoryMeta: Record<string, { label: string; emoji: string }> = {
  red:   { label: "Красные",   emoji: "🍷" },
  white: { label: "Белые",     emoji: "🥂" },
  amber: { label: "Янтарные",  emoji: "🍊" },
  rose:  { label: "Розовые",   emoji: "🌸" },
};

const tasteColors: Record<string, string> = {
  "Сухое":       "#4a7c59",
  "Полусладкое": "#8B2331",
  "Полусухое":   "#6b5a2d",
};

interface Wine {
  id: number;
  name: string;
  description: string;
  region: string;
  year: number;
  price: number;
  taste: string;
  category: string;
  imageUrl: string;
}

const WinePage = () => {
  const [activeCategory, setActiveCategory] = useState("red");
  const [wines, setWines] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/wines")
      .then((res) => res.json())
      .then((data) => {
        setWines(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = Object.keys(categoryMeta);
  const currentWines = wines.filter((w) => w.category === activeCategory);
  const meta = categoryMeta[activeCategory];

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh" }}>

      <Box sx={{ position: "relative", height: { xs: "45vh", md: "55vh" }, overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=800&fit=crop)",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(30,30,32,1) 100%)" }} />
        <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 3 }}>
          <Typography sx={{ fontSize: "12px", letterSpacing: "5px", color: "#E8C87A", textTransform: "uppercase", mb: 2 }}>
            Грузинские вина
          </Typography>
          <Typography sx={{ fontSize: { xs: "42px", md: "72px" }, fontWeight: 700, color: "#fff", fontFamily: "'Georgia', serif", letterSpacing: "-2px", lineHeight: 1, mb: 2 }}>
            Винная карта
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", maxWidth: "480px", lineHeight: 1.7 }}>
            Коллекция лучших грузинских вин из региона Кахетия и других винодельческих зон страны
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", px: 4, py: 5, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {categories.map((cat) => (
          <Box
            key={cat}
            onClick={() => setActiveCategory(cat)}
            sx={{
              px: 4, py: 2, borderRadius: "50px", cursor: "pointer",
              border: "1px solid",
              borderColor: activeCategory === cat ? "#8B2331" : "rgba(255,255,255,0.07)",
              backgroundColor: activeCategory === cat ? "rgba(139,35,49,0.15)" : "transparent",
              display: "flex", alignItems: "center", gap: 1.5,
              transition: "all 0.3s",
              "&:hover": { borderColor: "#8B2331", backgroundColor: "rgba(139,35,49,0.08)" },
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>{categoryMeta[cat].emoji}</Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: activeCategory === cat ? 700 : 400, color: activeCategory === cat ? "#fff" : "#555", letterSpacing: "1px", transition: "color 0.3s" }}>
              {categoryMeta[cat].label}
            </Typography>
            <Typography sx={{ fontSize: "11px", color: activeCategory === cat ? "rgba(255,255,255,0.4)" : "#333", ml: 0.5 }}>
              {wines.filter((w) => w.category === cat).length}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, maxWidth: "1200px", mx: "auto" }}>
        {loading ? (
          <Box display="flex" justifyContent="center" py={10}>
            <CircularProgress sx={{ color: "#8B2331" }} />
          </Box>
        ) : (
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
            {currentWines.map((wine) => (
              <Box
                key={wine.id}
                onClick={() => navigate(`/wine/${wine.id}`)}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px", p: 4,
                  display: "flex", gap: 3,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  position: "relative", overflow: "hidden",
                  "&:hover": { borderColor: "rgba(139,35,49,0.5)", transform: "translateY(-4px)", boxShadow: "0 16px 40px rgba(0,0,0,0.4)", backgroundColor: "rgba(139,35,49,0.05)" },
                  "&::before": { content: '""', position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", backgroundColor: "#8B2331", borderRadius: "20px 0 0 20px", opacity: 0, transition: "opacity 0.3s" },
                  "&:hover::before": { opacity: 1 },
                }}
              >
                <Box
                  sx={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    overflow: "hidden", flexShrink: 0,
                    border: "1px solid rgba(139,35,49,0.2)",
                  }}
                >
                  {wine.imageUrl ? (
                    <Box component="img" src={wine.imageUrl} alt={wine.name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "rgba(139,35,49,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
                      {meta.emoji}
                    </Box>
                  )}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#fff", fontFamily: "'Georgia', serif" }}>
                      {wine.name}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#E8C87A", fontFamily: "'Georgia', serif", whiteSpace: "nowrap", ml: 2 }}>
                      {wine.price} <Box component="span" sx={{ fontSize: "12px", color: "#555" }}>MDL</Box>
                    </Typography>
                  </Box>

                  <Box display="flex" gap={1.5} mb={2} flexWrap="wrap">
                    <Box sx={{ px: 2, py: 0.4, borderRadius: "50px", backgroundColor: `${tasteColors[wine.taste] ?? "#555"}22`, border: `1px solid ${tasteColors[wine.taste] ?? "#555"}44` }}>
                      <Typography sx={{ fontSize: "11px", color: tasteColors[wine.taste] ?? "#555", letterSpacing: "0.5px" }}>
                        {wine.taste}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 0.4, borderRadius: "50px", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <Typography sx={{ fontSize: "11px", color: "#555" }}>
                        {wine.region} · {wine.year}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography sx={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                    {wine.description}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={0.5} mt={2}>
                    <Typography sx={{ fontSize: "12px", color: "#333", letterSpacing: "0.5px" }}>
                      Подробнее →
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box sx={{ textAlign: "center", py: 8, px: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Typography sx={{ fontSize: "13px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase", mb: 2 }}>
          Нужна помощь с выбором?
        </Typography>
        <Typography sx={{ fontSize: { xs: "24px", md: "36px" }, fontFamily: "'Georgia', serif", color: "#fff", mb: 2 }}>
          Наш сомелье всегда рядом
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "15px" }}>
          Спросите официанта — мы подберём идеальное вино к вашему блюду 🍷
        </Typography>
      </Box>
    </Box>
  );
};

export default WinePage;