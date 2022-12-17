import Link from "next/link";
import Image from "next/image";
let WorkSectionTwoContentList = [
  {
    imgUrl: "/assets/images/work/09.png",
    imgAlt: "Dating Thumb",
    title: "Trust And Safety",
    desc: "Choose from one of our membership levels and unlock features you need.",
    btnText: "See More Details",
    btnLink: "/policy",
  },
  {
    imgUrl: "/assets/images/work/10.png",
    imgAlt: "Dating Thumb",
    title: "Simple Membership",
    desc: "Choose from one of our membership levels and unlock features you need.",
    btnText: "Membership Details",
    btnLink: "/membership",
  },
];

function WorkSectionTwo() {
  return (
    <div
      className="work work--style2 padding-top padding-bottom bg_img"
      style={{ backgroundImage: "url(/assets/images/bg-img/01.jpg)" }}
    >
      <div className="container">
        <div className="section__wrapper">
          <div className="row g-4 justify-content-center">
            {WorkSectionTwoContentList.map((val, i) => (
              <div
                className="col-xl-6 col-lg-8 col-12 wow fadeInLeft"
                data-wow-duration="1.5s"
                key={i}
              >
                <div className="work__item">
                  <div className="work__inner">
                    <div className="work__thumb">
                      <Image src={val.imgUrl} alt={val.imgAlt} height={252} width={200} quality={100}
                        style={{
                          height: "auto",
                        }}/>
                    </div>
                    <div className="work__content">
                      <h3>{val.title}</h3>
                      <p>{val.desc} </p>
                      <Link href={val.btnLink} className="default-btn">
                        <span>{val.btnText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSectionTwo;
