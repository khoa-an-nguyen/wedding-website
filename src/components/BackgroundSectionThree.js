import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
const BackgroundSectionThree = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "shadowcreek.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
        >
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSectionThree = styled(BackgroundSectionThree)`
  width: 100%;
  height: 25em;
  @media (max-width: 980px) {
    height: 23em;
  }
  @media (max-width: 736px) {
  height: 20em;
  }
`

export default StyledBackgroundSectionThree