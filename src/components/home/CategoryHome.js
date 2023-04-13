/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { CategoryCard } from "../category/CategoryCard";
import Roll from "react-reveal/Roll";
import CategoryHomeLogic from "../../logic/category/CategoryHomeLogic";

export const CategoryHome = ({ title, btnTitle, pathUrl }) => {
  const [myData, loading, colorBackgroundCategory] = CategoryHomeLogic();

  // if (myData) {
  console.log(loading);
  console.log(myData);
  // }

  return (
    <div className="container ">
      <SubTitle title={title} btnTitle={btnTitle} pathUrl={pathUrl} />
      <div className="row  justify-content-center overflow-hidden">
        {/* {loading ? <h1>loading</h1> : <h1>all data</h1>} */}

        {myData &&
          myData.map((item, i) =>
            loading === false ? <h1 key={i}>loading</h1> : <h1 key={i}>all data</h1>
          )}

        {/* {loading
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
                  </div>
                </div>
              ))
          : null} */}

        {/* Start categort */}
        {/* {myData
          ? myData.map((item, i) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
                {i < 3 ? (
                  <Roll right>
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
          : null} */}
        {/* alearSectionFinsh("لاتوجد تصنيفات") */}
        {/* End categort */}
      </div>
    </div>
  );
};
