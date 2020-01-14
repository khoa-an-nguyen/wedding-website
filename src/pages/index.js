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
import shadowcreeklogo from '../images/shadowcreek-logo.png'

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
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          ></Waypoint>
          <Nav sticky={this.state.stickyNav} />

          <div id="main">
          <Intro />
            <section id="intro" className="main special">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>How We Met</h2>
                  </header>
                  <p>
                    It was January 2012, the spring semester of their Freshman year at James Madison University. My-Anh and Khoa both attended the Asian Co-Org Mixer; 
                    My-Anh went to learn more about the Vietnamese Student Association (VSA) while Khoa went to hangout with his friends (and eat the free cupcakes!). 
                    It was there where Khoa first noticed My-Anh and after seeing her sign up for Culture Show, he immediately asked the Director if she could sign My-Anh up to be his partner in the Fashion Show act. 
                    Although My-Anh ultimately ended up not being able to take part in the fashion show, they slowly got to know each other the months thereafter. 
                    From walking to and from GISAT 116 class together, getting lunches, studying together and hanging out at VSA parties...they became close friends and on October 20, 2012, Khoa officially asked My-Anh to be his girlfriend.
                </p>
                  
                </div>
              </div>
            </section>
            <StyledBackgroundSection></StyledBackgroundSection>
            <section className="main special">
            <header className="major">
                <h2>Our Story</h2>
              </header>
              <div><Timeline />
              </div>
            </section>
            <StyledBackgroundSectionTwo></StyledBackgroundSectionTwo>

            <section id="first" className="main special">
              <header className="major">
                <h2>The Party</h2>
              </header>
              <div>
                <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li className="groom">
                      <span className="icon major fa-copy"></span>
                      <div>
                        <h3>My-Lien Bourdon</h3>
                        <h5>Matron of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon major fa-code"></span>
                      <div>
                        <h3>Stacy Learn</h3>
                        <h5>Maid of Honor</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li>
                      <span className="icon major fa-copy"></span>
                      <div>
                        <h3>Beo Nguyen</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li>
                      <span className="icon major fa-code"></span>
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
                      Check Out the rest of the Party!
                  </Link>
                  </li>
                </ul>
              </footer>
            </section>

            <section id="second" className="main special">
              <header className="major">
                <h2>Schedule</h2>
                  <p>
                    Our schedule is coming soon! Stay tuned!
                  </p>
              </header>
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
            <StyledBackgroundSectionThree></StyledBackgroundSectionThree>
            <section id="location" className="main special">
              <header className="major">
                <h2>Location</h2>
              </header>
              <div>
                <img src={shadowcreeklogo} alt=""></img>
                <h3>Shadow Creek</h3>
                <p>
                  18090 SILCOTT SPRINGS ROAD
                </p>
                <p>PURCELLVILLE, VIRGINIA 20132</p>
              </div>
              <footer className="major">
              </footer>
            </section>
            <section id="faqs" className="main special">
              <header className="major">
                <h2>(Most Likely) Frequently Asked Questions</h2>
              </header>
              <p>Q: What is the dress code?</p>
              <p>A: Cocktail! Polish those shoes, and iron those dresses!</p>
              <p>Q: Transportation to Hotel?</p>
              <p>A: Stay Tuned! We will be figuring out transporation once we have an accurate count on bookings.</p>
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
