/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CategoryCard } from "./CategoryCard";

import Roll from "react-reveal/Roll";

const AllCategoryContainer = ({
  myDataCategory,
  loading,
  colorBackgroundCategory,
  alearSectionFinsh,
}) => {
  return (
    <div className="row  justify-content-center">
      {loading
        ? Array(5)
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
                  {/* <span className="placeholder rounded mt-3 col-8"></span> */}
                </div>
              </div>
            ))
        : myDataCategory && myDataCategory.length > 0
        ? myDataCategory.map((item, i) => (
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
                    categoryImgColor={
                      colorBackgroundCategory[
                        Math.floor(
                          Math.random() * colorBackgroundCategory.length
                        ) + 1
                      ]
                    }
                  />
                </Roll>
              )}
            </div>
          ))
        : loading || alearSectionFinsh("لاتوجد تصنيفات")}
    </div>
  );
};

export default AllCategoryContainer;
