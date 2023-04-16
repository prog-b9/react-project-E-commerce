/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CategoryCard } from "./CategoryCard";

import Roll from "react-reveal/Roll";

const AllCategoryContainer = ({
  myDataCategory,
  loading,
  alearSectionFinsh,
}) => {


  const colorBackgroundCategory = [
    "#ABDEEC",
    "#E3C3B7",
    "#B1B3FB",
    "#F8B784",
    "#ABDEEC",
    "#BFBFBF",
    "#84E4C0",
    "#B1B3FB",
  ];
  return (
    <div className="row  justify-content-center">
      {loading === false
        ? myDataCategory
          ? Object.values(myDataCategory).length === 0
            ? alearSectionFinsh("لاتوجد تصنيفات")
            : Object.values(myDataCategory).map((item, i) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
                  {i < 3 ? (
                    <Roll right>
                      <CategoryCard
                        categoryImg={item.image}
                        categoryTitle={item.name}
                        categoryImgColor={colorBackgroundCategory[i]}
                      />
                    </Roll>
                  ) : (
                    <Roll left>
                      <CategoryCard
                        categoryImg={item.image}
                        categoryTitle={item.name}
                        categoryImgColor={colorBackgroundCategory[i]}
                      />
                    </Roll>
                  )}
                </div>
              ))
          : null
        : Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="col-5 border-0 col-sm-4 col-md-3 col-lg-2 card rounded-circle m-2"
                style={{ height: "150px" }}
                aria-hidden="true"
              >
                <div className="card-body card-text text-center placeholder-glow d-flex align-items-center flex-column justify-content-center">
                  <span
                    className="placeholder rounded-circle col-12"
                    style={{ width: "70px", height: "70px" }}
                  ></span>
                  <span className="placeholder rounded mt-3 col-10"></span>
                </div>
              </div>
            ))}
    </div>
  );
};

export default AllCategoryContainer;
