import "@styles/globals.css";
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return (
    <div id="wrapper">
      <Head>
        <title>João Portela</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <body className="is-preload" /> */}
      </Head>
      <div id="bg" />
      <div id="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Application;
