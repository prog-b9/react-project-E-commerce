import React from "react";

const UserProfileEditInfo = () => {
  return (
    <div className="col-11 col-sm-8 col-md-10 col-lg-6  m-auto m-md-0">
      {/* products name */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="الأسم...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
            value={"أحمد عبدالله"}
            onChange={() => null}
          />
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
      {/* input email */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="رقم الأيميل ...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
            value={"prog.b9@gmail.com"}
            onChange={() => null}
          />
        </div>
      </div>
      {/* Btn Add Address */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-3 py-2">حفظ التعديل</button>
      </div>
    </div>
  );
};

export default UserProfileEditInfo;
