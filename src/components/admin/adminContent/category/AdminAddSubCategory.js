import React from "react";

export const AdminAddSubCategory = () => {
  return (
    <div className="col-10 col-sm-8 col-md-10 col-lg-6 col-xl-4 m-auto m-md-0">
      <div className="my-5">
        <div className="my-3">
          <div className="form-floating">
            <input
              className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
              placeholder="أسم التصنيف الفرعي ...."
              style={{ outline: "none" }}
              rows={3}
              type="text"
            />
          </div>
        </div>
        <div className="input-group" id="style-shadow">
          <select
            className="form-select rounded text-center shadow-none border-0"
            id="inputGroupSelect03"
            style={{ outline: "none", backgroundColor: "#ececec" }}
            aria-label="Example select with button addon"
          >
            <option>أختر التصنيف ...</option>
            <option value="1">التصنيف الاول</option>
            <option value="2">التصنيف الثاني</option>
            <option value="3">التصنيف الثالث</option>
          </select>
        </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark my-2 px-3 py-2">
              إضافة التصنيف
            </button>
          </div>
      </div>
    </div>
  );
};
