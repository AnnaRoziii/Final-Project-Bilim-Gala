import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Grid} from '@mui/material';

const CustomCard = ({ items }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ width: '70%', margin: '0 auto' }}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardActionArea>
              <CardMedia component="img" height="170" image={item.image} alt={item.name} />
              <CardContent style={{ height: '80px' }}>
                <Typography gutterBottom variant="h6" >
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {item.subject} {item.date}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomCard;
