/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/ActionCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseNotification } from "../UseNotification";
const AdminAddCategoryLogic = () => {
  let avatar = "../../images/avatar.png";
  // this is var add to display to pages
  const [selectedImgCategory, setSelectedImgCategory] = useState(avatar);
  // this is var add to database
  const [selectedImg, setSelectedImg] = useState(null);
  const [nameCategory, setNameCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const myDispatch = useDispatch();
  const response = useSelector((state) => state.rootCategory.category);

  const onChangeSelectedimg = (event) => {
    if (event.target.files && event.target.files[0]) {
      // here create new URL and create object URL with set first img
      setSelectedImgCategory(URL.createObjectURL(event.target.files[0]));
      setSelectedImg(event.target.files[0]);
    }
  };

  const addCategorySubmit = async (e) => {
    // stop relading the page
    e.preventDefault();
    // this is condation if internet connection is Error must be display notification to users
    if (!navigator.onLine) {
      UseNotification("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }

    if (selectedImg === null || nameCategory === "") {
      UseNotification("جميع الحقول مطلوبة", "warn");
      return;
    }
    let nameCategorySplit = nameCategory.split("");
    if (nameCategorySplit.length < 3) {
      UseNotification("يجب ان يكون اسم التصنيف اكثر من 3 أحرف", "warn");
      return;
    }
    // without insert image
    // myDispatch(createCategory({ name: "basil", age: 12 }));

    // if insert image in database must be use class {FormData}
    const formData = new FormData();
    formData.append("name", nameCategory);
    formData.append("image", selectedImg);

    setIsLoading(true);

    // if add category onther sem sem the cose stop here Line(52) on dispatch (why)???????????
    await myDispatch(createCategory(formData));
    setIsLoading(false);
  };

  const chnageNameCategory = (e) => {
    e.preventDefault();
    setNameCategory(e.target.value);
  };
  useEffect(() => {
    if (isLoading === false) {
      // if insert data to DB clear this variable
      setNameCategory("");
      setSelectedImgCategory(avatar);
      setSelectedImg("");
      if (response.status === 201) {
        UseNotification("تم إضافة التصنيف", "success");
      } else if (
        response === "MyError : AxiosError: Request failed with status code 400"
      ) {
        UseNotification("التصنيف الاساسي مسجل مسبقاً", "warn");
      } else {
        UseNotification("هناك مشكلة حدثت", "error");
      }
    }
  }, [isLoading]);

  return [
    ToastContainer,
    onChangeSelectedimg,
    selectedImgCategory,
    chnageNameCategory,
    nameCategory,
    addCategorySubmit,
  ];
};

export default AdminAddCategoryLogic;
