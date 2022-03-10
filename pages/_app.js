import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/hackclub/css@d5a1058495519da7a7e1fecca463abd500185000/theme.min.css"
        />
      </Head>
      <Component {...pageProps} />
      <style>
        {`
          input {
            display: block;
            border: 1px solid var(--sunken);
            margin: 12px 0px;
          }
          body {
            margin: 16px
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
