import React from "react";
import { ProductsCard } from "../products/ProductsCard";
import { SubTitle } from "../Uitily/SubTitle";

export const ProductsHome = ({title,btnTitle,pathUrl,marginY}) => {
  return (
    <div className="container my-5">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-3  row-cols-xl-4 ">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />

      </div>
    </div>
  );
};
