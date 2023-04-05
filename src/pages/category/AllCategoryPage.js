import React from "react";
import { CategoryCard } from "../../components/category/CategoryCard";
import { Pagination } from "../../components/Uitily/Pagination";

export const AllCategoryPage = () => {
  return (
    <div className="bg-light">
      <div className="container pt-4" style={{ minHeight: "80vh" }}>
        <h3 className="fw-bold">جميع التصنيفات</h3>
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
            categoryImg={"../../images/pic.png"}
            categoryTitle={"أواني منزلية"}
            categoryImgColor={"#F8B784"}
          />
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"لابتوب"}
            categoryImgColor={"#ABDEEC"}
          />
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"أجهزة منزلية"}
            categoryImgColor={"#BFBFBF"}
          />
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"لابتوب"}
            categoryImgColor={"#84E4C0"}
          />
          <CategoryCard
            categoryImg={"../../images/cat2.png"}
            categoryTitle={"أدوات"}
            categoryImgColor={"#B1B3FB"}
          />
          <CategoryCard
            categoryImg={"../../images/clothe.png"}
            categoryTitle={"ملابس"}
            categoryImgColor={"#E3C3B7"}
          />
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"أجهزة منزلية"}
            categoryImgColor={"#BFBFBF"}
          />
          <CategoryCard
            categoryImg={"../../images/prod1.png"}
            categoryTitle={"لابتوب"}
            categoryImgColor={"#84E4C0"}
          />
          <CategoryCard
            categoryImg={"../../images/pic.png"}
            categoryTitle={"أواني منزلية"}
            categoryImgColor={"#F8B784"}
          />
        </div>
        <div className="mt-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
