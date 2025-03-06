import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import BookAppointment from './pages/BookAppointment';
import CancelAppointment from './pages/CancelAppointment';
import SpecialOffers from './pages/SpecialOffers';  // Import the SpecialOffers page
import { theme } from './styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/cancel-appointment" element={<CancelAppointment />} />
          <Route path="/special-offers" element={<SpecialOffers />} /> {/* Add the route for special offers */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
