import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <li><Link href='/a' as='/a'><a>a</a></Link></li>
    <li><Link href='/b' as='/b'><a>b</a></Link></li>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;