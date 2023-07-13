import { NextPage } from 'next';
import { styled } from '@mui/system';
import { Typography, Card, Box } from '@mui/material';
import {
  ProductDetailContainer,
  ProductDetailCard,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  ProductDescription,
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
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfoContainer>
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{product.name}</p>
          <ProductName className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {product.name}
          </ProductName>
          <ProductPrice>
            <Box border="1px solid #ccc" p={2} display="inline-block">
              price: ${product.price}
            </Box>
          </ProductPrice>
          <ProductDescription>
            <Box border="1px solid #ccc" p={2}>Description: {product.description}</Box>
          </ProductDescription>
        </ProductInfoContainer>
      </ProductDetailCard>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;
