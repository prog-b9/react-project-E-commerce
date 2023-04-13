import React from "react";
import { ProductsCard } from "./ProductsCard";
import Flip from "react-reveal/Flip";

export const ProductsHomeContainer = () => {
  return (
    <div className="row row-cols-2 row-cols-sm-2  row-cols-lg-3  row-cols-xl-4 ">
      <Flip right>
        <ProductsCard />
      </Flip>
      <Flip right>
        <ProductsCard />
      </Flip>
      <Flip left>
        <ProductsCard />
      </Flip>
      <Flip left>
        <ProductsCard />
      </Flip>
    </div>
  );
};
