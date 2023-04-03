import React from "react";
import { BrandCard } from "../../components/brand/BrandCard";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { Pagination } from "../../components/Uitily/Pagination";

export const AllBrandPage = ({ title, btnTitle, pathUrl }) => {
  return (
    <div className="container" style={{ minHeight: "75vh" }}>
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        <BrandCard BrandImg={"../../images/brand1.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand1.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
        <BrandCard BrandImg={"../../images/brand1.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
        <BrandCard BrandImg={"../../images/brand3.png"} />
        <BrandCard BrandImg={"../../images/brand2.png"} />
        <BrandCard BrandImg={"../../images/brand1.png"} />
      </div>
      <div className="mt-5">
        <Pagination />
      </div>
    </div>
  );
};
