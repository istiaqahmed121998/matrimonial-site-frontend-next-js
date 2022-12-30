import HeaderOne from "./header";
import FooterThree from "./footerthree";
import globalMeta from "../../lib/globalmeta";
import Head from "next/head";
export default function Layout({
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  ogtitle = globalMeta.ogtitle,
  ogType = globalMeta.ogType,
  google_site_verfication=globalMeta.googleVerification,
  keywords=globalMeta.keywords,
  children,
}) {
  return (
    <>
      <Head>
      <meta name="keywords" content={keywords}/>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="/assets/images/icon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/images/icon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/images/icon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/images/icon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/images/icon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/images/icon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/images/icon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/images/icon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/images/icon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/icon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/images/icon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/images/icon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#9a55e8" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#9a55e8"></meta>
        <meta name="google-site-verification" content={google_site_verfication} />
      </Head>

      <HeaderOne />
      {children}
      <FooterThree />
    </>
  );
}
