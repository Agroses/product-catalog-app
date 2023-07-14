import { styled } from '@mui/system';
import { Card, Box, Typography } from '@mui/material';


export const ProductDetailContainer = styled('div')({
  padding: '80px 0',
  backgroundColor: '#f7fafc',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  

});

export const ProductDetailCard = styled(Card)(({ theme }) => ({
  maxWidth: 'lg',
  margin: '0 auto',
  padding: '24px',
  backgroundColor: '#fff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 0 10px rgba(0, 0, 0, 100)',
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
  alignSelf: 'flex-start',
});

export const ProductPrice = styled(Typography)({
  fontSize: 'xl',
  fontWeight: 'bold',
  marginBottom: '1rem',
  alignSelf: 'flex-start', 
});

export const ProductDescription = styled(Typography)({
  fontSize: 'lg',
  color: '#4b5563',
  marginBottom: '1rem',
  
});

export const ShadowBox = styled(Box)(({ theme }) => ({
  fontWeight: 'bold',
  border: '1px solid #ccc',
  padding: '8px',
  borderRadius: '4px',
  marginBottom: '1rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  boxShadow: `0 0 5px rgba(0, 0, 0, 10)`,
  maxWidth: '100%', 
  wordBreak: 'break-word',
  display: 'inline-block',
  margin: theme.spacing(1),
  backgroundColor: '#f5f5f5',
}));

