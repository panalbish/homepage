// Components
import Head from "next/head";

const suffix = "Bishal Pantha";

const Title = ({ value }) => (
  <Head>
    <title>{value ? `${value} - ${suffix}` : suffix}</title>
  </Head>
);

export default Title;
