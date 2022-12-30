import Head from "next/head"
import BannerOne from "../component/section/banner";
import AboutSection from "../component/section/about";
import WorkSection from "../component/section/work";
import MemberSection from "../component/section/member";
import WorkSectionTwo from "../component/section/worktwo";

export default function Home() {
  return (
    <>
    
    <Head>
      <title>Dhanmondi Marriage Media - The most popular matrimonial site in Bangladesh</title>
    </Head>
      <BannerOne />
      <AboutSection />
      <WorkSection />
      <MemberSection />
      <WorkSectionTwo />
    </>
  );
}
