import { styled } from '@mui/system';
import { Box, Container, Grid } from '@mui/material';

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}));

export const ProductContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));

export const ProductCard = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(1),
  margin: '1rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 20)',
  transition: 'box-shadow 0.3s ease',
  maxWidth: '300px',

  '&:hover': {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 20 )', 
    transform: 'translateY(-4px)', 
  },
}));

export const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#708090', 
  minHeight: '100vh',
}));

export const PriceBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(1),
  textAlign: 'center',
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(0.5),
}));


export default LoginContainer