import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

export const SearchSortResult = () => {
  const searchSortFilters = [
    "الأكثر مبيعاً",
    "الاعلى تقيماً",
    "السعر من الاعلى الى الاقل",
    "السعر من الاقل الى الاعلى",
  ];

  return (
    <div className="container">
      <div className="my-4 " id="container-search-sort-filters">
        <h3 className="fw-bold">ترتيب</h3>
        <OverlayTrigger
          trigger="click"
          key={"bottom"}
          placement={"bottom"}
          overlay={
            <Popover
              id={`popover-positioned-bottom`}
              className="border-0 shadow-sm"
            >
              <Popover.Body>
                <div className="nav">
                  {searchSortFilters.map((item, i) => (
                    <li
                      key={i}
                      className=" btn my-1 p-2 rounded w-100 "
                      id="search-sort-filters"
                    >
                      {item}
                    </li>
                  ))}
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="none" className="border-0">
            <div
              className="d-flex align-items-center justify-content-between  p-2 rounded bg-white"
              id="style-shadow"
              style={{ width: "170px" }}
            >
              <img
                src="../../images/sort.png"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
              <div className="mx-2 w-100 fw-bold text-center">ترتيب حسب</div>
            </div>
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};
