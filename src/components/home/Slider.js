import React from "react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
export const Slider = () => {
  const imgData = [
    {
      img: "../../images/slider-01.png",
      alt: "img-01",
      discountHeader: "هناك خصم كبير",
      discountTitle: "خصم يصل الى 50% عند شرائك",
    },
    {
      img: "../../images/slider-02.png",
      alt: "img-02",
      discountHeader: "هناك خصم مناسب لكم",
      discountTitle: "خصم يصل الى 10% عند شرائك",
    },
    {
      img: "../../images/laptops.png",
      alt: "img-03",
      discountHeader: " %خصمنا 35 ",
      discountTitle: "خصم يصل الى 35% عند شرائك",
    },
    // {
    //   img: "images/slider-04.jpg",
    //   alt: "img-04",
    // },
    // {
    //   img: "images/slider-05.jpg",
    //   alt: "img-05",
    // },
    // {
    //   img: "images/slider-06.jpg",
    //   alt: "img-06",
    // },
  ];
  return (
    <div className=" " style={{backgroundColor:"#ABDEEC"}} dir="ltr">
      <Splide
        hasTrack={false}
        options={{
          // rewing =>  i don't now that
          rewind: true,
          //   gap => space between imgs
          gap: "0rem",

          //  loop => looping on all images
          type: "loop",
          // drag =>  using (false , true) => this is on drag the img {{{{no stop}}}} on onther img
          //   drag:"free",
          //   arrows => this hide or show arrow (next , prev)
          //   arrows: false,
          //   pagination => this hide or show pagination (next , prev)
          // pagination: true,
          // autoplay: true,

          //interval => 10s change img
          interval: 5000,
          //speed => 4s speed change img animate
          speed: 1500,
        }}
        // className="p-0 m-0 slider-img-container-parent"
      >
        <SplideTrack
        //  className="slider-img-container-child text-center "
        >
          {imgData.map((item, i) => (
            <SplideSlide key={i}>
              <div className="container d-flex justify-content-around align-items-center">
                <div>
                  <img src={item.img} className="slider-img" alt={item.alt} />
                </div>
                <div className="text-center text-danger text-opacity-75 p-3">
                  <h5>{item.discountHeader}</h5>
                  <h2 className="fw-bold mt-4 lh-lg ">{item.discountTitle}</h2>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
    // <div>
    //   <div
    //     id="carouselExampleCaptions"
    //     className="carousel slide carousel-fade"
    //     // style={{minHeight:"20vh"}}
    //   >
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="3"
    //         aria-label="Slide 4"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner ">
    //       <div
    //         className="carousel-item bg-info d-flex justify-content-around align-items-center "
    //         style={{ height: "400px" }}
    //       >
    //         <div>
    //           <img
    //             src="../../images/slider-01.png"
    //             className="d-block"
    //             style={{ maxWidth: "100%", height: "400px" }}
    //             alt="img-silder"
    //           />
    //         </div>
    //         <div className="text-center text-danger text-opacity-75 p-3">
    //           <h5>هناك خصم كبير</h5>
    //           <h2 className="fw-bold mt-4">خصم يصل الى 50% عند شرائك</h2>
    //         </div>
    //       </div>
    //       <div
    //         className="carousel-item bg-info d-flex justify-content-around align-items-center  active"
    //         style={{ height: "400px" }}
    //       >
    //         <div>
    //           <img
    //             src="../../images/slider-02.png"
    //             className="d-block"
    //             style={{ maxWidth: "100%", height: "400px" }}
    //             alt="img-silder"
    //           />
    //         </div>
    //         <div className="text-center text-danger text-opacity-75 p-3">
    //           <h5>هناك خصم مناسب لكم</h5>
    //           <h2 className="fw-bold mt-4">خصم يصل الى 10% عند شرائك</h2>
    //         </div>
    //       </div>
    //       <div
    //         className="carousel-item bg-info d-flex justify-content-around align-items-center  active"
    //         style={{ height: "400px" }}
    //       >
    //         <div>
    //           <img
    //             src="../../images/labtop.png"
    //             className="d-block"
    //             style={{ maxWidth: "100%", height: "400px" }}
    //             alt="img-silder"
    //           />
    //         </div>
    //         <div className="text-center text-danger text-opacity-75 p-3">
    //           <h5>هناك خصم مناسب لكم</h5>
    //           <h2 className="fw-bold mt-4">خصم يصل الى 10% عند شرائك</h2>
    //         </div>
    //       </div>
    //       <div
    //         className="carousel-item bg-info d-flex justify-content-around align-items-center  active"
    //         style={{ height: "400px" }}
    //       >
    //         <div>
    //           <img
    //             src="../../images/laptops.png"
    //             className="d-block"
    //             style={{ maxWidth: "100%", height: "400px" }}
    //             alt="img-silder"
    //           />
    //         </div>
    //         <div className="text-center text-danger text-opacity-75 p-3">
    //           <h5>هناك خصم مناسب لكم</h5>
    //           <h2 className="fw-bold mt-4">خصم يصل الى 10% عند شرائك</h2>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  );
};
