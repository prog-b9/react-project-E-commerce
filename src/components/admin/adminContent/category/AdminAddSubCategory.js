/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ToastContainer } from "react-toastify";
import AdminAddSubCategoryLogic from "../../../../logic/category/AdminAddSubCategoryLogic";
// import Select from 'react-select'

export const AdminAddSubCategory = () => {
  const [
    handelChangeNameSubCategory,
    nameSelectedSubCategory,
    handelChangeSelecetCategory,
    IdSelectedCategory,
    msgInputSelect,
    myDataCategory,
    submitAddSubCategory,
  ] = AdminAddSubCategoryLogic();

  return (
    <div className="col-10 col-sm-8 col-md-10 col-lg-6 col-xl-4 m-auto m-md-0">
      {<ToastContainer autoClose={3000} />}
      <div className="my-5">
        <div className="my-3">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أسم التصنيف الفرعي ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
              onChange={(e) => handelChangeNameSubCategory(e)}
              value={nameSelectedSubCategory}
            />
          </div>
        </div>
        <div className="input-group" id="style-shadow">
          <select
            className="form-select rounded text-center shadow-none border-0"
            id="inputGroupSelect03"
            style={{ outline: "none", backgroundColor: "#ececec" }}
            aria-label="Example select with button addon"
            name="category"
            onChange={handelChangeSelecetCategory}
            value={IdSelectedCategory}
          >
            <option value={"0"}>{msgInputSelect}</option>
            {myDataCategory
              ? Object.values(myDataCategory).map((item, i) => (
                  <option value={item._id} key={i} className="">
                    {item.name}
                  </option>
                ))
              : null}
            {/* <option value="1">التصنيف الاول</option>
            <option value="3">التصنيف الثالث</option> */}
          </select>
        </div>
        {/* <Select
        className="basic-single my-3"
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={null}
      /> */}
        <div className="d-flex justify-content-end">
          <button
            onClick={submitAddSubCategory}
            className="btn btn-dark my-2 px-3 py-2"
          >
            إضافة التصنيف
          </button>
        </div>
      </div>
    </div>
  );
};
