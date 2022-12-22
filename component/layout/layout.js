import HeaderOne from "./header";
import FooterThree from "./footerthree";

export default function Layout({ children }) {
  return (
    <>
      <HeaderOne />
       {children}
       <FooterThree />
    </>
  );
}
