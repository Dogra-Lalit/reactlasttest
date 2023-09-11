import React from "react";
import Rectangle46 from "../images/Rectangle46.png";
import Rectangle48 from "../images/Rectangle48.png";
import Rectangle50 from "../images/Rectangle50.png";
import Rectangle79 from "../images/Rectangle79.png";
const Upcomingpg = () => {
  const itemsData = [
    {
      city: "Banglore",
      state: "KARNATAKA",
      desc: "Choose a workspace from over 16 expansive centres spread across over 1.2 million sq. ft. area in India.",
    },
    {
      city: "Gurugram",
      state: "HARYANA",
      desc: "Choose a workspace from over 16 expansive centres spread across over 1.2 million sq. ft. area in India.",
    },
    {
      city: "Hyderabad",
      state: "TELANGANA",
      desc: "Choose a workspace from over 16 expansive centres spread across over 1.2 million sq. ft. area in India.",
    },
    {
      city: "New Delhi",
      state: "DELHI",
      desc: "Choose a workspace from over 16 expansive centres spread across over 1.2 million sq. ft. area in India.",
    },
    // Add more data objects for additional items
  ];
  return (
    <>
      <div className="upcoming mainpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Upcoming Locations</h2>
              <ul className="text">
                {itemsData.map((item, index) => (
                  <li key={index}>
                    <div className="box">
                      <span></span>
                      <h5>{item.city}</h5>
                      <i>{item.state}</i>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="imgal">
                <li>
                  <figure className="line-top">
                    <span>
                      <img src={Rectangle46} />
                    </span>
                  </figure>
                  <figure>
                    <span>
                      <img src={Rectangle48}/>
                    </span>
                  </figure>
                </li>
                <li>
                  <figure>
                    <span>
                      <img src={Rectangle50} />
                    </span>
                  </figure>
                  <figure className="line-bottom">
                    <span>
                      <img src={Rectangle79} />
                    </span>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcomingpg;
