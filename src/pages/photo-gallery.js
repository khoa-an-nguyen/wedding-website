import React from 'react'
import Gallery from 'react-photo-gallery'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import SubNavBar from '../components/SubPageNavBar'
import photo1 from '../images/gallery/landscape-captain-white.jpg'
import photo2 from '../images/gallery/7e564ab5-50b0-4469-ab2d-c5fb698ba134_rw_1920.jpg'
import photo3 from '../images/gallery/V50A3926.jpg'
import photo4 from '../images/gallery/8794c146-f493-420b-9c5d-74bf96c375b8_rw_1920.jpg'
import photo5 from '../images/gallery/d1533819-047b-4708-b93c-d842eeb7b309_rw_1920.jpg'
import photo6 from '../images/gallery/V50A3926.jpg'
import photo7 from '../images/gallery/V50A3931.jpg'
import photo8 from '../images/gallery/V50A3933.jpg'
import photo9 from '../images/gallery/V50A3992.jpg'
import photo10 from '../images/gallery/V50A4004.jpg'
import photo11 from '../images/gallery/V50A4014.jpg'
import photo12 from '../images/gallery/V50A4018.jpg'
import photo13 from '../images/gallery/V50A4036.jpg'
import photo14 from '../images/gallery/V50A4038.jpg'
import photo15 from '../images/gallery/V50A4040.jpg'

export const photos = [
  {
    src: photo1,
    width: 4.5,
    height: 3
  },
  {
    src: photo2,
    width: 2,
    height: 3
  },
  {
    src: photo3,
    width: 4.5,
    height: 3
  },
  {
    src: photo4,
    width: 4.5,
    height: 3
  },
  {
    src: photo6,
    width: 4,
    height: 3
  },
  {
    src: photo5,
    width: 2,
    height: 3
  },
  {
    src: photo7,
    width: 3,
    height: 4
  },
  {
    src: photo8,
    width: 4,
    height: 3
  },
  {
    src: photo9,
    width: 4,
    height: 3
  },
  {
    src: photo10,
    width: 3,
    height: 2
  },
  {
    src: photo14,
    width: 3,
    height: 4
  },
  {
    src: photo11,
    width: 4,
    height: 3
  },
  {
    src: photo12,
    width: 4,
    height: 3
  },
  {
    src: photo13,
    width: 3,
    height: 4.5
  },
  {
    src: photo15,
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];

class PhotoGallery extends React.Component {
    render() {
      return (<Layout>
        <Helmet title="Photo Gallery" />
        <header id="header">
        <h1>Photo Gallery</h1>
        <SubNavBar/>
        </header>
        <Gallery photos={photos} direction={"column"} />
        </Layout>)
    }}

export default PhotoGallery