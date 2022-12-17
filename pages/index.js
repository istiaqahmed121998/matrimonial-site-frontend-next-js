import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import HeaderOne from "../component/layout/header";
import BannerOne from "../component/section/banner";
import AboutSection from "../component/section/about";
import WorkSection from "../component/section/work";
import MemberSection from "../component/section/member";
import Footer from "../component/layout/footer";
import WorkSectionTwo from "../component/section/worktwo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderOne />
      <BannerOne />
      <AboutSection />
      <WorkSection />
      <MemberSection />
      <WorkSectionTwo />
      <Footer />
    </>
  );
}
