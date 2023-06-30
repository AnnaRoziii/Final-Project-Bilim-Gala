import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const TutorCard = ({ tutor }) => {
  const handleRatingChange = (newValue) => {
    console.log(`New rating for ${tutor.name}: ${newValue}`);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: '16px' }}>
      <CardMedia component="img" height="140" image={tutor.image} alt={tutor.name} />
      <CardContent sx={{bgcolor: "custom1.main"}}>
        <Typography variant="h5" color="primary.main">
          {tutor.name}
        </Typography>
        <Typography variant="subtitle1"color="primary.main">
          {tutor.jobTitle}
        </Typography>
        <Typography variant="body2" color="primary.main">{tutor.description}</Typography>
        <Rating name={`rating-${tutor.id}`} value={tutor.rating} precision={0.5} onChange={handleRatingChange} />
      </CardContent>
      <CardActions sx={{bgcolor: "primary.main"}}  >
        <Link to={`/tutors/${tutor.id}`} state={{ tutor }}>
          <Button size="small"  sx={{color: "custom1.main"}}>Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TutorCard;






