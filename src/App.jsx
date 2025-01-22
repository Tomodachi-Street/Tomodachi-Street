import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ContestsPage from './pages/ContestsPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <Header /> {/* Ensure Header is outside Routes so it appears on all pages */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/contests" element={<ContestsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  </Router>
);

export default App;