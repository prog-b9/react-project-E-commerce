import React from "react";
import { ToastContainer } from "react-toastify";
import AdminAddBrandLogic from "../../../../logic/brand/AdminAddBrandLogic";

export const AdminAddBrand = () => {
  const [
    onChangeSelectedimg,
    selectedImgBrand,
    changeNameBrand,
    nameBrand,
    submitAddBrand,
  ] = AdminAddBrandLogic();

  return (
    <div>
      {<ToastContainer autoClose={3000} />}

      <div className="col-10 col-sm-8 col-md-10 col-lg-8 col-xl-4 m-auto m-sm-0">
        <div className="fw-bold fs-5 my-3" style={{ color: "#B5AD95" }}>
          الماركة :{" "}
        </div>{" "}
        <input
          className=" p-2 w-100 rounded bg-white style-shadow d-none"
          placeholder=""
          onChange={onChangeSelectedimg}
          type="file"
          id="inputField"
        />
        {/* <div className=" p-2 w-100 rounded bg-white style-shadow"> */}
        <label htmlFor="inputField" className=" p-2 btn btn-dark style-shadow ">
          <span>إضافة صورة للماركة</span>
          <span className="mx-2">
            <ion-icon name="cloud-upload" id="icon-trash-can"></ion-icon>
          </span>
        </label>
        <img
          src={selectedImgBrand}
          className="m-2 rounded-3"
          style={{ width: "120px", height: "120px" }}
          alt="img-selected"
        />
        {/* </div> */}
      </div>
      <div className="col-10 col-sm-8 col-md-10 col-lg-8 col-xl-4 m-auto m-sm-0">
        <div className="my-5">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أسم الماركة ...."
              onChange={(e) => changeNameBrand(e)}
              value={nameBrand}
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
            <div className="d-flex justify-content-end">
              <button
                onClick={submitAddBrand}
                className="btn btn-dark my-2 px-3 py-2"
              >
                إضافة الماركة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
