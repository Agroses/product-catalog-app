import { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import connectToDatabase from '../../db';
import { Typography, Grid } from '@mui/material';
import {
  PageContainer,
  ProductContainer,
  PaginationContainer,
  PageButton,
  PageTitle,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  LoginContainer,
} from '../../src/styles/ProductsPagestyles';
import LoginForm from '../../src/components/LoginForm';
import ProductCard from '../../src/components/ProductContainer';
import { useRouter } from 'next/router';
import {Product, Props} from '../../src/interface/Product'


const IndexPage: NextPage<Props> = ({ products }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const router = useRouter(); 

  const handleLogin = (username: string, password: string) => {
    setIsLoggedIn(true);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = products.filter((product) => {
      const { name, id } = product;
      return (
        name.toLowerCase().includes(lowerCaseQuery) ||
        String(id).toLowerCase() === lowerCaseQuery
      );
    });

    setSearchResults(results);

    if (results.length === 0) {
      router.push('/error');
    }
  };

  const handleProductDetail = (id: string) => {
    router.push(`/products/${id}`);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.length > 0 ? searchResults : products;
  const displayedProducts = currentProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PageContainer>
       {!isLoggedIn && (
        <LoginContainer>
          <Typography variant="h4" align="center" gutterBottom>
          </Typography>
          <LoginForm onLogin={handleLogin} />
        </LoginContainer>
      )}
      {isLoggedIn && (
        <ProductContainer maxWidth="md">
          <PageTitle variant="h4" align="center" gutterBottom>
            Products Page
          </PageTitle>
          <SearchBarContainer>
            <SearchInput
              label="Search by Name or ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              variant="outlined"
            />
            <SearchButton variant="contained" onClick={handleSearch}>
              Search
            </SearchButton>
          </SearchBarContainer>
          <Grid container spacing={9}>
            {displayedProducts.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <ProductCard
                  product={product}
                  onProductDetail={handleProductDetail}
                />
              </Grid>
            ))}
          </Grid>
          <PaginationContainer>
            {pageNumbers.map((pageNumber) => (
              <PageButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
                variant={currentPage === pageNumber ? 'contained' : 'outlined'}
              >
                {pageNumber}
              </PageButton>
            ))}
          </PaginationContainer>
        </ProductContainer>
      )}
    </PageContainer>
  );
};


export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const db = await connectToDatabase();
  const collection = db.collection<Product>('products');
  const products = await collection.find().toArray();
  
 
  return {
    props: {
      products: products.map((product) => ({
        _id: product._id.toString(),
        id: String(product.id),
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      })),
    },
  };
};
