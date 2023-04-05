import React from "react";

const UserEditAddress = () => {
  return (
    <div className="col-11 col-sm-8 col-md-10 col-lg-6  m-auto m-md-0">
      {/* products name */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="تسمية العنوان مثل (المنزل - العمل) ...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
            value={"المنزل"}
            onChange={() => null}
          />
        </div>
      </div>
      {/* products details*/}
      <div className="my-3">
        <div className="form-floating">
          <textarea
            className="bg-body-tertiary p-3 pb-4 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="العنوان بالتفصيل ...."
            style={{ outline: "none" }}
            rows={3}
            value={"القاهرة شارع 873"}
            onChange={() => null}
          ></textarea>
        </div>
      </div>
      {/* products price */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="رقم الهاتف ...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
            value={"0505241479"}
            onChange={() => null}
          />
        </div>
      </div>
      {/* Btn Add Address */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-3 py-2">حفظ تعديل العنوان</button>
      </div>
    </div>
  );
};

export default UserEditAddress;
