// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/style.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/icofont.min.css';
import '../public/assets/css/all.min.css';
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return <Component {...pageProps} />
}
