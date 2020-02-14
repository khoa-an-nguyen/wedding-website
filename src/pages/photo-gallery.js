import React from 'react';
import Gallery from 'react-photo-gallery';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import GalleryDynamicLoading from '../components/GalleryDynamicLoading'
import SubNavBar from '../components/SubPageNavBar'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { photos } from '../components/photos'


class PhotoGallery extends React.Component {
    render() {
      return (<Layout>
        {/* <Helmet title="Photo Gallery" /> */}
        <div id="main">
          <section className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Photo Gallery</h2>
                <SubNavBar/>
                </header>
                <LazyLoadComponent>
                  <GalleryDynamicLoading photos={photos}/>
                </LazyLoadComponent>
              </div>
            </div>
          </section>
        </div>
        </Layout>)
    }}

export default PhotoGallery