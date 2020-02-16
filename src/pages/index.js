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
import SimpleCountdown from '../components/SimpleCountdown'
import Faqs from '../components/Faq'
import shadowcreeklogo from '../images/shadowcreek-logo.png'
import GallerySnippet from '../components/GallerySnippet';
import MainParty from '../components/MainParty'
import HamburgerMenu from '../components/HamburgerMenu'

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
          <HamburgerMenu />
          <div id="main">
              <Intro />
            <section className="main special">
                <div className="spotlight">
                  <div className="content">
                    <header className="major">
                      <h2>Our Story</h2>
                    </header>
                    <h3 className="cursive-text">How We Met</h3>
                      <p>After 18 years of My-Anh traveling to over 7 countries, living the life of a “global nomad” (as she would say),  and well with Khoa… never straying from Northern Virginia, our paths crossed when we met in Harrisonburg, Virginia at James Madison University. 
                        <br/>
                        <span id="dukes-text-box"><span className="dukes-purple">GO DUKES!</span></span></p>                    
                    <h3 className="cursive-text">Start of Being College Sweethearts</h3>
                      <p>On a sunny, breezy day of October 20th, 2012 in Downtown Charlottesville, Khoa asked My-Anh to be his girlfriend with a sharpie. napkin, and some <span>sloppy handwriting.</span></p>
                    <h3 className="cursive-text">The Proposal</h3>
                      <p>6 years, 1 month, 8 days later at noon...<br />Khoa finally mustered up the courage to propose to My-Anh in Sint Maarten at <code>18°1'27.660"N 63°4'38.150”W</code>.</p>
                    <p>And now... We can't wait to celebrate with our friends, family, and loved ones on this next journey of our life! <br />Let the countdown begin!</p>
                    <SimpleCountdown 
                    timeTillDate="10 02 2020, 6:00 pm" 
                    timeFormat="MM DD YYYY, h:mm a" 
                    />
                  </div>
                </div>
            </section>
            <StyledBackgroundSection></StyledBackgroundSection>
            <section id="first" className="main special">
              <header className="major">
                <h2>The Party</h2>
              </header>
                <div>
                  <MainParty />
                </div>
              <footer className="major">
              <ul className="actions">
                  <li>
                    <Link to="/wedding-party" className="button">
                      See The Rest of the Party
                  </Link>
                  </li>
                </ul>
              </footer>
            </section>
            <StyledBackgroundSectionTwo></StyledBackgroundSectionTwo>
              <section id="second" className="main special">
                <header className="major">
                  <h2>Schedule</h2>
                    <Timeline />
                </header>
                <footer className="major">
                </footer>
              </section>
              <section id="location" className="main special">
                <header className="major">
                  <h2>Location</h2>
                </header>
                  <div>
                    <img src={shadowcreeklogo} alt=""></img>
                    <div id="location-address">
                      {/* <h3>Shadow Creek</h3> */}
                      <address>18090 Silcott Springs Road</address>
                      <address>Purcellville, Virginia 20132</address>
                    </div>
                    <ul className="actions">
                    <li><a href="https://goo.gl/maps/wCGF24ZfsJMxDzer7" className="button">Map It Out!</a></li>
                    <li>
                      <Link to="/directions" className="button">
                          Directions
                      </Link>
                    </li>
                    </ul>
                  </div>
                <footer className="major">
                  <StyledBackgroundSectionThree></StyledBackgroundSectionThree>
                </footer>
              </section>
              <section id="accommodations" className="main special">
                <header className="major">
                  <h2>Accommodations</h2>
                </header>
                  <p>
                      Our recommendation is to stay around Old Town Leesburg or even booking an AirBnb around the area!
                    <br />
                    <em>We are currently looking for the best hotel possible to room block so stay tuned for updates as the date approaches!</em>
                      <br />
                      <em>Also - Please let us know if you're booking an Airbnb!</em>
                  </p>
                  {/* Remove temporarily after finalizing room blocks */}
                  {/* <ul className="actions">
                    <li>
                      <a href="https://www.marriott.com" className="button">
                        Leesburg Marriott
                      </a>
                    </li>
                    <li>
                      <a href="https://www.airbnb.com" className="button">
                        AirBnb
                      </a>
                    </li>
                    <li>
                      <a href="https://www.salamanderresort.com/" className="button">
                        Salamander Resort
                      </a>
                    </li>
                  </ul> */}
              </section>
              <section id="photo" className="main special">
                  <div className="content">
                        <header className="major">
                          <h2>Photos</h2>
                        </header>
                    <GallerySnippet/>
                    <ul className="actions">
                        <li>
                          <Link to="/photo-gallery" className="button">
                            See More Photos
                        </Link>
                        </li>
                      </ul>
                    </div>
              </section>
              <section id="faqs" className="main special">
                <header className="major">
                  <h2>Frequently Asked Questions</h2>
                </header>
                {typeof window !== 'undefined' && Faqs && <Faqs></Faqs>}
                <footer className="major">
                </footer>
              </section>
          </div>
        </Layout>
    )
  }
}

export default Index
