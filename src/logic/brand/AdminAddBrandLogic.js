/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../redux/actions/ActionBrand";
import { UseNotification } from "../../logic/UseNotification";

const AdminAddBrandLogic = () => {
  let avatar = "../../images/avatar.png";

  const [nameBrand, setNameBrand] = useState("");
  // this is var add to database
  const [selectedImg, setSelectedImg] = useState(null);
  // this is var add to display to pages
  const [selectedImgBrand, setSelectedImgBrand] = useState(avatar);
  const [isLoading, setIsLoading] = useState(true);
  // dispatch create brand
  const myDispatch = useDispatch();
  const response = useSelector((state) => state.rootBrand.brand);

  const onChangeSelectedimg = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImgBrand(URL.createObjectURL(event.target.files[0]));
      setSelectedImg(event.target.files[0]);
    }
  };

  const submitAddBrand = async (e) => {
    e.preventDefault();
    // this is condation if internet connection is Error must be display notification to users
    if (!navigator.onLine) {
      UseNotification("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }

    if (nameBrand === "" || selectedImg === null) {
      UseNotification("جميع الحقول مطلوبة", "warn");
      return;
    }
    let nameBrandSplit = nameBrand.split("");
    if (nameBrandSplit.length < 3) {
      UseNotification("يجب ان يكون اسم الماركة اكثر من 2 أحرف", "warn");
      return;
    }

    const formData = new FormData();

    formData.append("name", nameBrand);
    formData.append("image", selectedImg);

    setIsLoading(true);
    await myDispatch(createBrand(formData));
    setIsLoading(false);
  };
  const changeNameBrand = (e) => {
    setNameBrand(e.target.value);
  };
  useEffect(() => {
    if (isLoading === false) {
      setNameBrand("");
      setSelectedImgBrand(avatar);
      setSelectedImg(null);
      if (response.status === 201) {
        UseNotification("تم إضافة الماركة", "success");
      } else if (
        response ===
        "My Error : AxiosError: Request failed with status code 400"
      ) {
        UseNotification("الماركة مسجلة مسبقاً", "warn");
      } else {
        UseNotification("هناك مشكلة حدثت", "error");
      }
    }
  }, [isLoading]);
  return [
    onChangeSelectedimg,
    selectedImgBrand,
    changeNameBrand,
    nameBrand,
    submitAddBrand,
  ];
};

export default AdminAddBrandLogic;
