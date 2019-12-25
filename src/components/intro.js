import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Intro = () => {
  const data = useStaticQuery(graphql`
  query ImageQuery {
    file(relativePath: {eq: "lincoln-memorial-landscape.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <section>
      <Img fluid={data.file.childImageSharp.fluid} />
    </section>
  )
}

export default Intro
