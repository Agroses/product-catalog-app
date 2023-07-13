import { GetServerSideProps } from 'next';
import connectToDatabase from '../../../db';
import { ObjectId } from 'mongodb';
import ProductDetailPage from '../../../components/ProductDetailPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
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

