import React from 'react';
import {Box, Typography} from "@mui/material"

const AboutUs = () => {
  return (
    <Box    
    sx= {{
      background: 'linear-gradient(to bottom, #0A0A0A, #A5C0DD, #0A0A0A)',
      width: "100%",
      padding: "100px 0 100px 0"
    }}
    >
      <Box
      sx={{
        width: {xs: "300px", sm:"400px", md: "90%" },
        backgroundColor: 'primary.main',
          m: "0 auto",
          p: "40px 30px 40px 30px",
          textAlign: "center",
          borderRadius: "50px",
      }}
      >
      <Typography variant="body1" color="secondary.main">Bilim Gala это проект созданный с целью предоставить молодежи источник информации, а также стать центром объединения для социальных инициатив и добровольчества. Bilim Gala верит в силу молодежи и стремитьсяся создать сообщество, в котором каждый может найти свое место для саморазвития и воплощения своих идей.</Typography>
    </Box>
    </Box>
  );
};

export default AboutUs;