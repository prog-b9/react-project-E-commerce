import React from "react";

const UserProfileEditPassword = () => {
  return (
    <div className="col-11 col-sm-8 col-md-10 col-lg-4  m-auto m-md-0">
      {/* input name your home */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="أدخل كلمة المرور القديمة ...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
          />
        </div>
      </div>
      {/* input phone number */}
      <div className="my-3">
        <div className="form-floating">
          <input
            className="bg-body-tertiary p-2 px-3 rounded-3 border-0 w-100 rate-post-textarea"
            placeholder="أدخل كلمة المرور الجديدة ...."
            style={{ outline: "none" }}
            rows={3}
            type="text"
          />
        </div>
      </div>
      {/* Btn Add Address */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark px-3 py-2">حفظ كلمة السر</button>
      </div>
    </div>
  );
};

export default UserProfileEditPassword;
