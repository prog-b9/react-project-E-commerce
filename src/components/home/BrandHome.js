import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { BrandCard } from "../brand/BrandCard";
import Rotate from "react-reveal/Rotate";

export const BrandHome = ({ title, btnTitle }) => {
  return (
    <div className="container my-5">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={"AllBrand"} />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 overflow-hidden">
        <Rotate top >
          <BrandCard BrandImg={"../../images/brand1.png"} />
        </Rotate>
        <Rotate top >
          <BrandCard BrandImg={"../../images/brand2.png"} />
        </Rotate>
        <Rotate top >
          <BrandCard BrandImg={"../../images/brand3.png"} />
        </Rotate>
        <Rotate bottom >
          <BrandCard BrandImg={"../../images/brand1.png"} />
        </Rotate>
        <Rotate bottom >
          <BrandCard BrandImg={"../../images/brand2.png"} />
        </Rotate>
        <Rotate bottom >
          <BrandCard BrandImg={"../../images/brand3.png"} />
        </Rotate>
      </div>
    </div>
  );
};
