import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import AddToCalendar from 'react-add-to-calendar'

const event = {
  title: 'My-Anh and Khoas Wedding!',
  description: 'Come celebrate with us on this special day! Please visit our website for further details on this day!',
  location: '18090 Silcott Springs Rd, Purcellville, VA 20132',
  startTime: '2020-10-02T22:00:00-00:00',
  endTime: '2020-10-02T03:00:00-00:00'
}
let icon = { 'calendar-plus-o': 'left' };


const Intro = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "frontcover-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        mobile: file(relativePath: { eq: "frontcover-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 490) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      const sources = [
        data.mobile.childImageSharp.fluid,
        {
          ...data.desktop.childImageSharp.fluid,
          media: `(min-width: 800px)`
        }
      ]
      return (
        <section>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={sources}
            backgroundColor={`#000000`}
            classId="testtttt"
            id="hero-section"
            opacity= "0.6"
          >
            <div>
              <h1 id="hero-text" className="main-image-text">My-Anh & Khoa</h1>
              <div>
              <h2 id="date-text" className="main-image-text">Friday, October 2, 2020</h2>
              <h5 id="calendar-wrapper"><AddToCalendar event={event} buttonLabel="Save the Date!" buttonTemplate={icon} /></h5>
              </div>
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
  height: 43em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
// @media (max-width: 736px) {
//   height: 30em;
// }

export default StyledBackgroundSection