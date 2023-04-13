/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import blob from "./images/blob-category-01.png";
export const CategoryCard = ({
  categoryImg,
  categoryTitle,
  categoryImgColor,
}) => {
  return (
    <div className=" my-2 d-flex flex-column align-items-center">
      <div className="position-relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="categoryImgBlob"
          viewBox="205.597 110.586 608.681 784.165"
          className="position-absolute categoryImgBlob"
          style={{ zIndex: "-1" }}
        >
          <defs>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M787 612q-63 112-175 226t-223-1Q278 722 246 611t-40-262q-8-151 143-216t243.5 58.5q92.5 123.5 175 216T787 612Z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              fill={categoryImgColor || "#BFBFBF"}
              d="M787 612q-63 112-175 226t-223-1Q278 722 246 611t-40-262q-8-151 143-216t243.5 58.5q92.5 123.5 175 216T787 612Z"
            />
          </g>
        </svg>
        <button className="btn border-0">
          <img src={categoryImg} id="categoryImg" alt="category-img" />
        </button>
      </div>
      <div className="mt-5 fw-bold w-100 text-center">{categoryTitle}</div>
    </div>
  );
};
