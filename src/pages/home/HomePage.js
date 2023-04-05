import React from "react";
import { Slider } from "../../components/home/Slider";
import { CategoryHome } from "../../components/home/CategoryHome";
import { ProductsHome } from "../../components/home/ProductsHome";
import { DsicountSection } from "../../components/home/DsicountSection";
import { BrandHome } from "../../components/home/BrandHome";

export const HomePage = () => {
  return (
    <div className="bg-light pb-4">
      <Slider />
      <CategoryHome
        title={"التصنيفات"}
        btnTitle={true}
        pathUrl={"allCategory"}
      />
      <ProductsHome
        title={"الأكثر مبيعاً"}
        btnTitle={true}
        pathUrl={"shopProducts"}
      />
      <DsicountSection />
      <ProductsHome
        title={"أحدث الازياء"}
        btnTitle={true}
        pathUrl={"shopProducts"}
      />
      <BrandHome title={"أشهر الماركات"} btnTitle={true} />
    </div>
  );
};
