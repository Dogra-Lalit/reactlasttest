import React from "react";
import Demandbook from './Demandbook'
import Testimonials from './Testimonials'
import Lets from './Lets'
const Aerocity = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <h1>
              Coworking Spaces
              <br />
              <span>Aerocity</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="Aerocity">
        <div className="container">
           <div className="row">
              <div className="col-md-7">
                 <h2>Ofis Square in Aerocity</h2>
                 <ul>
                    <li><span><img src="images/Aerocity-union.png" height="20px" width="20px"/></span>Ground Floor and First Floor, Worldmark 1, Asset Area 11, Aerocity, Hospitality District, Indira Gandhi International Airport, NH-8, New Delhi, South Delhi, Delhi, 110037</li>
                    <li><span><img src="images/Aerocity-Group.png" height="20px" width="20px"/></span>Popular restaurants, retail hubs and 5-star business hotels - within 1 km; Metro Station - 0.3 km; Indira Gandhi International Airport - 2.8 kms</li>
                    <li><span><img src="images/Aerocity-Group (1).png" height="20px" width="20px"/></span>Global enterprises, public and private sector business establishments - within 0.5 km</li>
                </ul>             
              </div>
              <div className="col-md-5">
                <div className="rigth-box"> <ul>
                    <li><img src="images/star.png" height="25" width="25"/><h5>5 Star</h5><p>100+ Ratings</p></li>
                    <li><img src="images/sq.png" height="25" width="25"/><h5>5 Star</h5><p>100+ Ratings</p></li>
                    <li><img src="images/desk.png" height="25" width="25"/><h5>5 Star</h5><p>100+ Ratings</p></li>
                   </ul></div>
              </div>
           </div>
        </div>
     </section>
     <Demandbook/>
     <Testimonials/>
     <Lets/>
    </>
  );
};

export default Aerocity;
