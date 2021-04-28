import "@styles/globals.scss";
import Head from "next/head";
import { useEffect } from "react";
import { updateVhEffect } from "utils/window.ts";

function Application({ Component, pageProps }) {
  useEffect(updateVhEffect, []); // Empty array ensures that effect is only run on mount

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
