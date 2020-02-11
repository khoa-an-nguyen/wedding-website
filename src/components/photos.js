import React, { Component } from 'react';
import Gallery from 'react-photo-gallery'


import photo1 from '../images/gallery/landscape-captain-white.jpg'
import photo10 from '../images/gallery/V50A4004.jpg'
import photo14 from '../images/gallery/V50A4038.jpg'

export const photos = [
    {
      src: photo1,
      width: 4.5,
      height: 3
    },
    {
      src: photo10,
      width: 3,
      height: 2
    },
    {
        src: photo14,
        width: 1,
        height: 1.2
    },
    {
        src: photo1,
        width: 4.5,
        height: 3
      },
      {
        src: photo10,
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