import Link from "next/link";
import { useEffect } from "react";

let HeaderInfoList = [
  {
    iconName: "fa-solid fa-phone",
    text: "+800-123-4567 6587",
  },
  {
    iconName: "fa-solid fa-location-dot",
    text: "Beverley, New York 224 USA",
  },
];

let HeaderSocialList = [
  {
    iconName: "fa-brands fa-facebook-f",
    text: "Facebook",
    link: "#",
  },
  {
    iconName: "fa-brands fa-instagram",
    text: "Instagram",
    link: "#",
  },
  {
    iconName: "fa-brands fa-youtube",
    text: "Youtube",
    link: "#",
  },
];

function HeaderTwo() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 200) {
        document
          .querySelector(".header")
          .classList.add(["header-fixed"], ["animated"], ["fadeInDown"]);
      } else {
        document
          .querySelector(".header")
          .classList.remove(["header-fixed"], ["animated"], ["fadeInDown"]);
      }
    });
  }, []);

  return (
    <header className="header" id="navbar">
      <div className="header__top d-none d-lg-block">
        <div className="container">
          <div className="header__top--area">
            <div className="header__top--left">
              <ul>
                {HeaderInfoList.map((val, i) => (
                  <li key={i}>
                    <i className={val.iconName}></i> <span>{val.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header__top--right">
              <ul>
                {HeaderSocialList.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>
                      <i className={val.iconName}></i> {val.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <img src="assets/images/logo/logo.png" alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler--icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav mainmenu">
                <ul>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/">Home Page One</Link>
                      </li>
                      <li>
                        <Link href="/index-2">Home Page Two</Link>
                      </li>
                      <li>
                        <Link href="/index-3">Home Page Three</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/membership">Membership</Link>
                      </li>
                      <li>
                        <Link href="/comingsoon">comingsoon</Link>
                      </li>
                      <li>
                        <Link href="/404">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Community
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/community">Community</Link>
                      </li>
                      <li>
                        <Link href="/group">All Group</Link>
                      </li>
                      <li>
                        <Link href="/members">All Members</Link>
                      </li>
                      <li>
                        <Link href="/activity">Activity</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Shops
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/shop">Product</Link>
                      </li>
                      <li>
                        <Link href="/shop-single">Product Details</Link>
                      </li>
                      <li>
                        <Link href="/shop-cart">Product Cart</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Blogs
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog-2">Blog Style Two</Link>
                      </li>
                      <li>
                        <Link href="/blog-single">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">contact</Link>
                  </li>
                </ul>
              </div>
              <div className="header__more">
                <button
                  className="default-btn dropdown-toggle"
                  type="button"
                  id="moreoption"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="moreoption">
                  <li>
                    <Link className="dropdown-item" href="/login">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/register">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderTwo;
