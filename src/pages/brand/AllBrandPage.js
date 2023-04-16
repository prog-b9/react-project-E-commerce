/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrandCard } from "../../components/brand/BrandCard";
import { Pagination } from "../../components/Uitily/Pagination";
import AllBrandPageLogic from "../../logic/brand/AllBrandPageLogic";
import { Rotate } from "react-reveal";

export const AllBrandPage = () => {
  const [
    myDataBrand,
    myDataBrandPagination,
    loading,
    getNowPage,
    alearSectionFinsh,
  ] = AllBrandPageLogic();

  return (
    <div className="bg-light">
      <div className="container" style={{ minHeight: "90vh" }}>
        <h3 className="py-4 fw-bold">جميع الماركات</h3>
        <div className="row">
          {loading === false
            ? myDataBrand
              ? Object.values(myDataBrand).length === 0
                ? alearSectionFinsh("لاتوجد ماركات")
                : Object.values(myDataBrand).map((item, i) => (
                    <div
                      className="col-6 col-md-4 col-lg-2 m-auto mt-3"
                      key={i}
                    >
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
        <div className="mt-5">
          <Pagination
            countPage={
              myDataBrandPagination.paginationResult &&
              myDataBrandPagination.paginationResult.numberOfPages
            }
            onPress={getNowPage}
          />
        </div>
      </div>
    </div>
  );
};
