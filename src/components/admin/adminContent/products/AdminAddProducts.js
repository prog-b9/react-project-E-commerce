import React from "react";
import Multiselect from "multiselect-react-dropdown";

export const AdminAddProducts = () => {
  const colorsLi = ["dark", "white", "danger" ,"warning"];
  const MyListSubCategory = {
    options: [
      { name: "التصنيف الاول", id: 1 },
      { name: "التصنيف الثاني", id: 2 },
      { name: "التصنيف الثالث", id: 3 },
    ],
  };

  return (
    <div className="col-10 col-sm-8 col-md-10 col-lg-6  m-auto m-md-0">
      <div className="my-2">
        {/*  */}
        <div className="my-4">
          <input
            className=" p-2 w-100 rounded bg-white style-shadow d-none"
            placeholder=""
            type="file"
            id="inputField"
          />
          {/* <div className=" p-2 w-100 rounded bg-white style-shadow"> */}
          <label
            htmlFor="inputField"
            className=" p-2 btn btn-dark style-shadow "
          >
            <span>إضافة صورة للتصنيف</span>
            <span className="mx-2">
              <ion-icon name="cloud-upload" id="icon-trash-can"></ion-icon>
            </span>
          </label>
        </div>
        {/* products name */}
        <div className="my-3">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
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
              className="bg-body-tertiary p-3 pb-4 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أكتب تعليقك ...."
              style={{ outline: "none" }}
              rows={3}
            ></textarea>
          </div>
        </div>
        {/* products price */}
        <div className="my-3">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="سعر المنتج ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
          </div>
        </div>
        {/* products price before diccount */}
        <div className="my-3">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="السعر قبل الخصم ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
          </div>
        </div>
        {/* main categor  */}
        <div className="input-group my-3 " id="style-shadow">
          <select
            className="form-select rounded text-center shadow-none border-0"
            id="inputGroupSelect03"
            style={{ outline: "none", backgroundColor: "#ececec" }}
            aria-label="Example select with button addon"
          >
            <option>أختر التصنيف الاساسي ...</option>
            <option value="1">التصنيف الاول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
          </select>
        </div>
        {/* sub category */}
        <Multiselect
          options={MyListSubCategory.options}
          displayValue="name"
          className="bg-light pe-auto text-end border-0 p-0 m-0"
          placeholder="أختر التصنيف الفرعي..."
        />
        {/* brand dropdown */}
        <div className="input-group my-3" id="style-shadow">
          <select
            className="form-select rounded text-center shadow-none border-0"
            id="inputGroupSelect03"
            style={{ outline: "none", backgroundColor: "#ececec" }}
            aria-label="Example select with button addon"
          >
            <option>أختر الماركة ...</option>
            <option value="1">التصنيف الاول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
          </select>
        </div>
        {/* Products Colors */}
        {colorsLi.map((color, i) => (
          <li
            key={i}
            onClick={() => console.log(color)}
            className={`ms-2 mt-2 btn bg-${color} rounded-circle`}
            style={{ width: "40px", height: "40px" }}
            id="style-shadow-dark"
          ></li>
        ))}
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark my-2 px-3 py-2">إضافة التصنيف</button>
        </div>
      </div>
    </div>
  );
};
