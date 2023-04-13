/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/ActionCategory";
import { useEffect } from "react";
const CategoryHomeLogic = () => {
  const myDispatch = useDispatch();
  
  const myData = useSelector((state) => state.rootCategory.category.data);
  const loading = useSelector((state) => state.rootCategory.loading);
  const alearSectionFinsh = useSelector((state) => state.rootCategory.alearSectionFinsh);
  const colorBackgroundCategory = useSelector(
    (state) => state.rootCategory.colorBackgroundCategory
    );
    
    
  
    useEffect(() => {
      // this is 6 limitdisplay element in oage
      myDispatch(getAllCategory(6));
    }, [loading]);
  return [myData, loading, colorBackgroundCategory,alearSectionFinsh];
};

export default CategoryHomeLogic;
