import connectToDatabase from '../../../db';
import {
  ProductDetailContainer,
  ProductDetailCard,
  ProductImage,
  ShadowBox
} from '../../../src/styles/ProductDetailStyles';
import { NextPage ,GetServerSideProps} from 'next';
import { ObjectId } from 'mongodb';
import { CardContent, Typography } from '@mui/material';

  
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



export const getServerSideProps: GetServerSideProps<ProductDetailProps> = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const db = await connectToDatabase();
    const productsCollection = db.collection('products');
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: {
          _id: product._id.toString(),
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
        },
      },
    };
    
  } catch (error) {
    console.error('Error retrieving product:', error);
    return {
      notFound: true,
    };
  }
};

