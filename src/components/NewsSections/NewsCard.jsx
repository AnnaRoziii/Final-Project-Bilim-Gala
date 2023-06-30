import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const NewsCard = ({ news }) => {
  return (
    <Card >
      <CardActionArea component={Link} to={news.link}>
        <CardMedia component="img" height="200" image={news.image} alt={news.title} />
        <CardContent sx={{bgcolor: "primary.main"}}>
          <Typography variant="h5" color="custom1.main">{news.title}</Typography>
          <Typography variant="h6" color="custom1.main">{news.text}</Typography>
          <Typography variant="h6" color="custom1.main" sx={{ marginTop: '10px' }}>
            Published: {news.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea component="a" href={news.link} target="_blank" rel="noopener noreferrer" >
        <CardContent 
        sx={{display: "flex", justifyContent: "space-between", bgcolor: "custom1.main"}}
        >
        <IconButton color="primary">
            <OpenInNewIcon />
          </IconButton>
          <IconButton color="primary">
            <ShareIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;