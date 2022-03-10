import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
