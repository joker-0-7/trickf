import '../public/css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "../public/js/bootstrap.js";
// import 'react-quill/dist/quill.snow.css';
import Script from "next/script";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Docs</title>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
