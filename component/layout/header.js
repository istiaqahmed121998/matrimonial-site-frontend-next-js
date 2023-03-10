import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoLink from "../../public/assets/images/logo/banner_logo.png";
import useUser from "../../lib/useUser";
import { useRouter } from "next/router";
export default function HeaderOne() {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  const logOut = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/logout", {
      method: "POST",
    });
    mutateUser(res, false);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      var selection = document.querySelector(".header") !== null;
      if (selection && value > 200) {
        document
          .querySelector(".header")
          .classList.add(["header-fixed"], ["animated"], ["fadeInDown"]);
      } else if (selection) {
        document
          .querySelector(".header")
          .classList.remove(["header-fixed"], ["animated"], ["fadeInDown"]);
      }
    });
  }, []);
  // const fetcher = url => fetch(url).then(r => r.json())
  // const { data: user, mutate: mutateUser } = useSWR("/api/user",fetcher);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className="header" id="navbar">
      <div className="header__bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <Image
                src={logoLink}
                alt="Dhanmondi Marriage Media"
                width={"160"}
                height={"auto"}
              />
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
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/membership">Membership</Link>
                  </li>
                  <li>
                    <Link href="/member">All Members</Link>
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
                  {!user?.isLoggedIn === true ? "My Account" : user?.userinfo.full_name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="moreoption">
                  {user?.isLoggedIn === true ? (
                    <>
                      <li>
                        <Link className="dropdown-item" href="/profile">
                          My Profile
                        </Link>
                        <Link className="dropdown-item" href="/setting">
                          Setting
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={logOut}
                        >
                          Sign out
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
