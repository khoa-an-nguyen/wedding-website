import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
const BackgroundSectionOne = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landscape-hand.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        mobile: file(relativePath: { eq: "landscape-hand-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 480) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const sources = [
        data.mobile.childImageSharp.fluid,
        {
          ...data.desktop.childImageSharp.fluid,
          media: `(min-width: 800px)`
        }
      ]
      return (
        <div>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={sources}
        >
        </BackgroundImage>
        </div>
      )
      }}/>
)

const StyledBackgroundSection = styled(BackgroundSectionOne)`
  width: 100%;
  height: 25em;
  @media (max-width: 980px) {
    height: 24em;
  }
  @media (max-width: 736px) {
  height: 20em;
  }
`

export default StyledBackgroundSection