import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import {Props} from '../src/interface/Product'




const HomePage = () => {
};


export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  res.writeHead(302, { Location: '/products' });
  res.end();

  return { props: {} } as GetServerSidePropsResult<Props>;
};


export default HomePage;

