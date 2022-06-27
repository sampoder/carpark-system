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
          
          .first {
            -webkit-animation: flash 1s ;  /* Safari 4+ */
            -moz-animation: flash 1s ;  /* Fx 5+ */
            -o-animation: flash 1s ;  /* Opera 12+ */
            animation: flash 1s ;  /* IE 10+, Fx 29+ */
            animation-iteration-count: 20;
          }
          
          @-webkit-keyframes flash {
            0%, 49% {
             background-color: var(--orange)
            }
            50%, 100% {
              background-color: #fff;
            }
          }

          @-webkit-keyframes flashWhite {
            0%, 49% {
             color: #fff
            }
            50%, 100% {
             color: var(--muted);
            }
          }

          .first > div > .eyebrow {
            -webkit-animation: flashWhite 1s ;  /* Safari 4+ */
            -moz-animation: flashWhite 1s ;  /* Fx 5+ */
            -o-animation: flashWhite 1s ;  /* Opera 12+ */
            animation: flashWhite 1s ;  /* IE 10+, Fx 29+ */
            animation-iteration-count: 20;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
