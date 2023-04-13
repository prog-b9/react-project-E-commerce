import {
  // useCreateData,
  useCreateDataWithImage,
} from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";
import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_NOW_PAGE_CATEGORY,
} from "../types/type";

// here function containerAPI it will import containerAPI function and input two param (api,type)
const containerGetDataAPI = (api, type) => async (dispatch) => {
  try {
    // this is function (useGetData()) get api and  recive param (API)
    const response = await useGetData(api);

     dispatch({
      type: type,
      payload: response.data,
    });
  } catch (err) {
     dispatch({
      type: GET_ERROR,
      payload: "myError" + err,
    });
  }
};

// here short get function getAllCategory
export const getAllCategory = (limit) =>
  containerGetDataAPI(`/api/v1/categories?limit=${limit}`, GET_ALL_CATEGORY);
// here short get function getAllCategory

export const getAllCategoryPage = (nowPage) =>
  containerGetDataAPI(
    `/api/v1/categories?limit=${GET_NOW_PAGE_CATEGORY}&page=${nowPage}`,
    GET_ALL_CATEGORY
  );


  // create category
export const createCategory = (formData) => async (dispatch) => {

  try {
    const response = await useCreateDataWithImage(
      "/api/v1/categories",
      formData
    );
    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "MyError : " + err,
    });
  }
};
// containerGetDataAPI(`/api/v1/categories`, CREATE_CATEGORY);

// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /

// export const getAllCategory = () => async (dispatch) => {
//   // console.log(response.data);
//   try {
//     // const response = await baseURL.get("/api/v1/categories");
//     const response = await getAPI("/api/v1/categories");

//     return dispatch({
//       type: GET_ALL_CATEGORY,
//       payload: response.data,
//     });
//   } catch (err) {
//     return dispatch({
//       type: GET_ERROR,
//       payload: "myError" + err,
//     });
//   }
// };
