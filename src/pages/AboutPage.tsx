import { Box, Typography, Grid, Divider } from "@mui/material";

const team = [
  {
    name: "Нино Джавахишвили",
    role: "Шеф-повар",
    emoji: "👨‍🍳",
    desc: "20 лет опыта в грузинской кухне. Хранитель традиционных рецептов.",
  },
  {
    name: "Тамара Кварацхелия",
    role: "Сомелье",
    emoji: "🍷",
    desc: "Эксперт по грузинским винам. Подберёт идеальное сочетание к каждому блюду.",
  },
  {
    name: "Георгий Мчедлидзе",
    role: "Управляющий",
    emoji: "🤝",
    desc: "Создаёт атмосферу тепла и гостеприимства в каждой детали.",
  },
];

const values = [
  { icon: "🫕", title: "Традиции", text: "Рецепты, передаваемые из поколения в поколение" },
  { icon: "🌿", title: "Свежесть", text: "Только натуральные продукты от местных фермеров" },
  { icon: "❤️", title: "Душа", text: "Каждое блюдо приготовлено с любовью и заботой" },
  { icon: "🏔️", title: "Грузия", text: "Атмосфера кавказского гостеприимства" },
];

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "#1E1E20", minHeight: "100vh", color: "#fff" }}>

      {/* Hero секция */}
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
        <Typography
          sx={{
            fontSize: { xs: "48px", md: "80px" },
            lineHeight: 1,
            mb: 2,
            filter: "drop-shadow(0 0 30px rgba(180,120,60,0.4))",
          }}
        >
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

      {/* Ценности */}
      <Box sx={{ px: 4, py: 8, maxWidth: "1000px", mx: "auto" }}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 2,
            textAlign: "center",
          }}
        >
          Наши ценности
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {values.map((v) => (
            <Grid item xs={12} sm={6} key={v.title}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: 4,
                  transition: "border-color 0.3s, transform 0.3s",
                  "&:hover": {
                    borderColor: "rgba(232,200,122,0.3)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "36px", mb: 2 }}>{v.icon}</Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#E8C87A",
                    mb: 1,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {v.title}
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "15px", lineHeight: 1.7 }}>
                  {v.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mx: 4 }} />

      {/* Команда */}
      <Box sx={{ px: 4, py: 8, maxWidth: "1000px", mx: "auto" }}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "4px",
            color: "#E8C87A",
            textTransform: "uppercase",
            mb: 2,
            textAlign: "center",
          }}
        >
          Наша команда
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {team.map((member) => (
            <Grid item xs={12} md={4} key={member.name}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  p: 4,
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
                <Typography sx={{ color: "#E8C87A", fontSize: "13px", mb: 2, letterSpacing: "1px" }}>
                  {member.role}
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "14px", lineHeight: 1.7 }}>
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