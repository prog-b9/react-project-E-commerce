/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/ActionCategory";
import { GET_NOW_PAGE_CATEGORY } from "../../redux/types/type";

const AllCategoryPageLogic = () => {
  const myDispatch = useDispatch();
  useEffect(() => {
    myDispatch(getAllCategory(GET_NOW_PAGE_CATEGORY));
  }, []);

  const myDataPagination = useSelector((state) => state.rootCategory.category);
  const myDataCategory = useSelector(
    (state) => state.rootCategory.category.data
  );
  const alearSectionFinsh = useSelector(
    (state) => state.rootCategory.alearSectionFinsh
  );

  const loading = useSelector((state) => state.rootCategory.loading);

  const getNowPage = (nowPage) => {
    myDispatch(getAllCategoryPage(nowPage));
  };
  return [
    myDataCategory,
    myDataPagination,
    loading,
    getNowPage,
    alearSectionFinsh,
  ];
};

export default AllCategoryPageLogic;
