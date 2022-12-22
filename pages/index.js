import Head from "next/head";
import Image from "next/image";
import HeaderOne from "../component/layout/header";
import BannerOne from "../component/section/banner";
import AboutSection from "../component/section/about";
import WorkSection from "../component/section/work";
import MemberSection from "../component/section/member";
import Footer from "../component/layout/footer";
import WorkSectionTwo from "../component/section/worktwo";

export default function Home() {
  return (
    <>
      <BannerOne />
      <AboutSection />
      <WorkSection />
      <MemberSection />
      <WorkSectionTwo />
    </>
  );
}
