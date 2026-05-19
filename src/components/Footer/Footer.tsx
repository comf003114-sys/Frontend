import { Box, Typography } from "@mui/material";
import Contacts from "./Contacts/Contacts";
import Schedule from "./Schedule/Schedule";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#8b2331",
        px: { xs: 4, md: 10 },
        pt: 6,
        pb: 4,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4}
        mb={4}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Georgia', serif",
              letterSpacing: "2px",
              mb: 1,
            }}
          >
            CHACHA CLUB
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            Грузинская кухня в сердце города
          </Typography>
        </Box>

        <Contacts />
        <Schedule />
      </Box>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          pt: 3,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
          Copyright © 2024 by ChachaClub. All rights reserved.
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
          🍷 Сделано с любовью к Грузии
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;