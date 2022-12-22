import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import SelectIAm from "../../component/select/SelectIAm";
import logoImage from "../../public/assets/images/logo/logo.png";
import Link from "next/link";
import axios from "../../component/api/axios";
const title = "Welcome to Dhanmondi Marriage Media";
const desc =
  "Let's create your profile! Just fill in the fields below, and we’ll get a new account.";
const accTitle = "Acount Details";

function Register() {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConPassword, setRegConPassword] = useState("");
  const [iAm, setIAm] = useState("self");
  const [lookingFor, setLookingFor] = useState("Bride");
  const [DOB, setDOB] = useState("");
  const [number, setNumber] = useState("");

  function onChangeValue(event) {
    setLookingFor(event.target.value);
  }
  const handleChange = (selectedOption) => {
    setIAm(selectedOption);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();
    const user = {
      regName,
      DOB,
      regEmail,
      regPassword,
      regConPassword,
      iAm,
      lookingFor,
      number,
    };
    try {
      const users = await axios.post("/users", user);
      console.log(users.data.message)
      toast.success(users.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error)
      if (!error.status) {
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
        toast.error(error.response.data.message, {
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
  return (
    <section className="log-reg">
      <div className="top-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-7">
              <div className="logo">
                <Link href="/">
                  <Image src={logoImage} alt="logo" />
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
          <div className="image"></div>
          <div className="col-lg-7">
            <div className="log-reg-inner">
              <div className="section-header">
                <h2 className="title">{title} </h2>
                <p>{desc} </p>
              </div>
              <div className="main-content">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      id="item02"
                      value={regEmail}
                      onChange={(e) => {
                        setRegEmail(e.target.value);
                      }}
                      placeholder="Enter Your Email *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      name="password"
                      id="item03"
                      value={regPassword}
                      onChange={(e) => {
                        setRegPassword(e.target.value);
                      }}
                      placeholder="Enter Your Password *"
                      className="my-form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      name="password"
                      id="item04"
                      value={regConPassword}
                      onChange={(e) => {
                        setRegConPassword(e.target.value);
                      }}
                      placeholder="Enter Your Password *"
                      className="my-form-control"
                    />
                  </div>
                  <h4 className="content-title mt-5">Profile Details</h4>
                  <div className="form-group">
                    <label>Name*</label>
                    <input
                      type="text"
                      className="my-form-control"
                      placeholder="Enter Your Full Name"
                      onChange={(e) => {
                        setRegName(e.target.value);
                      }}
                      value={regName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone*</label>
                    <input
                      type="tel"
                      className="my-form-control"
                      placeholder="Enter Your phone"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      value={number}
                    />
                  </div>
                  <div className="form-group">
                    <label>Birthday*</label>
                    <input
                      type="date"
                      className="my-form-control"
                      onChange={(e) => {
                        setDOB(e.target.value);
                      }}
                      value={DOB}
                    />
                  </div>
                  <div className="form-group">
                    <label>I am *</label>
                    <div className="banner__inputlist">
                      <SelectIAm select={iAm} handleChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Looking for a*</label>
                    <div className="banner__inputlist">
                      <div className="s-input me-3">
                        <input
                          type="radio"
                          id="lookingfor"
                          name="lookingfor"
                          value="Groom"
                          checked={lookingFor === "Groom"}
                          onChange={onChangeValue}
                        />
                        <label htmlFor="lookingfor">Groom</label>
                      </div>
                      <div className="s-input">
                        <input
                          type="radio"
                          id="lookingfor1"
                          name="lookingfor"
                          value="Bride"
                          checked={lookingFor === "Bride"}
                          onChange={onChangeValue}
                        />
                        <label htmlFor="lookingfor">Bride</label>
                      </div>
                    </div>
                  </div>
                  <button className="default-btn reverse">
                    <span>Create Your Profile</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
