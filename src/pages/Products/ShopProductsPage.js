import React from "react";
import { CategoryProductsHeader } from "../../components/category/CategoryProductsHeader";
import { SearchSortResult } from "../../components/Uitily/SearchSortResult";
import { SideFilters } from "../../components/Uitily/SideFilters";
import { ProductsHomeContainer } from "../../components/products/ProductsHomeContainer";
import { Pagination } from "../../components/Uitily/Pagination";
import { RangePriceFilters } from "../../components/Uitily/RangePriceFilters";

export const ShopProductsPage = () => {
  return (
    <div className="bg-light pb-5">
      <CategoryProductsHeader />
      <SearchSortResult />
      <div className="container mt-5">
        <div className="row">
          <div
            className=" col-12 col-md-3  col-lg-2"
            id="container-side-filters"
          >
            <div className="row">
              <div className="col-12 col-sm-4 col-md-12">
                <h5 className="fw-bold">الفئة</h5>
                <SideFilters label={"الكل"} forAndId={"all"} />
                <SideFilters label={"اجهزة منزلية"} forAndId={"house-device"} />
                <SideFilters label={"الكل"} forAndId={"all"} />
                <SideFilters label={"اجهزة منزلية"} forAndId={"house-device"} />
              </div>
              <div className="col-12 col-sm-4 col-md-12">
                <h5 className="fw-bold">الماركات</h5>
                <SideFilters label={"الكل"} forAndId={"all"} />
                <SideFilters label={"اجهزة منزلية"} forAndId={"house-device"} />
                <SideFilters label={"الكل"} forAndId={"all"} />
              </div>
              <div className="col-12 col-sm-4 col-md-12">
                <h5 className="fw-bold"> السعر</h5>
                <RangePriceFilters title={"من"} id={"from"} />
                <RangePriceFilters title={"الى"} id={"to"} />
              </div>
            </div>
          </div>
          {/* products */}
          <div className=" col-12 col-md-9  col-lg-10">
            <ProductsHomeContainer />
            <div className="my-4">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
