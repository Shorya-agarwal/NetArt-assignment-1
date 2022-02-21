import React, { Component } from 'react'
import awardimg from '../NetArt-test/asserts/1.png'
import img2 from '../NetArt-test/asserts/2.png'
export default class Award extends Component {
  render() {
    return (
      <div className = "body1">
          <div className="award-img">
              <img src={awardimg} height = "80%" alt="" /></div>
          <div className="award-content">
              <p><b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
              <ul>
                  <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li>
                  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                  </li>
                  </ul>
                  <div className="img2">
                    <img src={img2} width = "90%" height = "100%" alt="" />
                    </div>
                    <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
      </div>
    )
  }
}
