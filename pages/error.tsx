import { NextPage, GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import ErrorPage from '../components/ErrorPage';

interface ErrorProps {
  message: string;
}

const Error: NextPage<ErrorProps> = ({ message }) => {
  const router = useRouter();

  return <ErrorPage message={message} />;
};

export const getServerSideProps: GetServerSideProps<ErrorProps, ParsedUrlQuery> = async (context) => {
  const { message } = context.query;

  return {
    props: {
      message: Array.isArray(message) ? message[0] : message || 'Error occurred',
    },
  };
};

export default Error;
