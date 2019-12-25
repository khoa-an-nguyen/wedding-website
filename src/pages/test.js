import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TestPage = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
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
        <div>
            <Img fluid={data.file.childImageSharp.fluid} />
            <div style={{
                margin: `auto`,
                textAlign: `center`
            }}>
            </div>
        </div>
    )
}



export default TestPage