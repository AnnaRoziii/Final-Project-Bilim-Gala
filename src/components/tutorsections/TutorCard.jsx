import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const TutorCard = ({ tutor }) => {
  const handleRatingChange = (newValue) => {
    // Handle the rating change here (e.g., update the tutor's rating in the database)
    console.log(`New rating for ${tutor.name}: ${newValue}`);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: '16px' }}>
      <CardMedia component="img" height="140" image={tutor.image} alt={tutor.name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {tutor.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {tutor.jobTitle}
        </Typography>
        <Typography variant="body2">{tutor.description}</Typography>
        <Rating name={`rating-${tutor.id}`} value={tutor.rating} precision={0.5} onChange={handleRatingChange} />
      </CardContent>
      <CardActions>
        <Link to={`/tutors/${tutor.id}`} state={{ tutor }}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TutorCard;






