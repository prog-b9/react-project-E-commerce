import React from "react";
import { CategoryProductsHeader } from "../../components/category/CategoryProductsHeader";
import { ProductsGallery } from "../../components/products/ProductsGallery";
import { ProductsDetails } from "../../components/products/ProductsDetails";
import { RateContainer } from "../../components/rate/RateContainer";
import { Pagination } from "../../components/Uitily/Pagination";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { ProductsHomeContainer } from "../../components/products/ProductsHomeContainer";

export const ProductsDetailsPage = () => {
  return (
    <div className="bg-light pb-4">
      {/*Category Header Section*/}

      <CategoryProductsHeader />
      {/* details Section*/}

      <div className="container">
        <div className="row ">
          <div
            className="col-12  col-md-4 my-3 rounded-4"
            style={{ minHeight: "55vh" }}
          >
            <div className="m-3 bg-white rounded-4" id="style-shadow">
              <ProductsGallery />
            </div>
          </div>
          <div className="col-12 col-md-7 my-3">
            <div className="m-3">
              <ProductsDetails />
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section*/}
      <div className="m-3">
        <div
          className="container bg-white my-5 rounded-4 p-3"
          id="style-shadow"
        >
          <RateContainer />
          {/* Pagination Section*/}
          <Pagination />
        </div>
      </div>
      {/* products do you like Section*/}
      <SubTitle title={"منتجات قد تعجبك"} />
      <div className="container">
        <ProductsHomeContainer />
      </div>
    </div>
  );
};
