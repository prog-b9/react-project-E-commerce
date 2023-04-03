import React from "react";
import { Link } from "react-router-dom";

export const CategoryProductsHeader = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className=" col nav navbar fw-bold justify-content-start">
            <li className=" text-center nav-item ">
              <Link className="nav-link ">الكل</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">الكترونيات</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">ملابس</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">كهرباء</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">تخفيضات</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">اواني منزلية</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">تخفيضات</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">ساسلا</Link>
            </li>
            <li className=" text-center nav-item">
              <Link className="nav-link ">المزيد</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
