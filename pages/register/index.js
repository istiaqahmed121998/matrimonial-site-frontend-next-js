import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import SelectIAm from "../../component/select/SelectIAm";
import logoImage from "../../public/assets/images/logo/logo.png";
import Link from "next/link";
import axios from "../../component/api/axios";
import Head from "next/head";
import {useRouter} from 'next/router'
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
  const [number, setNumber] = useState("");
  const router = useRouter()
  function onChangeValue(event) {
    setLookingFor(event.target.value);
  }
  const handleChange = (selectedOption) => {
    setIAm(selectedOption);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();

    const user = {
      full_name: regName,
      email: regEmail,
      password: regPassword,
      on_behalf_of: iAm,
      looking_for: lookingFor,
      contact_number: number,
    };
    try {
      if (regConPassword !== regPassword) {
        throw Error("password doesn't match");
      }
      const users = await axios.post("/user", user);
      toast.success(users.data.message, {
        position: "top-right",
  
        theme: "colored",
        autoClose: 5000,

      });
      setTimeout(()=>{
        router.push('/login')
      },1000)

    } catch (error) {
      console.log(error);
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
      }
      else {
        if(Array.isArray(error.response.data.error)){
          toast.error((error.response.data.error[0].FailedField.replace("." ," ")+" is "+error.response.data.error[0].Tag), {
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
        else{
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
        <title>Registration - Dhanmondi Marriage Media</title>
      </Head>
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
                        id="email"
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
                        id="password"
                        value={regPassword}
                        onChange={(e) => {
                          setRegPassword(e.target.value);
                        }}
                        placeholder="Enter Your Password *"
                        className="my-form-control"
                        minLength={8}
                        maxLength="40"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password*</label>
                      <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        value={regConPassword}
                        onChange={(e) => {
                          setRegConPassword(e.target.value);
                        }}
                        placeholder="Enter Your Password *"
                        className="my-form-control"
                        minLength="8"
                        maxLength="40"
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
                        minLength="5"
                        maxLength="40"
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
                        minLength="10"
                        maxLength="40"
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
    </>
  );
}

export default Register;
