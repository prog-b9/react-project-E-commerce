/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";

import Rotate from "react-reveal/Rotate";
import { BrandCard } from "../../components/brand/BrandCard";
import BrandHomeLogic from "../../logic/brand/BrandHomeLogic";

export const BrandHome = ({ title, btnTitle }) => {
  const [myDataBrand, loading, alearSectionFinsh] = BrandHomeLogic();



  return (
    <div className="container my-5">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={"AllBrand"} />
      <div className="row  overflow-hidden">
        {loading === false
          ? myDataBrand
            ? Object.values(myDataBrand).length === 0
              ? alearSectionFinsh("لاتوجد ماركات")
              : Object.values(myDataBrand).map((item, i) => (
                  <div className="col-6 col-md-4 col-lg-2 m-auto mt-3" key={i}>
                    <Rotate top>
                      <BrandCard BrandImg={item.image} />
                    </Rotate>
                  </div>
                ))
            : null
          : Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="col-6 col-md-4 col-lg-2  m-auto mt-3" key={i}>
                  <div
                    className=" border-0 card rounded-4"
                    style={{ height: "150px" }}
                    aria-hidden="true"
                  >
                    <div className="card-body card-text text-center placeholder-glow d-flex align-items-center flex-column justify-content-center">
                      <span
                        className="placeholder rounded-circle col-12"
                        style={{ width: "70px", height: "70px" }}
                      ></span>
                      <span className="placeholder rounded mt-3 col-10"></span>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};
