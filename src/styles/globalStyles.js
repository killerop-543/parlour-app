import { createTheme } from '@mui/material/styles';

// Salon-themed color palette
export const theme = createTheme({
  palette: {
    primary: {
      main: '#8e24aa', // Purple - elegant and spa-like
      light: '#c158dc',
      dark: '#5c007a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00bcd4', // Teal - fresh and clean
      light: '#62efff',
      dark: '#008ba3',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f5fd',
      paper: '#ffffff',
    },
    text: {
      primary: '#3c3c3c',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #8e24aa 30%, #c158dc 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #62efff 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 24px rgba(142, 36, 170, 0.12)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(142, 36, 170, 0.18)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #8e24aa 0%, #c158dc 100%)',
          boxShadow: '0 4px 20px rgba(142, 36, 170, 0.25)',
        },
      },
    },
  },
});

// Custom styles for components not directly styled by Material UI
export const customStyles = {
  pageContainer: {
    padding: '30px',
    maxWidth: '1200px',
    margin: '20px auto',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #8e24aa 30%, #c158dc 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
  },
  calendarWrapper: {
    margin: '20px 0',
    '& .react-calendar': {
      border: 'none',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      fontFamily: '"Poppins", sans-serif',
      width: '100%',
      maxWidth: '500px',
    },
    '& .react-calendar__tile--active': {
      background: '#8e24aa',
      borderRadius: '8px',
    },
    '& .react-calendar__tile--now': {
      background: '#f0e6f5',
      borderRadius: '8px',
    },
    '& .react-calendar__navigation button': {
      borderRadius: '8px',
    },
    '& .react-calendar__tile:hover': {
      background: '#e1bee7',
      borderRadius: '8px',
    },
  },
  appointmentCard: {
    margin: '16px 0',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    background: 'white',
    transition: 'all 0.3s ease',
    border: '1px solid #f0e6f5',
    '&:hover': {
      boxShadow: '0 8px 24px rgba(142, 36, 170, 0.18)',
      transform: 'translateY(-2px)',
    },
  },
  backgroundImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    zIndex: -1,
  },
};