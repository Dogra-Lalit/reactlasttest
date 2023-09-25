import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
        <footer>
          <section className="ftop fbdr">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-6 text-center">
                          <h2 className="white mb-0">Connect With Us</h2>
                          <p className="white">Subscribe to our newsletter list.</p>
                          <form>
                              <input type="text" name="" placeholder="Email Address"/>
                              <button className="link">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <section className="fbottom fbdr">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                          <h5 className="white">Coworking Spaces</h5>
                          <Link to="#">Coworking Space In Sector-62 Noida</Link>
                          <Link to="#">Coworking Space In Sona-Road Gurugram</Link>
                          <Link to="/Coworkingspaces">Coworking Space In MG-Road Gurugram</Link>
                          <Link to="/Aerocity">Coworking Space In Aerocity</Link>
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Managed Offices</h5>
                          <a href="#">Managed Office Solutions</a>
                          <a href="#">Professional Office Management</a>
                          <a href="#">Fully Serviced Offices</a>
                          <a href="#">Managed Office Providers</a>
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Virtual Offices</h5>
                          <a href="#">Virtual Office Addresses</a>
                          <a href="#">Virtual Office Solutions</a>
                          <a href="#">Remote Business Address</a>
                          <a href="#">Virtual Office Services</a>
                      </div>
                      <div className="col-md-3">
                          <h5 className="white">Follow us</h5>
                          <ul>
                              <li><a href="#"><img src="images/tweeter.svg"/></a></li>
                              <li><a href="#"><img src="images/facebook.svg"/></a></li>
                              <li><a href="#"><img src="images/intagram.svg"/></a></li>
                              <li><a href="#"><img src="images/social.svg"/></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          <p className="white text-center copy">Copyright © 2023 ofissquare. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer