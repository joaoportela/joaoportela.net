import "@styles/globals.scss";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>João Portela</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1, user-scalable=no"></meta>
        {/* <body className="is-preload" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
