import React  from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Import the image files correctly
import Rectangle24 from "../images/Rectangle24.png";
import Rectangle25 from "../images/Rectangle25.png";
import Rectangle37 from "../images/Rectangle37.png";
import Rectangle52 from "../images/Rectangle52.png";
import line from "../images/line.svg";

const itemsData = [
  {
    title: "Day pass",
    imgSrc: Rectangle37, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Meeting rooms",
    imgSrc: Rectangle25, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Conference rooms",
    imgSrc: Rectangle24, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Board rooms",
    imgSrc: Rectangle52, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Day pass",
    imgSrc: Rectangle37, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Meeting rooms",
    imgSrc: Rectangle25, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Conference rooms",
    imgSrc: Rectangle24, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  {
    title: "Board rooms",
    imgSrc: Rectangle52, // Use the imported variable
    lineImgSrc: line, // Use the imported variable
  },
  // Add more data objects for additional items
];
const options = {
  items: 4,
  nav: true,
  rewind: true,
};

const Demandbook = () => {
  return (
    <>
      <section className="dbook">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>On Demand Bookings</h2>
              {/* <div className="owl-carousel" id="bookings"> */}
              <OwlCarousel className="owl-carousel owl-loaded owl-drag" {...options} autoplay margin={30}>
                {itemsData.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="box">
                      <figure>
                        <span>
                          <img src={item.imgSrc} alt={item.title} />
                        </span>
                      </figure>
                      <a href="#">
                        <h5>{item.title}</h5>
                        <span>
                          <img src={item.lineImgSrc} alt="Line" />
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demandbook;
