import React from "react";
import { ProductsCard } from "./ProductsCard";

export const ProductsHomeContainer = () => {
  return (
    <div className="row row-cols-2 row-cols-sm-2  row-cols-lg-3  row-cols-xl-4 ">
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
      <ProductsCard />
    </div>
  );
};
