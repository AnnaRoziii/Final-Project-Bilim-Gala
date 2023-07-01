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
        padding: "50px 50px 20px 0px",
          position: 'relative',
        }}
      >
        <Stack flexDirection={"row"} justifyContent="space-between" >
            <Box>
              <Logo/>
            </Box>   
                <Box sx={{
                  display: "flex" ,
                  justifyContent: "space-between",
                  width: "20%",
                  margin: "30px 0 30px 0"
                }}>
                <Facebook/>
                <Instagram/>
                <Twitter />
                <LinkedIn/>
                </Box>
            </Stack>
        <Box
          sx={{
            bottom: 0,        
          textAlign: "center",
            width: '100%',
          }}
        > 
        <Typography variant="h6">Контакты: bilimgala@gmail.com | +99368932514</Typography>
          <Typography variant="body2">
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
