/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../../redux/actions/ActionCategory";
import { getAllBrand } from "../../../../redux/actions/ActionBrand";
import { getAllSubCategory } from "../../../../redux/actions/ActionSubCategory";
import { CompactPicker } from "react-color";
export const AdminAddProducts = () => {
  const myDispatch = useDispatch();
  useEffect(() => {
    myDispatch(getAllCategory());
    myDispatch(getAllBrand());
  }, []);

  //// Start useSelector////////
  const myDataCategory = useSelector(
    (state) => state.rootCategory.category.data
  );
  const myDataBrand = useSelector((state) => state.rootBrand.brand.data);
  const myDataSubCategory = useSelector(
    (state) => state.rootSubCategory.subCategory.data
  );

  // console.log(myDataSubCategory);

  //// End useSelector////////

  // this is var array for mulity Images
  const [images, setImages] = useState({});
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  // this is state :
  // #01# => product Name
  const [productName, setProductName] = useState("");
  // #02# => product Details
  const [productDetails, setProductDetails] = useState("");
  // #03# => product Price
  const [productPrice, setProductPrice] = useState("");
  // #04# => product Price Before Discount
  const [productPriceBeforeDiscount, setProductPriceBeforeDiscount] =
    useState("");
  // #05# => product Price Before Discount
  const [selectedCategory, setSelectedCategory] = useState("");
  // #06# => product SelectedBrand
  const [selectedBrand, setSelectedBrand] = useState("");
  // #07# => product Quantity
  const [quantity, setQuantity] = useState("");
  // #08# => product IdSelectedCategory for dropdown category
  const [IdSelectedCategory, setIdSelectedCategory] = useState(0);
  // #09# => product IdSelectedBrand for dropdown Brand
  const [IdSelectedBrand, setIdSelectedBrand] = useState("0");
  // #10# => product IdSelectedSubCategory for dropdown sub category
  const [IdSelectedSubCategory, setIdSelectedSubCategory] = useState("0");
  // #11# => product IdSubCategory all for dropdown sub category
  const [IdSubCategoryAutoSelected, setIdSubCategoryAutoSelected] = useState(
    []
  );

  // #12# => product Add colors
  const [displayColors, setDisplayColors] = useState(false);
  const [colorsLi, setColorsLi] = useState([]);
  // this is var for props to popup (delete or drop)
  const [thisIsColor, setThisIsColor] = useState("");

  // onSelected sub category and save in array {this is params auto from library form npm}
  const onSelect = (seletedList) => {
    console.log(IdSubCategoryAutoSelected);
    setIdSubCategoryAutoSelected(seletedList);
  };
  // onRemove sub category and save in array {this is params auto from library form npm}
  const onRemove = (seletedList) => {
    console.log(IdSubCategoryAutoSelected);
    setIdSubCategoryAutoSelected(seletedList);
  };
  console.log(IdSubCategoryAutoSelected);

  //////////this is function Handel Input////////////
  // this is function short for inputs
  const handelInput = (set, e) => {
    set(e.target.value);
  };
  // Product Name
  const handelInputProductName = (e) => {
    handelInput(setProductName, e);
  };
  // Product details
  const handelInputProductDetails = (e) => {
    handelInput(setProductDetails, e);
  };
  // Product Price
  const handelInputProductPrice = (e) => {
    handelInput(setProductPrice, e);
  };
  // Product Price Before Discount
  const handelInputProductPriceBeforeDiscount = (e) => {
    handelInput(setProductPriceBeforeDiscount, e);
  };
  // Product Quantity
  const handelInputQuantity = (e) => {
    handelInput(setQuantity, e);
  };

  // handel change category select with option
  const onChangeHandelChangeCategory = async (e) => {
    setIdSelectedCategory(e.target.value);
    if (e.target.value === 0) {
      console.log("nonononnon");
      return;
    }

    await myDispatch(getAllSubCategory(e.target.value));
  };

  // this is useEffect if change id selected category
  useEffect(() => {
    if (IdSelectedCategory !== 0) {
      if (myDataSubCategory) {
        myDispatch(getAllSubCategory(IdSelectedCategory));
        // setIdSubCategoryAutoSelected(myDataSubCategory);
      }
    }
  }, [IdSelectedCategory]);
  // console.log(IdSubCategoryAutoSelected);

  // handel change Brand select with option
  const onChangeHandelChangeBrand = (e) => {
    setIdSelectedBrand(e.target.value);
  };
  // handel Add  products colors
  const handelAddColor = (color) => {
    // prams (color) this is for CompactPicker

    // ...colorLi => this is var old القديمة
    setColorsLi([...colorsLi, color.hex]); // hex => #ff0034

    // hide BoxColor
    setDisplayColors(false);
  };
  const handelRemoveColor = (color) => {
    // here filters for colorLi
    const newColorLi = colorsLi.filter((e) => e !== color);
    // filter => e = ["Dasdd","dasdasd","asdasd"]
    // هنا يحدث يلف على كل العناصر ويجيب كل شيء ماعدا اللون الي ضفظت علية

    setColorsLi(newColorLi);
  };

  return (
    <div className="col-10 col-sm-8 col-md-10 col-lg-6  m-auto m-md-0">
      <div className="my-2">
        {/*  */}
        <div className="my-4">
          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            // allowCrop => this is customize for image and edit
            allowCrop={false}
            max={5}
            theme={{
              background: "#fff",
              outlineColor: "#999",
              modalColor: "#ffffff",
            }}
          />
          {/* <div className=" p-2 w-100 rounded bg-white style-shadow"> */}
        </div>
        {/* products name */}
        <div className="my-3">
          <div className="form-floating">
            <input
              value={productName}
              onChange={handelInputProductName}
              className="bg-white style-shadow p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أسم المنتج ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
          </div>
        </div>

        {/* products details*/}
        <div className="my-3">
          <div className="form-floating">
            <textarea
              className="bg-white style-shadow p-3 pb-4 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="وصف المنتج ...."
              style={{ outline: "none" }}
              rows={3}
              value={productDetails}
              onChange={handelInputProductDetails}
            ></textarea>
          </div>
        </div>
        {/* products price */}
        <div className="my-3">
          <div className="form-floating">
            <input
              value={productPrice}
              onChange={handelInputProductPrice}
              className="bg-white style-shadow p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="سعر المنتج ...."
              style={{ outline: "none" }}
              type="number"
            />
          </div>
        </div>
        {/* products price before diccount */}
        <div className="my-3">
          <div className="form-floating">
            <input
              value={productPriceBeforeDiscount}
              onChange={handelInputProductPriceBeforeDiscount}
              className="bg-white style-shadow p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="السعر قبل الخصم ...."
              style={{ outline: "none" }}
              type="number"
            />
          </div>
        </div>
        {/* products Quantity */}
        <div className="my-3">
          <div className="form-floating">
            <input
              value={quantity}
              onChange={handelInputQuantity}
              className="bg-white style-shadow p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="الكمية ...."
              style={{ outline: "none" }}
              type="number"
            />
          </div>
        </div>
        {/* main category  */}
        <div className="input-group my-3 " id="style-shadow">
          <select
            className="form-select rounded text-center bg-white style-shadow border-0"
            id="inputGroupSelect03"
            style={{ outline: "none" }}
            aria-label="Example select with button addon"
            onChange={onChangeHandelChangeCategory}
            value={IdSelectedCategory}
          >
            <option value={0}>أختر التصنيف الرئيسي ...</option>
            {myDataCategory
              ? Object.values(myDataCategory).map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </div>
        {/* sub category */}
        <Multiselect
          options={myDataSubCategory && myDataSubCategory}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          className="bg-white style-shadow pe-auto text-end border-0 p-0 m-0"
          placeholder="أختر التصنيف الفرعي..."
        />
        {/* brand dropdown */}
        <div className="input-group my-3" id="style-shadow">
          <select
            className="form-select rounded text-center bg-white style-shadow border-0"
            id="inputGroupSelect03"
            style={{ outline: "none" }}
            aria-label="Example select with button addon"
            onChange={onChangeHandelChangeBrand}
            value={IdSelectedBrand}
          >
            <option value={"0"}>أختر الماركة ...</option>
            {myDataBrand
              ? Object.values(myDataBrand).map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </div>
        <h5 className="fw-bold">أضافة الالوان :</h5>
        <div className="row">
          {/* Products Colors */}
          {colorsLi.length > 0
            ? colorsLi.map((color, i) => (
                <li
                  key={i}
                  onClick={() => setThisIsColor(color)}
                  className={`col-6 ms-2 mt-2 btn rounded-circle`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: color,
                  }}
                  id="style-shadow-dark"
                ></li>
              ))
            : null}
          <li
            className={`ms-2 mt-2 btn btn-white btn text-dark fs-bold d-flex align-items-center justify-content-center rounded-circle add-product-color`}
            style={{ width: "40px", height: "40px" }}
            id="style-shadow-dark"
            onClick={() => setDisplayColors(!displayColors)}
          >
            <ion-icon name="add-outline"></ion-icon>
          </li>

          {/* show or hide Box Colors */}
          <div className="col my-3">
            {displayColors && (
              <CompactPicker onChangeComplete={handelAddColor} />
            )}
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <ion-icon name="alert-circle"></ion-icon>
          <div className="text-muted mx-2">لحذف اللون اضغط عليه </div>
        </div>
        {/* show popup shore selete color */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h4 className="modal-body text-center fw-bold">
                هل أنت متأكد من حذف اللون ؟{" "}
              </h4>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  الغاء
                </button>
                <button
                  type="button"
                  onClick={() => handelRemoveColor(thisIsColor)}
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark my-2 px-3 py-2">إضافة التصنيف</button>
        </div>
      </div>
    </div>
  );
};
