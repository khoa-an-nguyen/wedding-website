import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Timeline from '../components/timeline'
import Intro from '../components/intro'

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
              {/* Add how we met here */}
              {/* Add wedding party here? */}
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
                <div>[Add parallax picture here]</div>
                  <div><Timeline /></div>
                </div>
              </div>
            </section>
            <section id="first" className="main special">
              <header className="major">
                <h2>The Party</h2>
              </header>
              <div>
                <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li>
                      <span className="icon major fa-copy"></span>
                      <h3>My-Lien Bourdon</h3>
                      <h5>Matron of Honor</h5>
                    </li>
                    <li>
                      <span className="icon major fa-code"></span>
                      <h3>Stacy Learn</h3>
                      <h5>Maid of Honor</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Evita Le</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Natalie Ngu</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Phuong Nguyen</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Samantha Phun</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Priscillia Pham</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Vi Lam</h3>
                      <h5>Bridesmaid</h5>
                    </li>
                  </ul>
                </div>
                <div className="wedding-party-wrapper">
                  <ul className="features">
                  <li>
                      <span className="icon major fa-copy"></span>
                      <h3>Beo Nguyen</h3>
                      <h5>Best Man</h5>
                    </li>
                    <li>
                      <span className="icon major fa-code"></span>
                      <h3>Kevin Cox</h3>
                      <h5>Best Man</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Michael Vo</h3>
                      <h5>Groomsman</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Joseph Chung</h3>
                      <h5>Groomsman</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Dara Nget</h3>
                      <h5>Groomsman</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Daniel Rillo</h3>
                      <h5>Groomsman</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Tuan Dang</h3>
                      <h5>Groomsman</h5>
                    </li>
                    <li>
                      <span className="icon major fa-diamond"></span>
                      <h3>Justin Chaphiv</h3>
                      <h5>Groomsman</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <footer className="major">
              </footer>
            </section>

            {/* <section id="second" className="main special">
              <header className="major">
                <h2>Schedule</h2>
                <p>
                  Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                  posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
              </header>
              <footer className="major">
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                  </Link>
                  </li>
                </ul>
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
            <section id="things-to-do" className="main special">
              <header className="major">
                <h2>Things To Do</h2>
              </header>
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
            </section> */}
          </div>
        </Layout>
      </div>
    )
  }
}

export default Index
