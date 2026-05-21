import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const allWines = [
  {
    id: "saperavi",
    name: "Саперави",
    region: "Кахетия",
    year: 2021,
    price: 250,
    taste: "Сухое",
    category: "red",
    emoji: "🍷",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    desc: "Насыщенное, с нотами тёмных ягод и дуба. Идеально к шашлыку и мцвади.",
    fullDesc: "Саперави — один из самых известных грузинских сортов винограда с тысячелетней историей. Название переводится как «красящий», что отражает интенсивный рубиновый цвет вина. Во вкусе преобладают ноты ежевики, черешни и тёмного шоколада с лёгким оттенком дуба после выдержки.",
    alcohol: "13.5%",
    temperature: "16–18°C",
    pairing: ["Шашлык", "Мцвади", "Острые сыры", "Дичь"],
    grapes: "100% Саперави",
    aging: "12 месяцев в дубовых бочках",
  },
  {
    id: "mukuzani",
    name: "Мукузани",
    region: "Кахетия",
    year: 2020,
    price: 320,
    taste: "Сухое",
    category: "red",
    emoji: "🍷",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop",
    desc: "Бархатистое вино с терпкими танинами и длительным послевкусием.",
    fullDesc: "Мукузани — защищённое наименование происхождения, производится исключительно из винограда сорта Саперави в микрозоне Мукузани. Обязательная выдержка не менее 3 лет придаёт вину особую глубину и структуру. Тёмно-рубиновый цвет, аромат спелых ягод, ванили и табака.",
    alcohol: "13%",
    temperature: "16–18°C",
    pairing: ["Говядина", "Баранина", "Выдержанные сыры"],
    grapes: "100% Саперави",
    aging: "3 года, в том числе в дубовых бочках",
  },
  {
    id: "kindzmarauli",
    name: "Киндзмараули",
    region: "Кахетия",
    year: 2022,
    price: 290,
    taste: "Полусладкое",
    category: "red",
    emoji: "🍷",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=600&fit=crop",
    desc: "Мягкое и ароматное, с нотами вишни и малины. Прекрасно к десертам.",
    fullDesc: "Киндзмараули — натуральное полусладкое вино из микрозоны Киндзмараули в Кахетии. Производится методом прерванного брожения, что сохраняет природную сладость. Вишнёво-красный цвет, богатый аромат свежих ягод, бархатистый вкус с нотами вишни, малины и граната.",
    alcohol: "11–12%",
    temperature: "14–16°C",
    pairing: ["Десерты", "Фрукты", "Мягкие сыры", "Шоколад"],
    grapes: "100% Саперави",
    aging: "Без выдержки в бочках",
  },
  {
    id: "khvanchkara",
    name: "Хванчкара",
    region: "Рача",
    year: 2021,
    price: 380,
    taste: "Полусладкое",
    category: "red",
    emoji: "🍷",
    image: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=800&h=600&fit=crop",
    desc: "Легендарное вино с глубоким рубиновым цветом и ягодным ароматом.",
    fullDesc: "Хванчкара — одно из самых известных грузинских вин в мире, производится в регионе Рача из сортов Александроули и Муджуретули. Натуральное полусладкое вино с неповторимым ароматом малины, фиалки и розы. Говорят, это было любимое вино Сталина.",
    alcohol: "11–12%",
    temperature: "14–16°C",
    pairing: ["Торты", "Ягодные десерты", "Фуа-гра"],
    grapes: "Александроули, Муджуретули",
    aging: "Традиционный метод",
  },
  {
    id: "rkatsiteli",
    name: "Ркацители",
    region: "Кахетия",
    year: 2022,
    price: 220,
    taste: "Сухое",
    category: "white",
    emoji: "🥂",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    desc: "Свежее и минеральное, с лёгкой кислинкой. Отлично к рыбе и сырам.",
    fullDesc: "Ркацители — один из древнейших сортов винограда в мире, возраст которого насчитывает более 3000 лет. Производит элегантные белые вина с высокой кислотностью. Соломенно-жёлтый цвет, аромат зелёного яблока, лимона и белых цветов. Прекрасно сочетается с морепродуктами.",
    alcohol: "12.5%",
    temperature: "10–12°C",
    pairing: ["Рыба", "Морепродукты", "Белые сыры", "Овощи"],
    grapes: "100% Ркацители",
    aging: "Нержавеющая сталь",
  },
  {
    id: "tsinandali",
    name: "Цинандали",
    region: "Кахетия",
    year: 2021,
    price: 270,
    taste: "Сухое",
    category: "white",
    emoji: "🥂",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
    desc: "Элегантное вино с цветочными нотами и освежающей кислотностью.",
    fullDesc: "Цинандали — классическое грузинское белое вино, производимое в историческом имении Цинандали с XIX века. Купаж из сортов Ркацители и Мцване. Светло-соломенный цвет, деликатный аромат цветов, цитруса и зелёных яблок, долгое освежающее послевкусие.",
    alcohol: "12%",
    temperature: "10–12°C",
    pairing: ["Птица", "Телятина", "Паста", "Лёгкие закуски"],
    grapes: "Ркацители, Мцване",
    aging: "6 месяцев в бочках",
  },
  {
    id: "mtsvane",
    name: "Мцване",
    region: "Кахетия",
    year: 2022,
    price: 240,
    taste: "Сухое",
    category: "white",
    emoji: "🥂",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    desc: "Ароматное и фруктовое, с нотами персика и цветов акации.",
    fullDesc: "Мцване Кахури — ароматный грузинский сорт белого винограда. Производит вина с ярким фруктовым профилем и цветочными нотами. Золотисто-жёлтый цвет, богатый аромат персика, абрикоса и акации, мягкий и округлый вкус с освежающей кислотностью.",
    alcohol: "12.5%",
    temperature: "10–12°C",
    pairing: ["Пхали", "Сациви", "Рыба", "Мягкие сыры"],
    grapes: "100% Мцване",
    aging: "Нержавеющая сталь",
  },
  {
    id: "alazani",
    name: "Алазанская долина",
    region: "Кахетия",
    year: 2022,
    price: 200,
    taste: "Полусладкое",
    category: "white",
    emoji: "🥂",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=600&fit=crop",
    desc: "Нежное и мягкое, с медовыми нотами. Популярный выбор для начинающих.",
    fullDesc: "Алазанская долина — одно из самых популярных грузинских вин на международном рынке. Производится в долине реки Алазани из различных сортов. Светло-соломенный цвет, нежный аромат цветов и мёда, мягкий сладковатый вкус, идеален для тех, кто только начинает знакомство с грузинскими винами.",
    alcohol: "11%",
    temperature: "8–10°C",
    pairing: ["Фрукты", "Десерты", "Мягкие сыры"],
    grapes: "Ркацители, Мцване",
    aging: "Без выдержки",
  },
  {
    id: "rkatsiteli-qvevri",
    name: "Ркацители Квеври",
    region: "Кахетия",
    year: 2020,
    price: 420,
    taste: "Сухое",
    category: "amber",
    emoji: "🍊",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop",
    desc: "Традиционное оранжевое вино, выдержанное в глиняных кувшинах квеври.",
    fullDesc: "Квеври — это традиционный грузинский метод виноделия, внесённый в список нематериального наследия ЮНЕСКО. Вино выдерживается вместе с кожицей и косточками в зарытых в землю глиняных амфорах квеври. Янтарный цвет, сложный аромат орехов, сухофруктов и пчелиного воска, танинная структура.",
    alcohol: "13%",
    temperature: "14–16°C",
    pairing: ["Оджахури", "Жирные сыры", "Шашлык", "Паштеты"],
    grapes: "100% Ркацители",
    aging: "6 месяцев в квеври",
  },
  {
    id: "chinuri-qvevri",
    name: "Чинури Квеври",
    region: "Картли",
    year: 2021,
    price: 390,
    taste: "Сухое",
    category: "amber",
    emoji: "🍊",
    image: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=800&h=600&fit=crop",
    desc: "Янтарное вино с танинами и ароматом сухофруктов. Уникальный стиль.",
    fullDesc: "Чинури — местный грузинский сорт региона Картли. В стиле квеври приобретает насыщенный янтарный цвет и сложный характер. Аромат кураги, инжира, грецкого ореха и пряностей. Вино для ценителей натурального виноделия и нестандартных вкусов.",
    alcohol: "12.5%",
    temperature: "14–16°C",
    pairing: ["Харчо", "Острые блюда", "Выдержанные сыры"],
    grapes: "100% Чинури",
    aging: "4 месяца в квеври",
  },
  {
    id: "saperavi-rose",
    name: "Саперави Розе",
    region: "Кахетия",
    year: 2022,
    price: 260,
    taste: "Сухое",
    category: "rose",
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    desc: "Свежее розовое с ягодными нотами и приятной кислотностью.",
    fullDesc: "Розовое вино из сорта Саперави производится методом кратковременной мацерации. Нежный розово-лососёвый цвет, свежий аромат клубники, малины и розовых лепестков. Лёгкое и освежающее, с хрустящей кислотностью и чистым ягодным послевкусием.",
    alcohol: "12.5%",
    temperature: "8–10°C",
    pairing: ["Долма", "Лёгкие закуски", "Салаты", "Морепродукты"],
    grapes: "100% Саперави",
    aging: "Нержавеющая сталь",
  },
  {
    id: "shavkapito-rose",
    name: "Шавкапито Розе",
    region: "Картли",
    year: 2022,
    price: 300,
    taste: "Полусухое",
    category: "rose",
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
    desc: "Редкий сорт с нежным розовым цветом и ароматом клубники.",
    fullDesc: "Шавкапито — редкий автохтонный сорт региона Картли, находившийся под угрозой исчезновения. В розовом стиле даёт элегантное вино с нежным розовым цветом. Аромат клубники, персика и розы. Мягкий и округлый вкус с лёгкой остаточной сладостью.",
    alcohol: "12%",
    temperature: "8–10°C",
    pairing: ["Пхали", "Бадриджани", "Лёгкие десерты"],
    grapes: "100% Шавкапито",
    aging: "Нержавеющая сталь",
  },
];

const tasteColors: Record<string, string> = {
  "Сухое": "#4a7c59",
  "Полусладкое": "#8B2331",
  "Полусухое": "#6b5a2d",
};

const WineDetails = () => {
  const { id } = useParams();
  const wine = allWines.find((w) => w.id === id);

  if (!wine) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center"
        minHeight="100vh" sx={{ backgroundColor: "#1E1E20" }}>
        <Typography color="#fff" fontSize="24px">Вино не найдено 🍷</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh" }}>

      <Box sx={{ position: "relative", height: { xs: "45vh", md: "60vh" }, overflow: "hidden" }}>
        <Box
          component="img"
          src={wine.image}
          alt={wine.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(30,30,32,1) 100%)",
          }}
        />

        <Box
          component={Link}
          to="/wine"
          sx={{
            position: "absolute", top: 24, left: 32,
            display: "flex", alignItems: "center", gap: 1,
            color: "#fff", textDecoration: "none",
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50px", px: 2.5, py: 1, fontSize: "14px",
            transition: "all 0.2s",
            "&:hover": { backgroundColor: "rgba(139,35,49,0.6)", borderColor: "#8B2331" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "16px" }} />
          Винная карта
        </Box>

        <Box sx={{ position: "absolute", bottom: 32, left: { xs: 24, md: 48 } }}>
          <Box
            sx={{
              display: "inline-flex", alignItems: "center", gap: 1,
              px: 2, py: 0.5, borderRadius: "50px", mb: 2,
              backgroundColor: `${tasteColors[wine.taste]}22`,
              border: `1px solid ${tasteColors[wine.taste]}55`,
            }}
          >
            <Typography sx={{ fontSize: "11px", color: tasteColors[wine.taste], letterSpacing: "1px" }}>
              {wine.taste}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 700, color: "#fff",
              fontFamily: "'Georgia', serif", lineHeight: 1,
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            {wine.emoji} {wine.name}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", mt: 1 }}>
            {wine.region} · {wine.year}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, display: "flex", gap: 6, flexWrap: "wrap", maxWidth: "1100px", mx: "auto" }}>

        <Box sx={{ flex: 1, minWidth: "280px" }}>

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(139,35,49,0.3)",
              borderRadius: "20px", p: 4, mb: 4,
              textAlign: "center", position: "relative", overflow: "hidden",
              "&::before": {
                content: '""', position: "absolute",
                top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, transparent, #8B2331, transparent)",
              },
            }}
          >
            <Typography sx={{ fontSize: "11px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", mb: 1 }}>
              Цена за бокал
            </Typography>
            <Typography sx={{ fontSize: "52px", fontWeight: 700, color: "#E8C87A", fontFamily: "'Georgia', serif", lineHeight: 1 }}>
              {wine.price}
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "14px" }}>MDL</Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px", p: 4, mb: 4,
            }}
          >
            <Typography sx={{ fontSize: "11px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase", mb: 3 }}>
              Характеристики
            </Typography>
            {[
              { label: "Сорт винограда", value: wine.grapes },
              { label: "Регион", value: wine.region },
              { label: "Урожай", value: String(wine.year) },
              { label: "Крепость", value: wine.alcohol },
              { label: "Выдержка", value: wine.aging },
              { label: "Температура подачи", value: wine.temperature },
            ].map((item) => (
              <Box key={item.label}
                sx={{ display: "flex", justifyContent: "space-between", py: 1.5, borderBottom: "1px solid rgba(255,255,255,0.04)", "&:last-child": { borderBottom: "none" } }}
              >
                <Typography sx={{ color: "#555", fontSize: "14px" }}>{item.label}</Typography>
                <Typography sx={{ color: "#fff", fontSize: "14px", fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{item.value}</Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px", p: 4,
            }}
          >
            <Typography sx={{ fontSize: "11px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase", mb: 3 }}>
              Сочетается с
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {wine.pairing.map((p) => (
                <Box key={p}
                  sx={{
                    px: 2.5, py: 1, borderRadius: "50px",
                    backgroundColor: "rgba(139,35,49,0.08)",
                    border: "1px solid rgba(139,35,49,0.2)",
                  }}
                >
                  <Typography sx={{ fontSize: "13px", color: "#888" }}>{p}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1.4, minWidth: "280px" }}>
          <Typography sx={{ fontSize: "11px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase", mb: 2 }}>
            Описание
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontFamily: "'Georgia', serif", color: "#fff",
              fontWeight: 600, lineHeight: 1.3, mb: 4,
            }}
          >
            {wine.desc}
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "17px", lineHeight: 2, mb: 5 }}>
            {wine.fullDesc}
          </Typography>

          <Box
            sx={{
              backgroundColor: "rgba(139,35,49,0.06)",
              border: "1px solid rgba(139,35,49,0.2)",
              borderRadius: "20px", p: 4,
              display: "flex", alignItems: "center", gap: 3,
            }}
          >
            <Typography sx={{ fontSize: "48px" }}>🏔️</Typography>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 600, fontFamily: "'Georgia', serif", mb: 0.5 }}>
                Грузинское виноделие
              </Typography>
              <Typography sx={{ color: "#555", fontSize: "14px", lineHeight: 1.7 }}>
                Грузия — родина вина. Виноделие здесь насчитывает более 8000 лет истории и внесено в список наследия ЮНЕСКО.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WineDetails;