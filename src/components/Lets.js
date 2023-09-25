import React from 'react'

const Lets = () => {
  return (
    <>
        <div className="lets">
          <div className="box">
              <h2>Let’s talk to coffee about you requirements.</h2>
              <p>Please take a minute to outline your requirement. Our solutions expert will be in touch shortly. Call Us On </p>
              <form>
                  <ul>
                      <li>
                          <label>Name</label>
                          <input type="text" name="" placeholder=""/>
                      </li>

                      <li>
                          <label>Email</label>
                          <input type="email" name="" placeholder=""/>
                      </li>

                      <li>
                          <label>Company</label>
                          <input type="text" name="" placeholder=""/>
                      </li>

                      <li>
                          <label>Phone Number</label>
                          <input type="text" name="" placeholder=""/>
                      </li>

                      <li className="w-100">
                          <label>How can we help?</label>
                          <textarea></textarea>
                      </li>

                      <li className="w-100">
                        <button className="link">Submit</button>
                      </li>
                      * Your data is save with us and won't be shared with anyone.
                  </ul>
              </form>
          </div>
      </div>
    </>
  )
}

export default Lets