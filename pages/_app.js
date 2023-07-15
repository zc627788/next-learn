import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta key="123123"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
