import LenisScroll from "@/components/LenisScroll";
import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LenisScroll>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LenisScroll>
  );
}
