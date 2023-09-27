import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const Wosquare = () => {
  return (
    <>
      <section className="wosquare">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Why Ofis Square?</h2>
            </div>
          </div>
          <div className="row rev">
            <div className="col-md-6">
              <div className="max-width">
                <Tabs>
                  <TabList className="nav">
                    <Tab className="nav-item"><a className="nav-link">Location</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Flexibility</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Design</a></Tab>
                    <Tab className="nav-item"><a className="nav-link">Experience</a></Tab>
                  </TabList>
                  <TabPanel className="tab-content tab-pane">
                    <h5>Expansive network</h5>
                    <p>
                      With 16 stunning centres across India’s top 5 cities,
                      we’re well-poised to serve your every workplace need.
                    </p>
                    <h5>Easy access</h5>
                    <p>
                      We’re in the most prime locations — which makes commuting
                      to COWRKS a breeze, be it via the metro or your vehicle.
                    </p>
                    <h5>Lively neighbourhoods</h5>
                    <p>
                      Walk to your favourite restaurants, cafés or gyms.
                      Everything you need is close to you.
                    </p>
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    <h5>Easy access</h5>
                    <p>
                      We’re in the most prime locations — which makes commuting
                      to COWRKS a breeze, be it via the metro or your vehicle.
                    </p>
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    <h5>Lively neighbourhoods</h5>
                    <p>
                      Walk to your favourite restaurants, cafés or gyms.
                      Everything you need is close to you.
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="col-md-6">
              <figure className="line-bottom">
                <span>
                  {/* <img src="images/Maskgroup.png" /> */}
                  <img src="images/OfisSquareentrance.jpeg" />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wosquare;
