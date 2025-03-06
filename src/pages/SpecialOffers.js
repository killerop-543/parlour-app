// src/pages/SpecialOffers.js

import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles/globalStyles';

const SpecialOffers = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" sx={customStyles.gradientText}>
        Special Offers for You!
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Offer 1 */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                20% Off on Hair Treatments
              </Typography>
              <Typography variant="body2" paragraph>
                Get a 20% discount on all hair treatments this month. Don't miss out on this offer to pamper yourself with our premium hair services.
              </Typography>
              <Button variant="outlined" size="small" color="primary" component={Link} to="/book-appointment">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Offer 2 */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Free Haircut with Color Treatment
              </Typography>
              <Typography variant="body2" paragraph>
                Book a color treatment and get a free haircut. This offer is valid for a limited time only.
              </Typography>
              <Button variant="outlined" size="small" color="secondary" component={Link} to="/book-appointment">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpecialOffers;
