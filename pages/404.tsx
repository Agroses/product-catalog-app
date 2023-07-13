import { NextPage } from 'next';
import ErrorPage from '../components/ErrorPage';

const NotFound: NextPage = () => {
  return <ErrorPage message="Page not found" />;
};

export default NotFound;
