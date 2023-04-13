/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/ActionBrand";
const BrandHomeLogic = () => {
  const myDispatch = useDispatch();
  useEffect(() => {
    myDispatch(getAllBrand(6));
  }, []);

  const myDataBrand = useSelector((state) => state.rootBrand.brand.data);
  const loading = useSelector((state) => state.rootBrand.loading);
  const alearSectionFinsh = useSelector((state) => state.rootBrand.alearSectionFinsh);

  return [myDataBrand, loading,alearSectionFinsh];
};

export default BrandHomeLogic;
