import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Button, 
  Box, 
  TextField,
  Card,
  CardMedia,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

// Custom styled Calendar
const StyledCalendar = styled(Calendar)(({ theme }) => ({
  '&.react-calendar': {
    width: '100%',
    maxWidth: '100%',
    background: 'white',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1.125,
    padding: theme.spacing(2),
    '& .react-calendar__navigation': {
      marginBottom: theme.spacing(2),
      '& button': {
        color: theme.palette.primary.main,
        minWidth: 44,
        background: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        padding: theme.spacing(1),
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          color: 'white',
          borderRadius: theme.shape.borderRadius
        },
        '&:disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    '& .react-calendar__month-view__weekdays': {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.8em',
      '& abbr': {
        textDecoration: 'none'
      }
    },
    '& .react-calendar__tile': {
      padding: theme.spacing(1),
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        borderRadius: theme.shape.borderRadius
      },
      '&:disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&--active': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      }
    },
    '& .react-calendar__tile--now': {
      backgroundColor: theme.palette.secondary.light,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  }
}));

// Time slots
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const attendants = [
  { id: 1, name: 'Jawed Habib', specialty: 'Hair Stylist', image: 'https://www.adgully.com/img/800/54778_jawed-habib-jhhb.jpg' },
  { id: 2, name: 'Aalim Hakim', specialty: 'Color Specialist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qO9m_e6C4CjTjVVLWPyFCcW56LHXvgKsKw&s' },
  { id: 3, name: 'Frédéric Fekkai', specialty: 'Makeup Artist', image: 'https://cew.org/wp-content/uploads/2020/05/Frederic-Fekkai-Headshot-scaled.jpg' },
  { id: 4, name: 'David KimKen Pavés', specialty: 'Nail Technician', image: 'https://b3504934.smushcdn.com/3504934/wp-content/uploads/2022/12/KenPaves-1-640x800.jpg?lossy=2&strip=1&webp=1' },
  { id: 5, name: 'Brant Mayfield', specialty: 'Facial Expert', image: 'https://images.squarespace-cdn.com/content/v1/66ea059fb0668648ea57a47b/3e07e9c8-22a1-4979-af95-b89eee9eed56/241106-CMS-Brant+Mayfield-Portraits-0015-Edit-1920-Tiny.jpg?format=2500w' },
];

// Services
const services = [
  { id: 1, name: 'Haircut', duration: '45 min', price: '$45' },
  { id: 2, name: 'Hair Coloring', duration: '120 min', price: '$120' },
  { id: 3, name: 'Manicure', duration: '30 min', price: '$35' },
  { id: 4, name: 'Pedicure', duration: '45 min', price: '$45' },
  { id: 5, name: 'Facial', duration: '60 min', price: '$80' }
];

const BookAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [attendant, setAttendant] = useState('');
  const [service, setService] = useState('');
  const [step, setStep] = useState(1);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAttendantChange = (event) => {
    setAttendant(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedService = services.find(s => s.id === service);
    const selectedAttendant = attendants.find(a => a.id === attendant);
    alert(`Appointment booked for ${date.toDateString()} at ${time} with ${selectedAttendant.name} for ${selectedService.name}`);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            align="center"
            sx={{
              fontWeight: 'bold',
              color: '#3a1c71',
              mb: 4
            }}
          >
            Book Your Salon Experience
          </Typography>
          
          <Divider sx={{ mb: 4 }}>
            <Chip 
              label={`Step ${step} of 3`} 
              color="primary" 
              sx={{ fontWeight: 'bold' }}
            />
          </Divider>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#3a1c71' }}>
                      <EventAvailableIcon sx={{ mr: 1 }} /> Select Date
                    </Typography>
                    <StyledCalendar 
                      onChange={handleDateChange} 
                      value={date} 
                      minDate={new Date()}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                      alt="Salon interior"
                      sx={{ objectFit: 'cover' }}
                    />
                    <Box sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom color="primary">
                        Why Choose Us?
                      </Typography>
                      <Typography paragraph>
                        Our salon offers a premium experience with skilled professionals and relaxing atmosphere. We use only the finest products to ensure your satisfaction.
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip label="Premium Service" color="primary" size="small" />
                        <Chip label="Expert Staff" color="secondary" size="small" />
                        <Chip label="Quality Products" color="success" size="small" />
                      </Box>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleNextStep}
                    disabled={!date}
                    sx={{ px: 4, py: 1, borderRadius: 2 }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            )}

            {step === 2 && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#3a1c71' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} /> Select Time
                    </Typography>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                      <Grid container spacing={2}>
                        {timeSlots.map((slot, index) => (
                          <Grid item xs={4} key={index}>
                            <Button
                              variant={time === slot ? "contained" : "outlined"}
                              color="primary"
                              fullWidth
                              onClick={() => setTime(slot)}
                              sx={{ 
                                borderRadius: 2,
                                py: 1
                              }}
                            >
                              {slot}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#3a1c71' }}>
                      <PersonIcon sx={{ mr: 1 }} /> Select Service
                    </Typography>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                      <Grid container spacing={2}>
                        {services.map((svc) => (
                          <Grid item xs={12} sm={6} key={svc.id}>
                            <Button
                              variant={service === svc.id ? "contained" : "outlined"}
                              color="secondary"
                              fullWidth
                              onClick={() => setService(svc.id)}
                              sx={{ 
                                borderRadius: 2,
                                py: 1.5,
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                                height: '100%'
                              }}
                            >
                              <Box>
                                <Typography variant="subtitle1">{svc.name}</Typography>
                                <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                                  {svc.duration} • {svc.price}
                                </Typography>
                              </Box>
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handlePreviousStep}
                    sx={{ px: 4, py: 1, borderRadius: 2 }}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleNextStep}
                    disabled={!time || !service}
                    sx={{ px: 4, py: 1, borderRadius: 2 }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            )}

            {step === 3 && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#3a1c71' }}>
                      <PersonIcon sx={{ mr: 1 }} /> Select Attendant
                    </Typography>
                    <Grid container spacing={2}>
                      {attendants.map((att) => (
                        <Grid item xs={12} key={att.id}>
                          <Paper 
                            elevation={attendant === att.id ? 4 : 1} 
                            sx={{ 
                              p: 2, 
                              borderRadius: 2, 
                              cursor: 'pointer',
                              border: attendant === att.id ? '2px solid' : 'none',
                              borderColor: 'primary.main',
                              '&:hover': {
                                boxShadow: 4
                              }
                            }}
                            onClick={() => setAttendant(att.id)}
                          >
                            <Grid container spacing={2} alignItems="center">
                              <Grid item>
                                <Box 
                                  component="img" 
                                  src={att.image} 
                                  alt={att.name}
                                  sx={{ 
                                    width: 50, 
                                    height: 50, 
                                    borderRadius: '50%',
                                    border: '2px solid',
                                    borderColor: 'primary.main'
                                  }}
                                />
                              </Grid>
                              <Grid item xs>
                                <Typography variant="subtitle1" fontWeight="bold">{att.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{att.specialty}</Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 3 }}>
                      Appointment Summary
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary">Date</Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {date.toDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary">Time</Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {time || 'Not selected'}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary">Service</Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {service ? services.find(s => s.id === service).name : 'Not selected'}
                      </Typography>
                      {service && (
                        <Typography variant="body2" color="text.secondary">
                          {services.find(s => s.id === service).duration} • {services.find(s => s.id === service).price}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary">Attendant</Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {attendant ? attendants.find(a => a.id === attendant).name : 'Not selected'}
                      </Typography>
                      {attendant && (
                        <Typography variant="body2" color="text.secondary">
                          {attendants.find(a => a.id === attendant).specialty}
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handlePreviousStep}
                    sx={{ px: 4, py: 1, borderRadius: 2 }}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    disabled={!attendant}
                    sx={{ 
                      px: 4, 
                      py: 1, 
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
                      '&:hover': {
                        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    Book Appointment
                  </Button>
                </Grid>
              </Grid>
            )}
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default BookAppointment;