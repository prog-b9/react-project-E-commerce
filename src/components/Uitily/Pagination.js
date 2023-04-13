import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ countPage , onPress }) => {
  const handelPage = (nowPage) => {
    onPress(nowPage.selected + 1);
    // console.log(nowPage.selected + 1);
  };

  return (
    <div className=" container p-2">
      <div
        className=" w-100  d-flex align-items-center justify-content-center "
        style={{ userSelect: "none" }}
        dir="ltr"
      >
        <ReactPaginate
          // عدد الصفحات
          pageCount={countPage}
          onPageChange={handelPage}
          breakLabel="...."
          nextLabel="التالي"
          previousLabel="الرجوع"
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          containerClassName="pagination "
          pageClassName="page-item "
          pageLinkClassName="page-link shadow-none "
          nextClassName="page-item "
          nextLinkClassName="page-link shadow-none"
          previousClassName="page-item "
          previousLinkClassName="page-link shadow-none"
          breakClassName="page-item"
          breakLinkClassName="page-link shadow-none"
          activeClassName="active"
        />
      </div>
    </div>
  );
};
