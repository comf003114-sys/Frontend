import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      component={"section"}
      minHeight={"220px"}
      bgcolor={"#DDDDDD"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Typography maxWidth={"300px"} fontSize={"22px"}>
        <Box
          component={"span"}
          display={"inline"}
          fontSize={"26px"}
          fontWeight={"700"}
        >
          Georgian
          <br />
        </Box>
        kitchen nearby
      </Typography>
      <Typography maxWidth={"400px"} fontSize={"18px"}>
        A unique opportunity to enjoy authentic Georgian cuisine in the heart of the city.
        From multi-layered khachapuri to aromatic khinkali.
        Each dish reflects the country's centuries-old traditions and hospitality.
      </Typography>
    </Box>
  );
};

export default About;