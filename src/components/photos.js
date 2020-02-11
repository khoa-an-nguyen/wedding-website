import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'

import captainwhite from '../images/gallery/landscape-captain-white.jpg'
import aodairock from '../images/gallery/V50A4004.jpg'
import blossompic from '../images/gallery/V50A4038.jpg'

export const photos = [
    {
      src: captainwhite,
      width: 4.5,
      height: 3
    },
    {
      src: aodairock,
      width: 3,
      height: 2
    },
    {
        src: blossompic,
        width: 1,
        height: 1.2
    },
    {
        src: captainwhite,
        width: 4.5,
        height: 3
      },
      {
        src: aodairock,
        width: 3,
        height: 2
      }
];

const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'black',
  rowContentColor: 'grey'
}
const Photos = () => (
    <div id="photo-wrapper">
    <Gallery photos={photos} direction={"row"}/>
    </div>
)


export default Photos