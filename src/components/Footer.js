import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
          <section class="ftop fbdr">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-md-6 text-center">
                          <h2 class="white mb-0">Connect With Us</h2>
                          <p class="white">Subscribe to our e-mail list.</p>
                          <form>
                              <input type="text" name="" placeholder="Email Address"/>
                              <button class="link">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <section class="fbottom fbdr">
              <div class="container">
                  <div class="row">
                      <div class="col-md-3">
                          <h5 class="white">Coworking Spaces</h5>
                          <a href="#">Flexible Workspace India</a>
                          <a href="#">Shared Office Spaces</a>
                          <a href="#">Coworking Locations</a>
                          <a href="#">Affordable Coworking</a>
                      </div>
                      <div class="col-md-3">
                          <h5 class="white">Managed Offices</h5>
                          <a href="#">Managed Office Solutions</a>
                          <a href="#">Professional Office Management</a>
                          <a href="#">Fully Serviced Offices</a>
                          <a href="#">Managed Office Providers</a>
                      </div>
                      <div class="col-md-3">
                          <h5 class="white">Virtual Offices</h5>
                          <a href="#">Virtual Office Addresses</a>
                          <a href="#">Virtual Office Solutions</a>
                          <a href="#">Remote Business Address</a>
                          <a href="#">Virtual Office Services</a>
                      </div>
                      <div class="col-md-3">
                          <h5 class="white">Follow us</h5>
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
          <p class="white text-center copy">Copyright © 2023 ofissquare. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer