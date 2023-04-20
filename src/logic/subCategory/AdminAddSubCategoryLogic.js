/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/ActionCategory";
import { useState } from "react";
import { UseNotification } from "../UseNotification";
import { createSubCategory } from "../../redux/actions/ActionSubCategory";

const AdminAddSubCategoryLogic = () => {
  const myDispatch = useDispatch();
  useEffect(() => {
    myDispatch(getAllCategory());
  }, []);
  // this is var name sub category
  const [nameSelectedSubCategory, setNameSelectedSubCategory] = useState("");
  // this is var selected for dropdown category
  const [IdSelectedCategory, setIdSelectedCategory] = useState("0");
  // this is var change is laoding
  const [isLoading, setIsLoading] = useState(true);
  const [msgInputSelect, setMsgInputSelect] = useState(
    "أختر التصنيف الاساسي ..."
  );
  const myDataCategory = useSelector(
    (state) => state.rootCategory.category.data
  );
  const response = useSelector((state) => state.rootSubCategory.subCategory);
  // console.log(myDataCategory);

  // this handel put in <select onChange={handelChangeSelecetCategory}></select>
  const handelChangeSelecetCategory = (e) => {
    setIdSelectedCategory(e.target.value);
    // console.log(e.target.value);
  };

  // onChange new name sub category
  const handelChangeNameSubCategory = (e) => {
    setNameSelectedSubCategory(e.target.value);
  };

  // this is function add sub category in {DB}

  const submitAddSubCategory = async (e) => {
    e.preventDefault();

    // this is condation if internet connection is Error must be display notification to users
    if (!navigator.onLine) {
      UseNotification("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }

    if (nameSelectedSubCategory === "") {
      UseNotification("أدخل اسم تصنيف الفرعي", "warn");
      return;
    }

    if (myDataCategory) {
      if (Object.values(myDataCategory).length === 0) {
        UseNotification("لاتوجد تصنيفات أساسية", "warn");
        return;
      }
    }

    // this is condeation ("0") zero is normal selcet with option
    if (IdSelectedCategory === "0") {
      UseNotification("يجب اختيار التصنيف الاساسي", "warn");
      return;
    }

    let nameSelectedSubCategorySplit = nameSelectedSubCategory.split("");
    if (nameSelectedSubCategorySplit.length === 1) {
      UseNotification("يجب أدخال اكثر من حرف واحد", "warn");
      return;
    }

    setIsLoading(true);
    // #01# this is create sub category not use (new FormData becouse FormDate to use for Images )
    // #02# here add simple here add object only {key => column form databse , value => useState}
    await myDispatch(
      createSubCategory({
        name: nameSelectedSubCategory,
        category: IdSelectedCategory,
      })
    );
    setIsLoading(false);

    // console.log(IdSelectedCategory);
    // console.log(nameSelectedSubCategory);
    console.log("AddSubCategory");
  };

  useEffect(() => {
    if (isLoading === false) {
      setIdSelectedCategory("0");
      setNameSelectedSubCategory("");

      if (response.status === 201) {
        UseNotification("تم إضافة التصنيف الفرعي", "success");
      } else if (
        response ===
        "My Error : AxiosError: Request failed with status code 400"
      ) {
        UseNotification("التصنيف الفرعي مسجل مسبقاً", "warn");
        myDispatch(getAllCategory());
      } else {
        UseNotification("هناك مشكلة حدثت", "error");
      }
    }
    // myDispatch(createSubCategory("d"));
  }, [isLoading]);
  return [
    handelChangeNameSubCategory,
    nameSelectedSubCategory,
    handelChangeSelecetCategory,
    IdSelectedCategory,
    msgInputSelect,
    myDataCategory,
    submitAddSubCategory,
  ];
};

export default AdminAddSubCategoryLogic;
