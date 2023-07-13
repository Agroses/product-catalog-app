import { NextPage ,GetServerSideProps} from 'next';
import { ObjectId } from 'mongodb';

import { styled } from '@mui/system';

import { Box, Card, CardContent, Typography } from '@mui/material';
import {
  ProductDetailContainer,
  ProductDetailCard,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductDescription,
  ShadowBox
} from '../styles/ProductDetailStyles';

// Rest of the code...

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}


const ProductDetailPage: NextPage<ProductDetailProps> = ({ product }) => {
  return (
    <ProductDetailContainer>
      <ProductDetailCard>
      <Typography variant="h2">{product.name}</Typography>
        <ProductImage src={product.image} alt={product.name} />
        <CardContent>
          <ShadowBox>
            <Typography variant="h4" color="text.secondary">
             Price: {`$${product.price}`}
            </Typography>
          </ShadowBox>
          <ShadowBox>
            <Typography variant="body1" color="text.secondary">
             Description: {product.description}
            </Typography>
          </ShadowBox>
        </CardContent>
      </ProductDetailCard>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;
