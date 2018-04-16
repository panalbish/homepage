// Components
import Head from 'next/head';

const suffix = 'Bishal Pantha';

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} - ${suffix}` : suffix}</title>
  </Head>
);
