import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import { Button } from '@mui/material';

interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}
export const ProductCardContainer = styled(Grid)(({ theme }) => ({
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
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
  maxWidth: '225px',
  
  '&:hover': {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 90 )',
    transform: 'translateY(-4px)',
  },
}));

const ProductImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
});

const ProductDescription = styled(Typography)({
  fontSize: '0.9rem',
  marginBottom: '1rem',
});

const ProductTitle = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const ProductDetailsContainer = styled(Box)({
  padding: '0.5rem',
});

const ProductPrice = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
});

export interface ProductCardProps {
  product: Product;
  onProductDetail: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductDetail }) => {
  const handleProductDetail = () => {
    onProductDetail(product._id);
  };

  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetailsContainer>
        <ProductTitle variant="h5"></ProductTitle>
        <ProductPrice variant="body1"></ProductPrice>
        <ProductDescription variant="body2"></ProductDescription>
        <Button
        variant="contained"
        onClick={() => handleProductDetail()}
        component={Link}
        href={`/products/${product._id}`}
        passHref
        >
        Details
        </Button>
      </ProductDetailsContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
