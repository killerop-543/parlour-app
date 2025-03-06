import React from 'react';
import { Box, Button, Typography, Card, CardContent, Grid, Avatar, Divider, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles/globalStyles';

const Profile = () => {
  // Simulate user data
  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "January 2023",
    upcomingAppointments: 2,
    completedAppointments: 8
  };

  return (
    <>
      {/* Background image */}
      <Box 
        sx={customStyles.backgroundImage} 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")' }}
      />
      
      <Box sx={customStyles.pageContainer}>
        <Grid container spacing={4}>
          {/* Profile Information */}
          <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mb: 3,
                    boxShadow: '0 8px 20px rgba(142, 36, 170, 0.25)',
                    border: '4px solid white'
                  }}
                >
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                
                <Typography variant="h4" gutterBottom align="center">
                  Welcome, {userData.name}
                </Typography>
                
                <Divider sx={{ width: '80%', my: 2 }} />
                
                <Box sx={{ width: '100%', mt: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                    {userData.email}
                  </Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
                    {userData.phone}
                  </Typography>
                  
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Member Since
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {userData.memberSince}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Dashboard and Actions */}
          <Grid item xs={12} md={8}>
            <Card elevation={0} sx={{ mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={customStyles.gradientText}>
                  Your Salon Dashboard
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Paper 
                      elevation={0} 
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'rgba(142, 36, 170, 0.05)',
                        borderRadius: 4,
                        border: '1px solid rgba(142, 36, 170, 0.1)'
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                        {userData.upcomingAppointments}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Upcoming Appointments
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper 
                      elevation={0} 
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'rgba(0, 188, 212, 0.05)',
                        borderRadius: 4,
                        border: '1px solid rgba(0, 188, 212, 0.1)'
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        {userData.completedAppointments}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Completed Visits
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                
                <Typography variant="body1" sx={{ mt: 4, mb: 1 }}>
                  Ready to pamper yourself with our premium salon services?
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 3 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    component={Link} 
                    to="/book-appointment"
                    size="large"
                  >
                    Book New Appointment
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    fullWidth 
                    component={Link} 
                    to="/cancel-appointment"
                    size="large"
                  >
                    Manage Appointments
                  </Button>
                </Box>
              </CardContent>
            </Card>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                      Special Offers
                    </Typography>
                    <Typography variant="body2" paragraph>
                      Enjoy 20% off on all hair treatments this month.
                    </Typography>
                    {/* Update View Offers button to redirect to the Special Offers page */}
                    <Button 
                      variant="outlined" 
                      size="small" 
                      color="primary" 
                      component={Link} 
                      to="/special-offers" 
                    >
                      View Offers
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main' }}>
                      Loyalty Program
                    </Typography>
                    <Typography variant="body2" paragraph>
                      You're 2 visits away from a free premium service!
                    </Typography>
                    <Button variant="outlined" size="small" color="secondary">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Additional Link to Special Offers at the bottom */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                component={Link} 
                to="/special-offers"
              >
                Explore Special Offers
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
