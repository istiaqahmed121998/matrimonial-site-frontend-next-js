import { useEffect } from "react";
import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import axios from "../component/api/axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/icofont.min.css";
import "../public/assets/css/all.min.css";
import Layout from "../component/layout/layout";
import DashboardLayout from "../component/layout/dashboardLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps, ...appProps }) {
  const fetcher = (url) =>
    axios
      .axios(url)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      });
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  if ([`/login`, `/register`, `/404`].includes(appProps.router.pathname))
    return (
      <>
        <Component {...pageProps} /> <ToastContainer />
      </>
    );
  else if (appProps.router.pathname.startsWith("/dashboard")) {
    return (
      <ChakraProvider>
        <DashboardLayout>
          <Component {...pageProps} theme={theme} />
        </DashboardLayout>
      </ChakraProvider>
    );
  } else {
    return (
      <SWRConfig
        value={{
          fetcher: fetcher,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          revalidateIfStale: false,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </SWRConfig>
    );
  }
}
