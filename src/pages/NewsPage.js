import React from 'react';
import { Box, Container, Grid, Typography, Pagination, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NewsCard from '../components/NewsSections/NewsCard';

const NewsPage = () => {
  const latestNews = [
    {
            id: 1,
            title: 'News Title 1',
            image: require('../public/Digi.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 2',
            image: require('../public/P4S.png'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
          {
            id: 1,
            title: 'News Title 3',
            image: require('../public/volunteering.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 4',
            image: require('../public/Digi.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
          {
            id: 1,
            title: 'News Title 5',
            image: require('../public/tutor3.jfif'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 6',
            image: require('../public/volunteering.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
          {
            id: 1,
            title: 'News Title 7',
            image: require('../public/Digi.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 8',
            image: require('../public/image1.png'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
          {
            id: 1,
            title: 'News Title 9',
            image: require('../public/art-club.png'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 10',
            image: require('../public/Digi.jpg'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
          {
            id: 1,
            title: 'News Title 11',
            image: require('../public/study-club.jfif'),
            text: 'News description or summary goes here.',
            date: 'June 25, 2023',
            link: '/news/1',
          },
          {
            id: 2,
            title: 'News Title 12',
            image: require('../public/tutor5.jfif'),
            text: 'News description or summary goes here.',
            date: 'June 24, 2023',
            link: '/news/2',
          },
        ];

  return (
    <Box sx={{ padding: '0 0 50px 0' }}>
      <Container sx={{ marginTop: '40px' }}>
        <Typography variant="h4" gutterBottom>
          Latest News
        </Typography>
        <Box display="flex" alignItems="center" mb={3}>
          <SearchIcon />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search news..."
            sx={{ marginLeft: '8px' }}
          />
        </Box>
        <Grid container spacing={4}>
          {latestNews.map((news) => (
            <Grid item key={news.id} xs={12} sm={6} md={3}>
              <NewsCard news={news} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box display="flex" justifyContent="center" mt={10}>
        <Pagination count={100} page={1} />
      </Box>
    </Box>
  );
};

export default NewsPage;


