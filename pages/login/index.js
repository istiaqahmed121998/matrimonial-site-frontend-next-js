import  Link  from "next/link";
import { useState } from "react";

const title = "Welcome to Ollya";
const otherTitle = "Sign up with your email";

function LogIn() {

  const [userEmail,setUserEmail]=useState('')
  const [userPass,setUserPass]=useState('')
 
    return (
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-7">
                <div className="logo">
                  <Link href="/">
                    <img src="assets/images/logo/logo.png" alt="logo" />
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
                  <form action="#">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="item01"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail( e.target.value );
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
                        value={userPass}
                        onChange={(e) => {
                          setUserPass( e.target.value );
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
      </section>
    );
  
}

export default LogIn;
