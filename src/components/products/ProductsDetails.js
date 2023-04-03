import React from "react";

export const ProductsDetails = () => {
  const colorsLi = ["dark", "white", "danger"];
  return (
    <div className="">
      {/* section one */}
      <div>
        <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
          الالكترونيات :
        </div>
        <div className="lh-lg" style={{ color: "#4F4C13", fontWeight: "500" }}>
          ايفون XS بذاكرة سعة 128 جيجا بايت يدعم تقنية ايفون XS بذاكرة سعة 128
          جيجا بايت يدعم تقنية{" "}
        </div>
        <div className="fw-bold my-2" style={{ color: "#FFC107" }}>
          4.5
        </div>
      </div>
      {/* section two */}
      <div>
        <div className="d-flex align-items-center">
          <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
            الماركة :{" "}
          </div>
          <span className="mx-2 fw-bold">آبل</span>
        </div>
        <div className="nav my-3">
          {colorsLi.map((color, i) => (
            <li
              key={i}
              onClick={() => console.log(color)}
              className={`ms-2 mt-2 btn bg-${color} rounded-circle`}
              style={{ width: "40px", height: "40px" }}
              id="style-shadow"
            ></li>
          ))}
        </div>
      </div>
      {/* section three */}
      <div>
        <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
          المواصفات :
        </div>
        <div className="lh-lg" style={{ color: "#4F4C13", fontWeight: "500" }}>
          والبرمجيات ونظم المعلومات ونظم الحاسب الآلي وهندسة الحاسب الآلي و
          هندسة البرمجيات أو كل ما يخص علوم الحاسب الآلي وذلك لأنه يقوم بناء على
          الجانب العملي والتطبيقي لعلوم الحاسب الآلي والكمبيوتر، كما أنه يهتم
          بالإضافة إلى كل ما هو جديد في عالم الكمبيوتر من برمجيات وأكواد و غيره
          من الأشياء الهامة في عالم الحاسب الآلي
        </div>
      </div>
      {/* section four */}
      <div className="  my-4 ">
        <span className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
          السعر :
        </span>
        <span className="fw-bold mx-2">4600</span> جنية
      </div>
      <div className="col-10 col-sm-8 col-lg-5 m-auto text-center my-4">
        <button className=" w-100 border-0 p-2 btn btn-dark text-white">
          اضافة للعربة
        </button>
      </div>
    </div>
  );
};
