import "@styles/globals.scss";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>João Portela</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <body className="is-preload" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
