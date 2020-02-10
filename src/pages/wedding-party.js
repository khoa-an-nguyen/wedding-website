import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

// temporary - pictures of party  - refactor later
import bride1 from '../images/party/mimi.jpg'
import bride2 from '../images/party/stacy.jpeg'
import bride3 from '../images/party/evita2.png'
import bride4 from '../images/party/nat.png'
import bride5 from '../images/party/phuong2.png'
import bride6 from '../images/party/sam.jpeg'
import bride7 from '../images/party/pri.jpg'
import bride8 from '../images/party/vi2.jpg'
import groom1 from '../images/party/beo.jpeg'
import groom2 from '../images/party/kevin.jpg'
import groom3 from '../images/party/michael.jpg'
import groom4 from '../images/party/joseph.jpg'
import groom5 from '../images/party/dara.jpeg'
import groom6 from '../images/party/daniel.jpg'
import groom7 from '../images/party/tuan.jpg'
import groom8 from '../images/party/justin.jpeg'



class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="The Wedding Party" />
        <HeaderGeneric />
        <div id="main">
          <section id="first" className="main special">
            {/* <span className="image main"><img src={pic04} alt="" /></span> */}
            <div>
                <div className="wedding-party-wrapper-page">
                  <h3 class="cursive-text party-text">Team Bride</h3>
                  <ul className="wedding-party">
                  <li className="groom">
                      <span className="icon party"><img class="party-picture" src={bride1} height="80" weight="80"></img></span>
                      <div>
                        <h3>My-Lien Bourdon</h3>
                        <h5>Matron of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride2} height="80" weight="80"></img></span>
                      <div>
                        <h3>Stacy Learn</h3>
                        <h5>Maid of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride3} height="80" weight="80"></img></span>
                      <div>
                        <h3>Evita Le</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride4} height="80" weight="80"></img></span>
                      <div>
                        <h3>Natalie Ngu</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride5} height="80" weight="80"></img></span>
                      <div>
                        <h3>Phuong Nguyen</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride6} height="80" weight="80"></img></span>
                      <div>
                        <h3>Samantha Phun</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride7} height="80" weight="80"></img></span>
                      <div>
                        <h3>Priscillia Pham</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={bride8} height="80" weight="80"></img></span>
                      <div>
                        <h3>Vi Lam</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="wedding-party-wrapper-page">
                <h3 class="cursive-text party-text">Team Groom</h3>
                  <ul className="wedding-party">
                  <li className="groom">
                  <span className="icon party"><img class="party-picture" src={groom1} height="80" weight="80"></img></span>
                      <div>
                        <h3>Beo Nguyen</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom2} height="80" weight="80"></img></span>
                      <div>
                        <h3>Kevin Cox</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom3} height="80" weight="80"></img></span>
                      <div>
                        <h3>Michael Vo</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom4} height="80" weight="80"></img></span>
                      <div>
                        <h3>Joseph Chung</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom5} height="80" weight="80"></img></span>
                      <div>
                        <h3>Dara Nget</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom6} height="80" weight="80"></img></span>
                      <div>
                        <h3>Daniel Rillo</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom7} height="80" weight="80"></img></span>
                      <div>
                        <h3>Tuan Dang</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                    <span className="icon party"><img class="party-picture" src={groom8} height="80" weight="80"></img></span>
                      <div>
                        <h3>Justin Chaphiv</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
