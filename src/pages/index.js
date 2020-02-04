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
                    <h2>Our Story</h2>
                  </header>
                <p>
                  7 years, 100 days later.. Khoa finally popped the question to My-Anh!
                </p>
                  
                </div>
              </div>
            </section>
            <StyledBackgroundSection></StyledBackgroundSection>
            <section className="main">
            <header className="major">
                <h2>Some Important Events Between Us</h2>
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
                {/* <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li>
                      <span className="icon major"><img class="party-picture" src={party1} height="200" weight="200"></img></span>
                      <div>
                        <h3>Beo Nguyen</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li>
                      <span className="icon major"><img class="party-picture" src={party1} height="200" weight="200"></img></span>
                      <div>
                        <h3>Kevin Cox</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                  </ul>
                </div> */}
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
                    Our schedule is coming soon! Stay tuned!
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
                <strong>
                  18090 SILCOTT SPRINGS ROAD PURCELLVILLE, VIRGINIA 20132
                </strong>
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
                <h2>(Most Likely) Frequently Asked Questions</h2>
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
