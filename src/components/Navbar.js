import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Parlour Booking System
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/book-appointment">
          Book Appointment
        </Button>
        <Button color="inherit" component={Link} to="/cancel-appointment">
          Cancel Appointment
        </Button>
        <Button color="inherit" component={Link} to="/special-offers"> {/* Add Special Offers link */}
          Special Offers
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
