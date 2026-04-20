import { Box, Typography } from "@mui/material";

const Schedule = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} textAlign={"right"}>
      <Typography variant="h6" color={"#FFFFFF"} mb={2}>
        Work time
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
        Monday - friday: 08:00 - 23:00
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
        Saturday: 10:00 - 22:00
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
        Sunday: 10:00 - 20:00
      </Typography>
    </Box>
  );
};

export default Schedule;