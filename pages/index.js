import Head from "next/head";
import BannerOne from "../component/section/banner";
import AboutSection from "../component/section/about";
import WorkSection from "../component/section/work";
import MemberSection from "../component/section/member";
import WorkSectionTwo from "../component/section/worktwo";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Dhanmondi Marriage Media - The most popular matrimonial site in
          Bangladesh
        </title>
        <Script
          strategy="afterInteractive"
          id="your-id"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWDNJP8');
  `,
          }}
        />
      </Head>
      <BannerOne />
      <AboutSection />
      <WorkSection />
      <MemberSection />
      <WorkSectionTwo />
    </>
  );
}
