import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
const ImageText = styled.h1`

`;

const Intro = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "portrait-alley.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <section>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#000000`}
            classId="testtttt"
            id="hero-section"
            opacity= "0.6"
          >
            <div>
              <h1 id="hero-text" class="main-image-text">My-Anh & Khoa</h1>
              <h2 id="date-text" class="main-image-text">Friday, October 2, 2020</h2>
            </div>
          </BackgroundImage>
        </section>
      )
    }}
  />
)

// Figure out styled components for media queries?
const StyledBackgroundSection = styled(Intro)`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export default StyledBackgroundSection