import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { BtnArrowLeft } from "./BtnArrowLeft";
import { BtnArrowRight } from "./BtnArrowRight";
export const ProductsGallery = () => {
  const images = [
    {
      original: "../../images/mobile.png",
    },
    {
      original: "../../images/mobile1.png",
    },
    {
      original: "../../images/mobile2.png",
    },
  ];
  return (
    // style={{minHeight:"55vh"}}
    <div className="" >
      <ImageGallery
        items={images}
        // defaultImage={images}
        isRTL={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        renderLeftNav={BtnArrowLeft}
        renderRightNav={BtnArrowRight}
      />
    </div>
  );
};
