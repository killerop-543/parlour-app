import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Divider,
  Chip,
  IconButton,
  Avatar,
  Alert
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styled components
const AppointmentCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius * 2,
  border: '1px solid',
  borderColor: theme.palette.divider,
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4]
  }
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
  padding: theme.spacing(6, 2),
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: `${theme.shape.borderRadius * 2}px ${theme.shape.borderRadius * 2}px 0 0`,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0))',
    zIndex: 1
  }
}));

const StatusChip = styled(Chip)(({ theme, status }) => ({
  borderRadius: theme.shape.borderRadius * 4,
  fontWeight: 600,
  backgroundColor: status === 'confirmed' ? '#4caf50' : 
                   status === 'pending' ? '#ff9800' : '#f44336',
  color: 'white'
}));

const IconWithText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  '& svg': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  }
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius * 4,
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CancelAppointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2025-03-10',
      formattedDate: 'March, 10 2025',
      time: '10:00 AM',
      attendant: 'Emma Thompson',
      attendantImage: '/api/placeholder/100/100',
      service: 'Haircut & Styling',
      duration: '45 min',
      price: 'Rs. 150',
      status: 'confirmed',
      bookingId: 'BK-10045'
    },
    {
      id: 2,
      date: '2025-03-12',
      formattedDate: 'March, 12 2025',
      time: '02:00 PM',
      attendant: 'Michael Chen',
      attendantImage: '/api/placeholder/100/100',
      service: 'Hair Coloring',
      duration: '120 min',
      price: 'Rs. 500',
      status: 'confirmed',
      bookingId: 'BK-10046'
    },
    {
      id: 3,
      date: '2025-03-15',
      formattedDate: 'March, 15 2025',
      time: '11:30 AM',
      attendant: 'Sofia Rodriguez',
      attendantImage: '/api/placeholder/100/100',
      service: 'Manicure & Pedicure',
      duration: '90 min',
      price: 'Rs. 400',
      status: 'pending',
      bookingId: 'BK-10047'
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCancelRequest = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCancelReason('');
  };

  const handleCancelAppointment = () => {
    // Simulating appointment cancellation
    setAppointments(appointments.filter((appointment) => appointment.id !== selectedAppointment.id));
    setOpenDialog(false);
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAppointments = appointments.filter(appointment => 
    appointment.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.attendant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.formattedDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.bookingId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderBox>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >
              Manage Your Appointments
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: '600px', mx: 'auto', mb: 2 }}>
              View and cancel your upcoming salon appointments here
            </Typography>
          </HeaderBox>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: '0 0 16px 16px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert 
                  severity="success" 
                  sx={{ mb: 3, borderRadius: 2 }}
                  onClose={() => setShowSuccess(false)}
                >
                  Your appointment has been successfully cancelled.
                </Alert>
              </motion.div>
            )}

            <Box sx={{ mb: 4 }}>
              <SearchField
                fullWidth
                placeholder="Search by service, attendant, date or booking ID"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
                sx={{ mb: 3 }}
              />
              
              <Typography variant="h6" gutterBottom>
                Your Upcoming Appointments
              </Typography>
              
              {filteredAppointments.length === 0 && (
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    py: 6, 
                    px: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    border: '1px dashed',
                    borderColor: 'divider'
                  }}
                >
                  <EventBusyIcon color="disabled" sx={{ fontSize: 60, mb: 2, opacity: 0.5 }} />
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No Appointments Found
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '400px', mx: 'auto' }}>
                    {searchQuery ? 
                      'No appointments match your search criteria. Try a different search term.' : 
                      'You don\'t have any upcoming appointments. Book a new appointment to get started.'}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 3, borderRadius: 4, px: 3 }}
                    href="/book-appointment"
                  >
                    Book New Appointment
                  </Button>
                </Box>
              )}

              {filteredAppointments.map((appointment) => (
                <motion.div
                  key={appointment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <AppointmentCard elevation={2}>
                    <Grid container>
                      <Grid item xs={12} sm={4} md={3}>
                        <Box 
                          sx={{ 
                            bgcolor: 'primary.light', 
                            height: '100%', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2,
                            color: 'white',
                            textAlign: 'center'
                          }}
                        >
                          <CalendarTodayIcon sx={{ fontSize: 32, mb: 1 }} />
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {appointment.formattedDate.split(',')[0]}
                          </Typography>
                          <Typography variant="body1">
                            {appointment.formattedDate.split(',')[1]}
                          </Typography>
                          <Chip 
                            label={appointment.time} 
                            size="small"
                            icon={<AccessTimeIcon />}
                            sx={{ 
                              mt: 1, 
                              bgcolor: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              '& .MuiChip-icon': {
                                color: 'white'
                              }
                            }} 
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={8} md={9}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                            <Typography variant="h6" component="div">
                              {appointment.service}
                            </Typography>
                            <StatusChip 
                              label={appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'} 
                              status={appointment.status}
                              size="small"
                            />
                          </Box>
                          
                          <Divider sx={{ mb: 2 }} />
                          
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <IconWithText>
                                <PersonIcon />
                                <Typography variant="body2">
                                  <strong>Attendant:</strong> {appointment.attendant}
                                </Typography>
                              </IconWithText>
                              <IconWithText>
                                <ContentCutIcon />
                                <Typography variant="body2">
                                  <strong>Duration:</strong> {appointment.duration}
                                </Typography>
                              </IconWithText>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <IconWithText>
                                <ConfirmationNumberIcon />
                                <Typography variant="body2">
                                  <strong>Booking ID:</strong> {appointment.bookingId}
                                </Typography>
                              </IconWithText>
                              <IconWithText>
                                <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                                  {appointment.price}
                                </Typography>
                              </IconWithText>
                            </Grid>
                          </Grid>
                          
                          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                              variant="outlined"
                              color="error"
                              startIcon={<HighlightOffIcon />}
                              onClick={() => handleCancelRequest(appointment)}
                              sx={{ 
                                borderRadius: 4,
                                '&:hover': {
                                  backgroundColor: 'error.light',
                                  color: 'white',
                                  borderColor: 'error.light'
                                }
                              }}
                            >
                              Cancel Appointment
                            </Button>
                          </Box>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </AppointmentCard>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
      
      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="cancel-dialog-title"
        aria-describedby="cancel-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 1
          }
        }}
      >
        <DialogTitle id="cancel-dialog-title" sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DeleteOutlineIcon color="error" sx={{ mr: 1 }} />
            <Typography variant="h6">Cancel Appointment</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="cancel-dialog-description" sx={{ mb: 2 }}>
            Are you sure you want to cancel your appointment? 
            {selectedAppointment && (
              <Box component="span" sx={{ display: 'block', mt: 1, fontWeight: 'bold' }}>
                {selectedAppointment.service} on {selectedAppointment.formattedDate} at {selectedAppointment.time}
              </Box>
            )}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reason"
            label="Reason for cancellation (optional)"
            type="text"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button 
            onClick={handleCloseDialog} 
            color="primary" 
            variant="outlined"
            sx={{ borderRadius: 4 }}
          >
            Keep Appointment
          </Button>
          <Button 
            onClick={handleCancelAppointment} 
            color="error" 
            variant="contained"
            sx={{ 
              borderRadius: 4,
              boxShadow: 2
            }}
          >
            Confirm Cancellation
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CancelAppointment;