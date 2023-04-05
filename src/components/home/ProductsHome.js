import React from "react";
import { ProductsCard } from "../products/ProductsCard";
import { SubTitle } from "../Uitily/SubTitle";
// import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
// import Zoom from "react-reveal/Zoom";
export const ProductsHome = ({ title, btnTitle, pathUrl, marginY }) => {
  return (
    <div className="container my-5">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-3  row-cols-xl-4 overflow-hidden">
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
    </div>
  );
};
