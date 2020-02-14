import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { debounce } from "./utils";
import Carousel, { Modal, ModalGateway } from "react-images";


function GalleryDynamicLoading({ photos }) {
  const [images, setImages] = useState(photos.slice(0, 4));
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const TOTAL_PAGES = 6;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const loadMorePhotos = debounce(() => {
    if (pageNum > TOTAL_PAGES) {
      setLoadedAll(true);
      return;
    }

    setImages(images.concat(photos.slice(images.length, images.length + 4)));
    setPageNum(pageNum + 1);
  }, 200);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 600) {
      loadMorePhotos();
    }
  };

  return (
    <div>
      <Gallery photos={images} direction={"column"} onClick={openLightbox} />
      {!loadedAll && (
        <div className="loading-msg" id="msg-loading-more">
          Loading...
        </div>
      )}
            <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryDynamicLoading;
