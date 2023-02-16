import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const newstitle = "Newsletter Sign up";
const jointitle = "Join Community";
const aboutTitle = "Dhanmondi Marriage Media";
const aboutDesc =
  "Dhanmondi Marriage Media is a platform of finding our soulmate for our life";
const featureTitle = "Featured Members";
const supportTitle = "Contacts & Support";

let SocialList = [
  {
    iconName: "fa-brands fa-twitter",
    visitLink: "#",
  },
  {
    iconName: "fa-brands fa-instagram",
    visitLink: "#",
  },
  {
    iconName: "fa-brands fa-facebook-messenger",
    visitLink: "#",
  },
];

let AboutInfo = [
  {
    Name: "Address",
    Details: `House:67/B  Flat:2B
    Road-26(old) 15/A(New) Dhanmondi,Dhaka-1205
    Opposite of IBN SINA Hospital`,
  },
  {
    Name: "Contact",
    Details: "+8801716591726 alammoudud@gmail.com",
  },
];

let FeatureList = [
  {
    imgUrl: "/assets/images/footer/feature/01.jpg",
    imgAlt: "Dating Thumb",
    title: "Taspia Mim",
    activety: "Active",
    className: "feature__activity",
  },
  {
    imgUrl: "/assets/images/footer/feature/02.jpg",
    imgAlt: "Dating Thumb",
    title: "Wasif Zahin",
    activety: "2 Hours Ago",
    className: "feature__activity feature__activity--ofline",
  },
  {
    imgUrl: "/assets/images/footer/feature/03.jpg",
    imgAlt: "Dating Thumb",
    title: "Fouzia Khanom",
    activety: "Active",
    className: "feature__activity",
  },
];

let InfoList = [
  {
    pageName: "About Us",
    pageLink: "/about",
  },
  {
    pageName: "Membership",
    pageLink: "/membership",
  },
  {
    pageName: "Get in Touch",
    pageLink: "/contact",
  }
];

function FooterThree() {
  const [newsEmail, setNewsEmail] = useState();

  return (
    <footer className="footer footer--style2">
      <div
        className="footer__top bg_img"
        style={{ backgroundImage: "url(/assets/images/footer/bg.jpg)" }}
      >
        <div className="footer__newsletter">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="footer__newsletter--area">
                  <div className="footer__newsletter--title">
                    <h4>{newstitle}</h4>
                  </div>
                  <div className="footer__newsletter--form">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        id="item01"
                        value={newsEmail}
                        onChange={(e) => {
                          setNewsEmail({ newsEmail: e.target.value });
                        }}
                        placeholder="Your email address *"
                      />
                      <button type="submit" className="default-btn">
                        <span>Subscribe</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="footer__newsletter--area justify-content-xxl-end">
                  <div className="footer__newsletter--title me-xl-4">
                    <h4>{jointitle}</h4>
                  </div>
                  <div className="footer__newsletter--social">
                    <ul>
                      {SocialList.map((val, i) => (
                        <li key={i}>
                          <Link href={val.visitLink}>
                            <i className={val.iconName}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer__toparea padding-top padding-bottom wow fadeInUp"
          data-wow-duration="1.5s"
        >
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-5 col-sm-6 col-12">
                <div className="footer__item footer--about">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{aboutTitle}</h4>
                      </div>
                      <div className="footer__content--desc">
                        <p>{aboutDesc}</p>
                      </div>
                      <div className="footer__content--info">
                        {AboutInfo.map((val, i) => (
                          <p key={i}>
                            <b>{val.Name} :</b> {val.Details}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__item footer--feature">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{featureTitle}</h4>
                      </div>
                      <div className="footer__content--desc">
                        <ul>
                          {FeatureList.map((val, i) => (
                            <li key={i}>
                              <div className="thumb position-relative">
                                <Image
                                  src={val.imgUrl}
                                  alt={val.imgAlt}
                                  height={60}
                                  width={60}
                                />
                                <span className={val.className}></span>
                              </div>
                              <div className="content">
                                <Link href="/member-single">
                                  <h6>{val.title}</h6>
                                </Link>
                                <p>{val.activety}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer__item footer--support">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{supportTitle}</h4>
                      </div>
                      <div className="footer__content--desc">
                        <ul>
                          {InfoList.map((val, i) => (
                            <li key={i}>
                              <Link href={val.pageLink}>
                                <i className="fa-solid fa-angle-right"></i>{" "}
                                {val.pageName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom py-4">
        <div className="container">
          <div className="footer__content text-center">
            <p className="mb-0">
              All Rights Reserved &copy; <Link href="/"> D.M.M </Link> || Design
              By: Zenith
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterThree;
