import { Box, Typography, Grid, Divider } from "@mui/material";

const team = [
  {
    name: "Нино Джавахишвили",
    role: "Шеф-повар",
    emoji: "👨‍🍳",
    desc: "20 лет опыта в грузинской кухне. Хранитель традиционных рецептов и секретов настоящего хинкали.",
  },
  {
    name: "Тамара Кварацхелия",
    role: "Сомелье",
    emoji: "🍷",
    desc: "Эксперт по грузинским винам. Подберёт идеальное сочетание к каждому блюду вашего вечера.",
  },
  {
    name: "Георгий Мчедлидзе",
    role: "Управляющий",
    emoji: "🤝",
    desc: "Создаёт атмосферу тепла и гостеприимства в каждой детали — от стола до улыбки.",
  },
  {
    name: "Ани Беридзе",
    role: "Кондитер",
    emoji: "🍯",
    desc: "Мастер грузинских сладостей: чурчхела, пахлава и домашние десерты по семейным рецептам.",
  },
  {
    name: "Давид Элиава",
    role: "Су-шеф",
    emoji: "🔥",
    desc: "Правая рука шефа. Отвечает за свежесть ингредиентов и точность каждого приготовленного блюда.",
  },
  {
    name: "Саломе Гогия",
    role: "Администратор",
    emoji: "🌸",
    desc: "Встречает гостей с улыбкой и следит за тем, чтобы каждый визит стал незабываемым.",
  },
];

const values = [
  {
    icon: "🫕",
    title: "Традиции",
    text: "Рецепты, передаваемые из поколения в поколение. Мы бережно сохраняем каждый секрет грузинской кухни, чтобы вы ощутили её настоящий вкус.",
  },
  {
    icon: "🌿",
    title: "Свежесть",
    text: "Только натуральные продукты от местных фермеров. Мы закупаем ингредиенты каждое утро, чтобы каждое блюдо было максимально свежим и полезным.",
  },
  {
    icon: "❤️",
    title: "Душа",
    text: "Каждое блюдо приготовлено с любовью и заботой. Мы верим, что еда — это не просто питание, а способ передать тепло и внимание каждому гостю.",
  },
  {
    icon: "🏔️",
    title: "Грузия",
    text: "Атмосфера настоящего кавказского гостеприимства. Здесь вы почувствуете дух Тбилиси — шумного, тёплого и всегда рады гостям.",
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh", color: "#fff" }}>

      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(180,120,60,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Typography sx={{ fontSize: { xs: "48px", md: "80px" }, lineHeight: 1, mb: 2 }}>
          🍽️
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "64px" },
            fontFamily: "'Georgia', serif",
            fontWeight: 700,
            color: "#E8C87A",
            letterSpacing: "-1px",
            mb: 2,
          }}
        >
          О нас
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            color: "#aaa",
            maxWidth: "560px",
            lineHeight: 1.7,
          }}
        >
          Мы — маленький ресторан с большой душой. Здесь живёт настоящая
          грузинская кухня — такая, какой её готовят дома, с любовью и по
          старинным рецептам.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mx: 4 }} />

      {/* История */}
      <Box sx={{ maxWidth: "860px", mx: "auto", px: 4, py: 8 }}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Наша история
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            fontFamily: "'Georgia', serif",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.4,
            mb: 3,
          }}
        >
          Основан в 2015 году семьёй из Тбилиси
        </Typography>
        <Typography sx={{ color: "#999", fontSize: "17px", lineHeight: 1.9, mb: 3 }}>
          Всё началось с маленькой кухни и огромного желания поделиться вкусами
          родины. Семья Джавахишвили привезла с собой не просто рецепты — они
          привезли традиции, истории и тепло грузинского застолья.
        </Typography>
        <Typography sx={{ color: "#999", fontSize: "17px", lineHeight: 1.9 }}>
          Сегодня наш ресторан — это место, где время замедляется. Где хинкали
          лепят вручную каждое утро, а хачапури готовят в дровяной печи. Мы
          верим: настоящая еда объединяет людей.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mx: 4 }} />

      {/* Ценности — выровненные 2x2 */}
      <Box sx={{ px: 4, py: 8, maxWidth: "1000px", mx: "auto", width: "100%" }}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 4,
            textAlign: "center",
          }}
        >
          Наши ценности
        </Typography>
        <Grid container spacing={3}>
          {values.map((v) => (
            <Grid item xs={12} sm={6} key={v.title}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: 4,
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "border-color 0.3s, transform 0.3s",
                  "&:hover": {
                    borderColor: "rgba(232,200,122,0.3)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "40px", mb: 2 }}>{v.icon}</Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#E8C87A",
                    mb: 1.5,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "15px", lineHeight: 1.8 }}>
                  {v.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mx: 4 }} />

      {/* Команда — 3 колонки, 2 ряда */}
      <Box sx={{ px: 4, py: 8, maxWidth: "1100px", mx: "auto", width: "100%" }}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 4,
            textAlign: "center",
          }}
        >
          Наша команда
        </Typography>
        <Grid container spacing={3}>
          {team.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: 4,
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "border-color 0.3s, transform 0.3s",
                  "&:hover": {
                    borderColor: "rgba(232,200,122,0.3)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "48px", mb: 2 }}>{member.emoji}</Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "'Georgia', serif",
                    mb: 0.5,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#E8C87A",
                    fontSize: "13px",
                    mb: 2,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "14px", lineHeight: 1.8 }}>
                  {member.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Нижний баннер */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          px: 4,
          background: "linear-gradient(180deg, transparent, rgba(180,120,60,0.08))",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "42px" },
            fontFamily: "'Georgia', serif",
            color: "#fff",
            mb: 2,
          }}
        >
          Ждём вас за нашим столом
        </Typography>
        <Typography sx={{ color: "#888", fontSize: "16px" }}>
          📍 ул. Пушкина, 12 &nbsp;·&nbsp; ☎️ +373 22 123 456 &nbsp;·&nbsp; 🕐 Пн–Вс, 11:00–23:00
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;