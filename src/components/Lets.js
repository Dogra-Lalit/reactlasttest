import React from 'react'

const Lets = () => {
  return (
    <>
        <div className="lets">
          <div className="box">
              <h2>Let’s talk to coffee about you requirements.</h2>
              <p>Please take a minute to outline your requirement. Our solutions expert will be in touch shortly.</p>
              <form>
                  <ul>
                      <li>
                          <label>First Name</label>
                          <input type="text" name="" placeholder=""/>
                      </li>

                      <li>
                          <label>Last Name</label>
                          <input type="text" name="" placeholder=""/>
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
                  </ul>
              </form>
          </div>
      </div>
    </>
  )
}

export default Lets