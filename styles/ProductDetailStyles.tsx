import { styled } from '@mui/system';
import { Card, Box, Typography } from '@mui/material';

export const ProductDetailContainer = styled('div')({
  padding: '80px 0',
  backgroundColor: '#f7fafc',
});

export const ProductDetailCard = styled(Card)(({ theme }) => ({
  maxWidth: 'lg',
  margin: 'auto',
  padding: '24px',
  backgroundColor: '#fff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export const ProductImage = styled('img')({
  width: '200px',
  height: 'auto',
  marginRight: '24px',
  border: '1px solid #ccc',
  borderRadius: '4px',
});

export const ProductInfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const ProductName = styled(Typography)({
  fontSize: '2xl',
  fontWeight: 'bold',
  marginBottom: '1rem',
  alignSelf: 'flex-start', // Aligns the name to the top of the container
});

export const ProductPrice = styled(Typography)({
  fontSize: 'xl',
  fontWeight: 'bold',
  marginBottom: '1rem',
  alignSelf: 'flex-start', // Aligns the price to the right of the image
});

export const ProductDescription = styled(Typography)({
  fontSize: 'lg',
  color: '#4b5563',
  marginBottom: '1rem',
});
