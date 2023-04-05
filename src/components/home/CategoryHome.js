import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { CategoryCard } from "../category/CategoryCard";
import Roll from "react-reveal/Roll";

export const CategoryHome = ({ title, btnTitle, pathUrl }) => {
  return (
    <div className="container ">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 justify-content-center overflow-hidden">
        <Roll right>
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"لابتوب"}
            categoryImgColor={"#ABDEEC"}
          />
        </Roll>
        <Roll right>
          <CategoryCard
            categoryImg={"../../images/clothe.png"}
            categoryTitle={"ملابس"}
            categoryImgColor={"#E3C3B7"}
          />
        </Roll>
        <Roll right>
          <CategoryCard
            categoryImg={"../../images/cat2.png"}
            categoryTitle={"أدوات"}
            categoryImgColor={"#B1B3FB"}
          />
        </Roll>
        <Roll left>
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"أجهزة منزلية"}
            categoryImgColor={"#BFBFBF"}
          />
        </Roll>
        <Roll left>
          <CategoryCard
            categoryImg={"../../images/pic.png"}
            categoryTitle={"أواني منزلية"}
            categoryImgColor={"#F8B784"}
          />
        </Roll>
        <Roll left>
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"لابتوب"}
            categoryImgColor={"#84E4C0"}
          />
        </Roll>
      </div>
    </div>
  );
};
