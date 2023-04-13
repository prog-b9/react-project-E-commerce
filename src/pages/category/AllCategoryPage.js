/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Pagination } from "../../components/Uitily/Pagination";
import AllCategoryContainer from "../../components/category/AllCategoryContainer";
import AllCategoryPageLogic from "../../logic/category/AllCategoryPageLogic";

export const AllCategoryPage = () => {
  const [
    myDataCategory,
    myDataPagination,
    loading,
    colorBackgroundCategory,
    getNowPage,
    alearSectionFinsh,
  ] = AllCategoryPageLogic();

  return (
    <div className="bg-light">
      <div className="container" style={{ minHeight: "90vh" }}>
        <h3 className="py-4 fw-bold">جميع الماركات</h3>
        <AllCategoryContainer
          myDataCategory={myDataCategory}
          loading={loading}
          colorBackgroundCategory={colorBackgroundCategory}
          alearSectionFinsh={alearSectionFinsh}
        />
        <div className="mt-5">
          <Pagination
            countPage={
              myDataPagination.paginationResult &&
              myDataPagination.paginationResult.numberOfPages
            }
            onPress={getNowPage}
          />
        </div>
      </div>
    </div>
  );
};
