import React from "react";
import Rectangle30 from "../images/Rectangle30.png";
import Rectangle31 from "../images/Rectangle31.png";
import Rectangle32 from "../images/Rectangle32.png";
const itemsData = [
    {
      imgsrc: Rectangle30,
      title: "A Powerful Guide to Help You....",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.",
    },
    {
      imgsrc: Rectangle31,
      title: "5 Things Small and Medium Siz....",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.",
    },
    {
      imgsrc: Rectangle32,
      title: "Why Traditional Meeting Room....",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore.",
    },
   
    // Add more data objects for additional items
  ];
const News = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Read Our Blog</h2>
              <ul>
              {itemsData.map((item, index) => (
                <li key={index}>
                  <div className="box">
                    <figure>
                      <span>
                        <img src={item.imgsrc} />
                      </span>
                    </figure>
                    <div className="text">
                      <h5>{item.title}</h5>
                      <p>
                      {item.desc}
                      </p>
                      <a href="#" className="link">
                        Read More <img src="images/line.svg" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
