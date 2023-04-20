export const GET_ERROR = "GET_ERROR";
////////////// Start Category /////////////////
export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_NOW_PAGE_CATEGORY = "4";

// this is color background category
export const colorBackgroundCategory = [
  "#ABDEEC",
  "#E3C3B7",
  "#B1B3FB",
  "#F8B784",
  "#ABDEEC",
  "#BFBFBF",
  "#84E4C0",
  "#B1B3FB",
];

////////////// End Category /////////////////

////////////// Start SubCategory /////////////////
export const CREATE_SUB_CATEGORY = "CREATE_SUB_CATEGORY";
export const GET_ALL_SUB_CATEGORY = "GET_ALL_SUB_CATEGORY";
////////////// End SubCategory /////////////////


////////////// Start Brand /////////////////
export const GET_ALL_BRAND = "GET_ALL_BRAND";
export const CREATE_BRAND = "CREATE_BRAND";
export const GET_NOW_PAGE_BRAND = "3";

////////////// End Brand /////////////////

/////////// Start Any Data or information repeat //////////
export const alearSectionFinsh = (msg) => {
  return (
    <div className="alert alert-danger d-flex align-items-center my-4" role="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
        role="img"
        aria-label="Warning:"
        style={{ width: "25px", height: "25px" }}
      >
        <path
          fill="#dc3545"
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <div>
        <div className="fw-bold mx-2 fs-4">{msg}</div>
      </div>
    </div>
  );
};
/////////// End Any Data or information repeat //////////
