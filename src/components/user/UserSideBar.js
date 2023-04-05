import React from "react";
import { Link } from "react-router-dom";

export const UserSideBar = () => {
  const sideBarTitle = [
    {
      title: "إدارة الطلبات",
      onPress: "allOrder",
    },
    {
      title: "قائمة المفضلة",
      onPress: "allFavorite",
    },
    {
      title: "العنوان",
      onPress: "address",
    },
    {
      title: "الملف الشخصي",
      onPress: "profile",
    },
    // {
    //   title: "أضف منتج",
    //   onPress: "addProducts",
    // },
  ];

  // const btnClick = () => {
  //   let btnSideBarActive = document.querySelectorAll(".list-group-item");
  //   btnSideBarActive.forEach((items) => {
  //     btnSideBarActive.addEventListener((item) => {
  //       console.log(item.textContent);
  //     });
  //   });
  // };
  return (
    <div
      className=" row m-auto w-100 mt-2 rounded bg-light p-2"
      id="admin-sidebar-container"
    >
      {sideBarTitle.map((item, i) => (
        <li
          key={i}
          // onClick={btnClick}
          className="list-group-item active col col-md-12 btn border p-2 m-1 m-md-0 mt-md-1 fw-bold text-center "
          id="admin-btn-sidebar"
        >
          <Link
            to={`/user/${item.onPress}`}
            className=""
            style={{ textDecoration: "none" }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </div>
  );
};
