import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

import Logo from "./common/Logo";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'custom.main',
        padding: "50px 0 50px 0",
          position: 'relative',
        }}
      >
        <Stack flexDirection={"row"} justifyContent="space-between" >
            <Box>
              <Logo/>
            </Box>
            <Box>
              <Typography variant="h6">Контакты: bilimgala@gmail.com | +99368932514</Typography>
              <Typography variant="body2">
                <Box sx={{
                  display: "flex" ,
                  justifyContent: "space-between",
                  width: "30%",
                  margin: "30px 0 30px 0"
                }}>
                <Facebook/>
                <Instagram/>
                <Twitter />
                <LinkedIn/>
                </Box>
              </Typography>
            </Box>
            </Stack>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;






// export default Footer;// import React from 'react';
// import { Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
//       <Typography variant="body2" color="textSecondary">
//         Контакты: bilimgala@gmail.com | +993777777
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         Социальные сети: [Facebook] [Instagram] [Twitter]
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         <a href="/privacy-policy">Политика конфиденциальности</a> | © 2023 Ваш проект. Все права защищены.
//       </Typography>
//     </footer>
//   );
// };

// export default Footer;
