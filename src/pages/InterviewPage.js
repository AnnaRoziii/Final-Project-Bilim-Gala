import React from 'react';
import ClubsHero from "../components/swiperHero/SwiperHero"

import DigiImage from '../public/swipe1.jpg';
import StudyClubImage from '../public/swipe2.jpg';
import HeroImage from '../public/swipe3.jpg';

const InterviewPage = () => {
  const slides = [
    {
      backgroundImage: DigiImage,
      title: 'Welcome to our Interview Page!',
      description: 'Here, you can find a collection of interviews with successful students that can truly inspire you. These interviews provide a unique opportunity to gain valuable insights and motivation from individuals who have achieved remarkable accomplishments in their academic journeys.',
    },
    {
      backgroundImage: StudyClubImage,
      title: 'Gain Inspiration: ',
      description: 'Hearing about the challenges they faced, the obstacles they overcame, and the strategies they used to succeed can ignite your own motivation. It helps you believe in your own potential and empowers you to strive for excellence..',
    },
    {
      backgroundImage: HeroImage,
      title: 'Expand Your Perspectives:',
      description: 'Interviews with successful students offer a glimpse into diverse experiences and backgrounds. You will discover different paths to success, varied approaches to learning, and a range of interests and passions. This exposure broadens your horizons and encourages you to explore new possibilities.',
    },
  ];
  return (
  <>
  <ClubsHero slides={slides} />
  </>
  );
};

export default InterviewPage;