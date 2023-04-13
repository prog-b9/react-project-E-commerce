/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/ActionBrand";
import { GET_NOW_PAGE_BRAND } from "../../redux/types/type";
const AllBrandPageLogic = () => {
  const myDispatch = useDispatch();
  useEffect(() => {
    myDispatch(getAllBrand(GET_NOW_PAGE_BRAND));
  }, []);

  const myDataBrand = useSelector((state) => state.rootBrand.brand.data);
  const myDataBrandPagination = useSelector((state) => state.rootBrand.brand);
  const loading = useSelector((state) => state.rootBrand.loading);
  const alearSectionFinsh = useSelector(
    (state) => state.rootBrand.alearSectionFinsh
  );

  const getNowPage = (pageNow) => {
    myDispatch(getAllBrandPage(pageNow));
  };
  return [myDataBrand, myDataBrandPagination, loading, getNowPage,alearSectionFinsh];
};

export default AllBrandPageLogic;
