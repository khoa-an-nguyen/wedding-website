import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'

import captainwhite from '../images/gallery/landscape-captain-white.jpg';
import aodairock from '../images/gallery/V50A4004.jpg';
import blossompic from '../images/gallery/V50A4038.jpg';
import pic1 from '../images/gallery/7f66c551-6769-4423-a43b-70d313b6c023_rw_1920.jpg';
import pic3 from '../images/gallery/7e564ab5-50b0-4469-ab2d-c5fb698ba134_rw_1920.jpg';

export const query = graphql`
  query {
    file(relativePath: { eq: "meettheparty.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export const photos = [
    {
      src: captainwhite,
      width: 4.5,
      height: 3
    },
    {
        src: pic1,
        width: 2,
        height: 3
      },
      {
        src: aodairock,
        width: 3,
        height: 2
      },
      {
        src: pic3,
        width: 2,
        height: 3
      }
];

const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'black',
  rowContentColor: 'grey'
}
export default () => (
    <div id="photo-wrapper">
      <Gallery photos={photos} direction={"row"}/>
    </div>
)

