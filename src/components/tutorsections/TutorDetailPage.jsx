import React from 'react';
import { useLocation } from 'react-router-dom';

const TutorDetailPage = () => {
  const location = useLocation();
  const tutor = location.state?.tutor;
  if (!tutor) {
    return <div>Tutor not found.</div>;
  }
  return (
    <div>
      <h2>{tutor.name}</h2>
      <h4>{tutor.jobTitle}</h4>
    </div>
  );
};

export default TutorDetailPage;


