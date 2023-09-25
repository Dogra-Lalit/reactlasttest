import React from "react";
import Ellipse1 from "../images/Ellipse1.png";
import Union from "../images/Union.png";
const itemsData = [
    {
      imgsrcEllipse1: Ellipse1,
      imgsrcStar: Union,
      desc: "Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum  molestie, dui ligula interdum tortor, at pretium ligula quam ut est. Ut mollis nisi quis magna hendrerit vulputate. Fusce sagittis rhoncus tortor.",
      name:'Ajay Singh',
      dept:'CEO, People Tech',
    },
    {
      imgsrcEllipse1: Ellipse1,
      imgsrcStar: Union,
      desc: "Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum  molestie, dui ligula interdum tortor, at pretium ligula quam ut est. Ut mollis nisi quis magna hendrerit vulputate. Fusce sagittis rhoncus tortor.",
      name:'Ajay Singh',
      dept:'CEO, People Tech',
    },
    {
      imgsrcEllipse1: Ellipse1,
      imgsrcStar: Union,
      desc: "Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum  molestie, dui ligula interdum tortor, at pretium ligula quam ut est. Ut mollis nisi quis magna hendrerit vulputate. Fusce sagittis rhoncus tortor.",
      name:'Ajay Singh',
      dept:'CEO, People Tech',
    },
    
    
    // Add more data objects for additional items
  ];

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2>Clients Testimonials</h2>
            </div>
            <div className="col-md-7">
              <div className="box">
                <div
                  id="testimonials"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                  {itemsData.map((item, index) => (
                    <div className="carousel-item active" key={index}>
                      <div className="tesbox text-center">
                        <img className="pic" src={item.imgsrcEllipse1} />
                        <img className="star" src={item.imgsrcStar} />
                        <p>
                         {item.desc}
                        </p>
                        <h5>{item.name}</h5>
                        <span>{item.dept}</span>
                      </div>
                    </div>
                  ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide="prev"
                  >
                    <img src="images/left.png" />
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonials"
                    data-bs-slide="next"
                  >
                    <img src="images/right.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
