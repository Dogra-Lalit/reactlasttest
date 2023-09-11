import React from "react";
import group27 from '../images/Group27.png';
import Rectangle24 from '../images/Rectangle24.png';
import Rectangle25 from '../images/Rectangle25.png';
const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-8">
              <h1>
                Future <span className="orange">Works Here.</span>
              </h1>
              <p>
                We offer what offices don't Business Centers where the future
                works.
              </p>
              <div className="box_search">
                <img src={group27} />
                <div className="box">
                  <div className="box_deta">
                    <ul>
                      <li>
                        <h2 className="white">38</h2>
                        <p className="white">Rooms Available</p>
                      </li>
                      <li>
                        <h2 className="white">50+</h2>
                        <p className="white">Reading Resources</p>
                      </li>
                      <li>
                        <h2 className="white">75</h2>
                        <p className="white">Device Setup</p>
                      </li>
                      <li>
                        <h2 className="white">24</h2>
                        <p className="white">Hours Open</p>
                      </li>
                    </ul>
                    <form>
                      <input
                        type="text"
                        name=""
                        placeholder="Select Your City"
                      />
                      <button>Get Workspace</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <figure className="mb_bootom line-top">
                <span>
                  <img src={ Rectangle24 } />
                </span>
              </figure>
              <figure className="line-bottom">
                <span>
                  <img src={ Rectangle25 } />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
