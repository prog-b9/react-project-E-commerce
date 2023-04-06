import React from "react";
import { Pagination } from "../../components/Uitily/Pagination";
import AllCategoryContainer from "../../components/category/AllCategoryContainer";
// import axios from "axios";
// import { useEffect } from "react";
// import baseURL from "../../api/BaseUrl";

export const AllCategoryPage = () => {
  // const getData = async () => {
  //   // baseURL == axios ===> delclered before in file BaseUrl from folder (api)
  //   const res = await baseURL.get("/api/v1/categories");
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   getData();
  // },[]);

  return (
    <div className="container pt-4" style={{ minHeight: "80vh" }}>
      <h3 className="fw-bold">جميع التصنيفات</h3>
      <AllCategoryContainer />
      <div className="mt-5">
        <Pagination />
      </div>
    </div>
  );
};
