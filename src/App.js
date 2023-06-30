import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { appTheme } from "./themes/theme"; 
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TutorsPage from './pages/TutorsPage';
import ClubsPage from './pages/ClubsPage';
import InterviewPage from './pages/InterviewPage';
import TutorDetailPage from './components/tutorsections/TutorDetailPage'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/tutors" element={<TutorsPage />} />
          <Route path="/tutors/:id" element={<TutorDetailPage />} />
        </Route>
         <Route path="/clubs" element={<ClubsPage />}/>
        <Route path="/interviews" element={<InterviewPage/>}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
//     <ThemeProvider theme= {appTheme} >
// <CssBaseline enableColorScheme/>
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<MainLayout />}>
//       <Route index element={<HomePage />}/>
//       <Route path="/news" element={<NewsPage/>}/>
//       <Route path="/tutors" element={<TutorsPage />}>
//               <Route path=":tutorId" element={<TutorDetailPage />} />
//       </Route>
//       <Route path="/clubs" element={<ClubsPage />}/>
//       <Route path="/interviews" element={<InterviewPage/>}/>
//     </Route>
//   </Routes>
// </BrowserRouter>
// </ThemeProvider>
  );
};

export default App;









