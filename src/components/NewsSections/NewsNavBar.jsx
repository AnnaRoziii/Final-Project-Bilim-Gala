
import React from 'react';
import { AppBar, Toolbar, Typography, Box, MenuItem, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsNavBar = () => {
  return (
    <AppBar position="static" >
      <Toolbar  sx={{padding: "20px 0 20px 0"}}>
        <Typography variant="h4" component={Link} to="/" color="#ED2B2A" sx={{ textDecoration: 'none' }}>
          Educational News
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MenuList 
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
        justifyContent: "space-between"

         }}
      >
          <MenuItem component={Link} to="/category/educational"sx={{ textDecoration: 'none',  color:"custom1.main"  }}>
            IT News
          </MenuItem>
          <MenuItem component={Link} to="/category/sports" sx={{ textDecoration: 'none',  color:"custom1.main"}}>
            Sports News
          </MenuItem>
          <MenuItem component={Link} to="/category/technology"sx={{ textDecoration: 'none',  color:"custom1.main" }}>
            Art News
          </MenuItem>
          <MenuItem component={Link} to="/category/sports" sx={{ textDecoration: 'none',  color:"custom1.main" }}>
            Secondary education
          </MenuItem>
          <MenuItem component={Link} to="/category/technology" sx={{ textDecoration: 'none',  color:"custom1.main"  }}>
            Bachelor's
          </MenuItem>
        </MenuList>
      </Toolbar>
    </AppBar>
  );
};

export default NewsNavBar;







