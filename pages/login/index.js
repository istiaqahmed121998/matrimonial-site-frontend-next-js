import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import useUser from "../../lib/useUser";
import Image from "next/image";
const title = "Welcome to Dhanmondi Marriage Media";
const otherTitle = "Sign up with your email";
import logoImage from "../../public/assets/images/logo/banner_logo.png";
import Head from "next/head";
function LogIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const { mutateUser } = useUser({
    redirectTo: "/profile-sg",
    redirectIfFound: true,
  });

  async function onSubmitHandler(e) {
    e.preventDefault();

    const user = {
      email: userEmail,
      password: userPass,
    };
    try {
      const res = await fetch("/api/login", {
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if(res.status===200){
        const data = await res.json();
        mutateUser(data);
        toast.success("logged in", {
          position: "top-right",
  
          theme: "colored",
          autoClose: 5000,
        });
      }
      else{
        toast.error(res.statusText, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }


    } catch (error) {
      if (!error.response) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        if (Array.isArray(error.response.data.error)) {
          toast.error(
            error.response.data.error[0].FailedField.replace(".", " ") +
              " is " +
              error.response.data.error[0].Tag,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else {
          toast.error(error.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    }
  }
  return (
    <>
      <Head>
        <title>Login - Dhanmondi Marriage Media</title>
      </Head>
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-7">
                <div className="logo">
                  <Link href="/">
                    <Image src={logoImage} alt="logo" height={"auto"} width={"auto"} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <Link href="/" className="backto-home">
                  <i className="fas fa-chevron-left"></i> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="image image-log"></div>
            <div className="col-lg-7">
              <div className="log-reg-inner">
                <div className="section-header inloginp">
                  <h2 className="title">{title}</h2>
                </div>
                <div className="main-content inloginp">
                  <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="item01"
                        autoComplete="email"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                        placeholder="Enter Your Email *"
                        className="my-form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        id="item02"
                        autoComplete="current-password"
                        value={userPass}
                        onChange={(e) => {
                          setUserPass(e.target.value);
                        }}
                        placeholder="Enter Your Password *"
                        className="my-form-control"
                      />
                    </div>
                    <p className="f-pass">
                      Forgot your password? <a href="#">recover password</a>
                    </p>
                    <div className="text-center">
                      <button type="submit" className="default-btn">
                        <span>Sign IN</span>
                      </button>
                    </div>
                    <div className="or">
                      <p>OR</p>
                    </div>
                    <div className="or-content">
                      <p>{otherTitle}</p>
                      <a href="#" className="default-btn reverse">
                        <img
                          src="assets/images/login/google.png"
                          alt="google"
                        />{" "}
                        <span>Sign Up with Google</span>
                      </a>
                      <p className="or-signup">
                        {" "}
                        Dont have an account?{" "}
                        <Link href="/register">Sign up here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default LogIn;
