import React from 'react';
import Img from "gatsby-image"
import { graphql, StaticQuery } from 'gatsby'

const MainParty = ({ className }) => (
    <StaticQuery
      query={graphql`
        query {
            beo: file(relativePath: { eq: "party/beo_400x400.jpeg" }) {
                childImageSharp {
                  fixed(quality: 90, height: 200, width: 200) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
          mimi: file(relativePath: { eq: "party/mimi_400x400.jpg" }) {
            childImageSharp {
              fixed(quality: 90, height: 200, width: 200) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          kevin: file(relativePath: { eq: "party/kevin2.jpg" }) {
            childImageSharp {
              fixed(quality: 90, height: 200, width: 200) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          stacy: file(relativePath: { eq: "party/stacy_400x400.jpeg" }) {
            childImageSharp {
              fixed(quality: 90, height: 200, width: 200) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        return (
            <div className="wedding-party-wrapper">
            <ul className="features">
            <li className="party">
                <span className="icon major">
                    <Img
                        fixed={data.mimi.childImageSharp.fixed}
                        alt=""
                        className="party-main-pic"
                    />
                </span>
                <div>
                <h3>My-Lien Bourdon</h3>
                <h5 className="uppercase">Matron of Honor</h5>
                </div>
            </li>
            <li className="party">
                <span className="icon major">
                    <Img
                        fixed={data.stacy.childImageSharp.fixed}
                        alt=""
                        className="party-main-pic"
                    />
                </span>
                <div>
                <h3>Stacy Learn</h3>
                <h5 className="uppercase">Maid of Honor</h5>
                </div>
            </li>
            <li className="party">
                <span className="icon major">
                    <Img
                        fixed={data.beo.childImageSharp.fixed}
                        alt=""
                        className="party-main-pic"
                    />
                </span>
                <div>
                <h3>Beo Nguyen</h3>
                <h5 className="uppercase">Best Man</h5>
                </div>
            </li>
            <li className="party">
                <span className="icon major">
                    <Img
                        fixed={data.kevin.childImageSharp.fixed}
                        alt=""
                        className="party-main-pic"
                    />
                 </span>
                <div>
                <h3>Kevin Cox</h3>
                <h5 className="uppercase">Best Man</h5>
                </div>
            </li>
            </ul>
        </div>
        )
        }}/>
  )

  export default MainParty