import Link from "next/link";

import PageHeader from "../../component/layout/pageheader";
import axios from "../../component/api/axios";
import Head from "next/head";
const title = "Membership Levels";
const subtitle =
  "Our dating platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.";

let MembershipList = [
  {
    daycount: "Free",
    perMonth: "Limit Access of profile",
    price: "0 BDT",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-xmark",
        text: "Add Profile To Your Favourite",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Profile",
      },
      {
        iconName: "fa-solid fa-circle-xmark",
        text: "Send Private Messages",
      },
      {
        iconName: "fa-solid fa-circle-xmark",
        text: "Add Media To Your Profile",
      },
    ],
  },

  {
    daycount: "Silver",
    perMonth: "Validity 3months",
    price: "2500 BDT",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Directory",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Profile",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Send Private Messages",
      },
      {
        iconName: "fa-solid fa-circle-xmark",
        text: "Add Media To Your Profile",
      },
    ],
  },
  {
    daycount: "Gold",
    perMonth: "$15.00 Now And Then $30.00 Per Month.",
    price: "$30.00",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Directory",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Profile",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Send Private Messages",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Add Media To Your Profile",
      },
    ],
  },
];
function MembershipPage({ memberships }) {
  return (
    <>
      <Head>
        <title>Membership Plan - Dhanmondi Marriage Media</title>
      </Head>
      <PageHeader title={"Membership Levels"} curPage={"Membership"} />
      <div className="membership padding-top padding-bottom">
        <div className="container">
          <div className="section__header style-2 text-center">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="section__wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {memberships.map((val, i) => (
                <div className="col" key={i}>
                  <div className="membership__item">
                    <div className="membership__inner">
                      <div className="membership__head">
                        <h4>{val.membershiptype}</h4>
                        <p>{val.validity}</p>
                      </div>
                      <div className="membership__body">
                        <h4>{val.price} BDT</h4>
                        <ul>
                          {val.membership_benefits.map((v, i) => (
                            <li key={i}>
                              <i
                                className={
                                  v.has === true
                                    ? "fa-solid fa-circle-check"
                                    : "fa-solid fa-circle-xmark"
                                }
                              ></i>
                              <span>{v.benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="membership__footer">
                        <Link href="/login" className="default-btn reverse">
                          <span>Select Plan</span>
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
    </>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.axios("/memberships");
  const memberships = res.data.data;
  return {
    props: {
      memberships,
    },
  };
}

export default MembershipPage;
