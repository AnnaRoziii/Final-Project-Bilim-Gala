import React from 'react';
import ClubsHero from "../components/swiperHero/SwiperHero"

import DigiImage from '../public/swipe1.jpg';
import StudyClubImage from '../public/swipe2.jpg';
import HeroImage from '../public/swipe3.jpg';

const ClubsPage = () => {
  const slides = [
    {
      backgroundImage: DigiImage,
      title: 'Welcome to our Clubs Community!',
      description: 'Joining clubs is an incredible opportunity for both educational and personal growth. By becoming a part of our vibrant club community, you\'ll embark on a journey of discovery, collaboration, and skill-building.',
    },
    {
      backgroundImage: StudyClubImage,
      title: 'Unleash Your Potential through Club Membership',
      description: 'Joining or creating a club opens up a world of possibilities. It allows you to dive deeper into subjects that fascinate you, expand your knowledge beyond the classroom, and develop valuable skills that will benefit you in your academic and professional life. Whether you\'re interested in science, arts, technology, or any other field, our clubs offer a supportive environment where you can pursue your interests, engage in meaningful discussions, and collaborate on exciting projects.',
    },
    {
      backgroundImage: HeroImage,
      title: 'Community, Connection, and Growth',
      description: 'By joining our clubs, you\'ll not only enhance your educational experience but also foster meaningful connections and friendships. Our club community is a diverse and inclusive space where individuals from different backgrounds come together to share their unique perspectives and experiences.',
    },
  ];
  return (
  <>
  <ClubsHero slides={slides} />
  </>
  );
};

export default ClubsPage;
