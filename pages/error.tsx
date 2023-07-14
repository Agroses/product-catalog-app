import { NextPage, GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Typography } from '@mui/material';

interface ErrorProps {
  message: string;
}

const Error: NextPage<ErrorProps> = ({ message }) => {
  return (
    <Typography variant="h3" align="center" color="error">
      {message}
    </Typography>
  );
};

export const getServerSideProps: GetServerSideProps<ErrorProps, ParsedUrlQuery> = async () => {
  const message = 'Product not found';

  return {
    props: {
      message,
    },
  };
};

export default Error;
