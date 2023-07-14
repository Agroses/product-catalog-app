import { Box,TextField,Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

export const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  minHeight: '100vh',
}));

export const ProductContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  
}));

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f2f2f2',
}));

export const ProductTitle = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const ProductPrice = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const ProductDescription = styled(Typography)({
  fontSize: '0.9rem',
  marginBottom: '1rem',
});



export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

export const PageButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  color: '#333333',
}));

export const SearchBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  marginRight: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#666666',
    },
    '&:hover fieldset': {
      borderColor: '#888888',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#888888',
    },
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0070f3',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#0053b3',
  },
}));
