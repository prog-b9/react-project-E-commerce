import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { CategoryCard } from "../category/CategoryCard";

export const CategoryHome = ({ title, btnTitle ,pathUrl}) => {
  return (
    <div className="container ">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 justify-content-center">
        <CategoryCard
          categoryImg={"../../images/prod1.png"}
          categoryTitle={"لابتوب"}
          categoryImgColor={"#ABDEEC"}
        />
        <CategoryCard
          categoryImg={"../../images/clothe.png"}
          categoryTitle={"ملابس"}
          categoryImgColor={"#E3C3B7"}
        />
        <CategoryCard
          categoryImg={"../../images/cat2.png"}
          categoryTitle={"أدوات"}
          categoryImgColor={"#B1B3FB"}
        />
        <CategoryCard
          categoryImg={"../../images/prod1.png"}
          categoryTitle={"أجهزة منزلية"}
          categoryImgColor={"#BFBFBF"}
        />
        <CategoryCard
          categoryImg={"../../images/pic.png"}
          categoryTitle={"أواني منزلية"}
          categoryImgColor={"#F8B784"}
        />
        <CategoryCard
          categoryImg={"../../images/prod1.png"}
          categoryTitle={"لابتوب"}
          categoryImgColor={"#84E4C0"}
        />
      </div>
    </div>
  );
};
