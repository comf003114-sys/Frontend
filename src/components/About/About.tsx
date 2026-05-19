import { Box, Typography } from "@mui/material";

const stats = [
  { value: "9+", label: "лет опыта" },
  { value: "50+", label: "блюд в меню" },
  { value: "10k+", label: "довольных гостей" },
  { value: "100%", label: "натуральные продукты" },
];

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#1E1E20",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,35,49,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 12 },
          flexWrap: "wrap",
          px: { xs: 4, md: 12 },
          py: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: "380px" }}>
          <Typography
            sx={{
              fontSize: "11px",
              letterSpacing: "5px",
              color: "#E8C87A",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            О нас
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "64px" },
              fontFamily: "'Georgia', serif",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Georgian
            <br />
            <Box
              component="span"
              sx={{
                color: "#8B2331",
                fontStyle: "italic",
              }}
            >
              kitchen
            </Box>
            <br />
            nearby
          </Typography>

          <Box
            sx={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #8B2331, transparent)",
              borderRadius: "2px",
              mt: 3,
            }}
          />
        </Box>

        <Box sx={{ maxWidth: "480px" }}>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#777",
              lineHeight: 2,
              mb: 4,
            }}
          >
            Уникальная возможность насладиться настоящей грузинской кухней в
            сердце города. От многослойного хачапури до ароматных хинкали —
            каждое блюдо отражает вековые традиции и гостеприимство страны.
          </Typography>

          <Box
            sx={{
              borderLeft: "3px solid #8B2331",
              pl: 3,
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: "#555",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              «Грузинский стол — это не просто еда, это праздник жизни,
              где каждый гость становится частью семьи»
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              color: "#E8C87A",
              fontSize: "14px",
              letterSpacing: "1px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "gap 0.3s",
              "&:hover": { gap: 2.5 },
            }}
          >
            Узнать больше →
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((stat, i) => (
          <Box
            key={stat.label}
            sx={{
              flex: "1 1 200px",
              textAlign: "center",
              py: { xs: 5, md: 7 },
              px: 4,
              borderRight:
                i < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
              position: "relative",
              transition: "background 0.3s",
              "&:hover": {
                background: "rgba(139,35,49,0.05)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "1px",
                height: "0px",
                backgroundColor: "#8B2331",
                transition: "height 0.4s",
              },
              "&:hover::before": {
                height: "40px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "44px", md: "60px" },
                fontWeight: 700,
                fontFamily: "'Georgia', serif",
                color: "#E8C87A",
                lineHeight: 1,
                mb: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#444",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;