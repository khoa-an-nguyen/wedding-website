import React from "react"
import Img from "gatsby-image"
import Layout from '../components/layout'
import maryland from '../images/icons8-maryland-100.png'
import virginia from '../images/icons8-virginia-100.png'
import SubNavBar from '../components/SubPageNavBar'


const TestPage = () => {
    return (
      <div>
      <Layout>
        {/* <Header /> */}
        <div id="main">
          <section className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Directions</h2>
                </header>
              <SubNavBar/>
              <div class="travel-wrapper">
              <div class="travel-section">
                <div>
                  <span class="icon"><img src={virginia}></img></span>
                  <h2>Traveling from Virginia</h2>
                </div>
                <p>Toll Route</p>

                <ul class="directions">
                  <li>1. Begin on VA-267 W (Dulles Toll Road/Dulles Greenway) toward Leesburg</li>
                  <li>2. Take Exit 1A - US-15 S/VA-7 W/Leesburg Bypass toward Leesburg/Warrenton</li>
                  <li>3. After 9.3 miles, take the VA-287 S exit toward VA-7 BUS/Purcellville/Lovettsville and turn left onto VA-287 S/Berlin Turnpike</li>
                  <li>4. Continue straight through the traffic circle to continue on State Rte 1610</li>
                  <li>5. After 2 miles, turn left on State Rte 690/Silcott Springs Road</li>
                  <li>6. After 0.7 miles, Shadow Creek will be on the left</li>
                </ul>
                <p>Toll Free Route</p>
                <ul class="directions">
                  <li>1. Begin on VA-7 W (Route 7 West) toward Leesburg/Winchester</li>
                  <li>2. Take the exit ramp to merge onto US-15 S/VA-7 W/Leesburg Bypass</li>
                  <li>3. After 9.3 miles, take the VA-287 S exit toward VA-7 BUS/Purcellville/Lovettsville and turn left onto VA-287 S/Berlin Turnpike</li>
                  <li>4. Continue straight through the traffic circle to continue on State Rte 1610</li>
                  <li>5. After 2 miles, turn left on State Rte 690/Silcott Springs Road</li>
                  <li>6. After 0.7 miles, Shadow Creek will be on the left</li>
                </ul>
              </div>
              {/* <hr></hr> */}
              <div class="travel-section">
                <div>
                  <span class="icon"><img src={maryland}></img></span>
                  <h2>Traveling from Maryland</h2>
                </div>
                <ul class="directions">
                  <li>1. Begin on I-270 North towards Frederick</li>
                  <li>2. Use the right 2 lanes to take Exit 32 to merge onto I-70 West toward Hagerstown</li>
                  <li>3. Take Exit 52 to merge onto US-15 South/US-340 West</li>
                  <li>4. Take the Exit for MD-17 toward Brunswick/Burkittsville and exit the traffic circle onto MD-17/Burkittsville</li>
                  <li>5. Continue through each traffic circle to stay on MD-17 </li>
                  <li>6. Merge right to stay on MD-17 South/Burkittsville Rd/Petersville Rd</li>
                  <li>7. Stay on Burkittsville Rd through the traffic circle before the MD-VA bridge</li>
                  <li>8. Cross the bridge into Virginia, where Burkittsville Rd becomes Berlin Turnpike</li>
                  <li>9. Turn left on Town Center Dr to stay on Berlin Turnpike in Lovettsville</li>
                  <li>10. Continue straight through the traffic circle to continue on State Rte 1610</li>
                  <li>11. After 2 miles, turn left on State Rte 690/Silcott Springs Road</li>
                  <li>12. After 0.7 miles, Shadow Creek will be on the left</li>

                </ul>
              </div>
              </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
    )
}



export default TestPage