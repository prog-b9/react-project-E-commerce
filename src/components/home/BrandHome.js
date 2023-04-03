import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { BrandCard } from "../brand/BrandCard";

export const BrandHome = ({ title, btnTitle }) => {
  return (
    <div className="container my-5">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={"AllBrand"} />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        <BrandCard BrandImg={"../../images/brand1.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
        <BrandCard BrandImg={"../../images/brand1.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
      </div>
    </div>
  );
};
