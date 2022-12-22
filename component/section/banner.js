import Image from "next/image";
import { useState } from "react";
import SelectAge from "../select/selectage";
import SelectCountry from "../select/selectcountry";
import SelectIAm from "../select/SelectIAm";
const title = "Find your life Partner";
const desc = "Your life Partner of perfect match is just a click away.";

const labelchangeone = "I am on behalf of";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const btnText = "Find Your Partner";

const imgLink = "/assets/images/banner/wedding-vector.webp";
const imgAlt = "Dating Thumb";

function BannerOne() {
  const [iAm, setIAm] = useState("self");
  const [ageFrom, setAgeFrom] = useState("18");
  const [ageTo, setAgeTo] = useState("40");
  const [country, setCountry] = useState("Bangladesh");
  const handleChangeIAm = (selectedOption) => {
    setIAm(selectedOption);
  };
  const handleChangeCountry = (selectedOption) => {
    setCountry(selectedOption);
  };
  const handleChangeAgeFrom = (selectedOption) => {
    setAgeFrom(selectedOption);
  };
  const handleChangeAgeTo = (selectedOption) => {
    setAgeTo(selectedOption);
  };
  return (
    <div
      className="banner padding-top padding-bottom bg_img"
      style={{ backgroundImage: "url(/assets/images/banner/bg.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            >
              <div className="banner__title">
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="banner__form">
                <form action="#">
                  <div className="banner__list">
                    <label>{labelchangeone}</label>
                    <div className="row">
                      <div className="col-12">
                        <div className="banner__inputlist">
                          <SelectIAm
                            select={iAm}
                            handleChange={handleChangeIAm}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner__list">
                    <label>{labelchangetwo}</label>
                    <div className="row">
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="male2">
                          <input
                            type="radio"
                            id="male2"
                            name="me2"
                            className="male"
                          />
                          <span>Groom</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-mars"></i>
                          </span>
                        </label>
                      </div>
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="female2">
                          <input
                            type="radio"
                            id="female2"
                            name="me2"
                            className="female"
                            defaultChecked
                          />
                          <span>Bride</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-venus"></i>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="banner__list">
                    <label>{labelchangethree}</label>
                    <div className="row">
                      <div className="col-6">
                        <div className="banner__inputlist">
                          <SelectAge
                            select={ageFrom}
                            handleChange={handleChangeAgeFrom}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="banner__inputlist">
                          <SelectAge
                            select={ageTo}
                            handleChange={handleChangeAgeTo}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner__list">
                    <label>{labelchangefour}</label>
                    <div className="row">
                      <div className="col-12">
                        <div className="banner__inputlist">
                          <SelectCountry
                            select={country}
                            handleChange={handleChangeCountry}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="default-btn reverse d-block">
                    <span>{btnText}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="banner__thumb banner__thumb--thumb1 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            >
              <Image
                src={imgLink}
                alt={imgAlt}
                width={634}
                height={634}
                sizes="100vw"
                quality={100}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOne;
