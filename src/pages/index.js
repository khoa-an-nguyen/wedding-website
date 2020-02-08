import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Timeline from '../components/timeline'
import Intro from '../components/intro'
import StyledBackgroundSection from '../components/BackgroundSection'
import StyledBackgroundSectionTwo from '../components/BackgroundSectionTwo'
import StyledBackgroundSectionThree from '../components/BackgroundSectionThree'
import CountDown from '../components/CountDown'
import Faqs from '../components/Faq'
import shadowcreeklogo from '../images/shadowcreek-logo.png'
// TODO
// temporary - will refactor later 
import party1 from '../images/party/beo.jpeg'
import party2 from '../images/party/mimi.jpg'
import party3 from '../images/party/kevin.jpg'
import party4 from '../images/party/stacy.jpeg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Layout>
          <Helmet title="#TheNewLeNguyens" />
          {/* <Header /> */}
          <section id="intro">
            <Waypoint
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}>
              </Waypoint>
          </section>
          <Nav sticky={this.state.stickyNav} />
          <div id="main">
              <Intro />
            <section id="introd" className="main special">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>Our Story</h2>
                  </header>
                  <h3>How We Met</h3>
                    <p>After 18 years of My-Anh traveling to over 7 countries, living the life of a “global nomad” (as she would say),  and well with Khoa… never straying from Northern Virginia, our paths crossed when we met in Harrisonburg, Virginia at James Madison University (<span>Go Dukes!</span>).</p>
                  <h3>Start of Being College Sweethearts</h3>
                    <p>On a sunny, breezy day of October 20th, 2012 in Downtown Charlottesville, Khoa asked My-Anh to be his girlfriend with a sharpie. napkin, and some <span>sloppy handwriting.</span></p>
                  <h3>The Proposal</h3>
                    <p>6 years, 1 month, 8 days later… Khoa finally mustered up the courage to propose to My-Anh in Sint Maarten (18°1'27.660"N 63°4'38.150”W).</p>
                  <p>We can't wait to celebrate with our friends, family, and loved ones on this next journey of our life! Let the countdown begin!</p>
                <CountDown id="countdown"></CountDown>
                </div>
              </div>
            </section>
            <StyledBackgroundSection></StyledBackgroundSection>
            {/* <section className="main">
            <header className="major">
                <h2>Some Important Events Between Us</h2>
              </header>
              <div>
                <Timeline />
              </div>
            </section> */}
            {/* <StyledBackgroundSectionTwo></StyledBackgroundSectionTwo> */}

            <section id="first" className="main special">
              <header className="major">
                <h2>The Party</h2>
              </header>
              <div>
                <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li className="groom">
                      <span className="icon major"><img class="party-picture" src={party2} height="200" weight="200"></img></span>
                      <div>
                        <h3>My-Lien Bourdon</h3>
                        <h5>Matron of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon major"><img class="party-picture" src={party4} height="200" weight="200"></img></span>
                      <div>
                        <h3>Stacy Learn</h3>
                        <h5>Maid of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon major"><img class="party-picture" src={party1} height="200" weight="200"></img></span>
                      <div>
                        <h3>Beo Nguyen</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon major"><img class="party-picture" src={party3} height="200" weight="200"></img></span>
                      <div>
                        <h3>Kevin Cox</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <footer className="major">
              <ul className="actions">
                  <li>
                    <Link to="/wedding-party" className="button">
                      Check Out the Rest of the Party!
                  </Link>
                  </li>
                </ul>
              </footer>
            </section>

            <section id="second" className="main special">
              <header className="major">
                <h2>Schedule</h2>
                  <p>
                    We are currently finalizing a few things! Our Schedule is coming soon! Stay tuned!
                  </p>
              </header>
              <footer className="major">
              </footer>
            </section>
            <StyledBackgroundSectionThree></StyledBackgroundSectionThree>
            <section id="location" className="main special">
              <header className="major">
                <h2>Location</h2>
              </header>
              <div>
                <img src={shadowcreeklogo} alt=""></img>
                <h3>Shadow Creek</h3>
                <address>18090 Silcott Springs Road</address>
                <address>Purcellville, Virginia 20132</address>
                <a href="https://goo.gl/maps/wCGF24ZfsJMxDzer7" className="button">Get Directions</a>
                <div class="travel-wrapper">
                  <div class="travel-section">
                    <div>
                      <span class="icon fa-copy"></span>
                      <h2>Traveling from Virginia</h2>
                      <h4>Directions</h4>
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
                      <span class="icon fa-copy"></span>
                      <h2>Traveling from Maryland</h2>
                      <h4>Directions</h4>
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
              <footer className="major">
              </footer>
            </section>
            <section id="accommodations" className="main special">
              <header className="major">
                <h2>Accommodations</h2>
                <p>
                  We recommend staying at around Old Town Leesburg or even booking an AirBnb around the area!
                <br />
                  <br />
                  Please let us know if you're booking an Airbnb!
              </p>
              </header>
              <ul className="actions">
                <li>
                  <a href="https://www.marriott.com" className="button special">
                    Leesburg Marriott
                  </a>
                </li>
                <li>
                  <a href="https://www.airbnb.com" className="button special">
                    AirBnb
                  </a>
                </li>
                <li>
                  <a href="https://www.salamanderresort.com/" className="button special">
                    Salamander Resort
                  </a>
                </li>
              </ul>
            </section>
            <section id="faqs" className="main special">
              <header className="major">
                <h2>Frequently Asked Questions</h2>
              </header>
              <Faqs></Faqs>
              <footer className="major">
              </footer>
            </section>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Index
