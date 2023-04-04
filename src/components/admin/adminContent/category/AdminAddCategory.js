import React from "react";

export const AdminAddCategory = () => {
  return (
    <div>
      <div className="col-10 col-sm-8 col-md-10 col-lg-8 col-xl-4 m-auto m-sm-0">
        <div className="fw-bold fs-5 my-3" style={{ color: "#B5AD95" }}>
          التصنيف :{" "}
        </div>{" "}
        {/* <img
          src="../../images/avatar.png"
          style={{ width: "150px", height: "100px" }}
          alt="img-brand"
        /> */}
        <input
          className=" p-2 w-100 rounded bg-white style-shadow d-none"
          placeholder=""
          type="file"
          id="inputField"
        />
        {/* <div className=" p-2 w-100 rounded bg-white style-shadow"> */}
        <label htmlFor="inputField" className=" p-2 btn btn-dark style-shadow ">
          <span>إضافة صورة للتصنيف</span>
          <span className="mx-2">
            <ion-icon name="cloud-upload" id="icon-trash-can"></ion-icon>
          </span>
        </label>
        {/* </div> */}
      </div>
      <div className="col-10 col-sm-8 col-md-10 col-lg-8 col-xl-4 m-auto m-sm-0">
        <div className="my-5">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أسم التصنيف ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
            <div className="d-flex justify-content-end">
              <button className="btn btn-dark my-2 px-3 py-2">
                إضافة التصنيف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
