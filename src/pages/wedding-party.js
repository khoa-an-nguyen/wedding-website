import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

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
                  <h3>Team Bride</h3>
                  <ul className="wedding-party">
                  <li className="groom">
                      <span className="icon party fa-copy"></span>
                      <div>
                        <h3>My-Lien Bourdon</h3>
                        <h5>Matron of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-code"></span>
                      <div>
                        <h3>Stacy Learn</h3>
                        <h5>Maid of Honor</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Evita Le</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Natalie Ngu</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Phuong Nguyen</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Samantha Phun</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Priscillia Pham</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Vi Lam</h3>
                        <h5>Bridesmaid</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="wedding-party-wrapper-page">
                <h3>Team Groom</h3>
                  <ul className="wedding-party">
                  <li className="groom">
                      <span className="icon party fa-copy"></span>
                      <div>
                        <h3>Beo Nguyen</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-code"></span>
                      <div>
                        <h3>Kevin Cox</h3>
                        <h5>Best Man</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Michael Vo</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Joseph Chung</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Dara Nget</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Daniel Rillo</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
                      <div>
                        <h3>Tuan Dang</h3>
                        <h5>Groomsman</h5>
                      </div>
                    </li>
                    <li className="groom">
                      <span className="icon party fa-diamond"></span>
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
