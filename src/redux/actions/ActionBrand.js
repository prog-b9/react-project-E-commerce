import useGetData from "../../hooks/useGetData";
import {
  GET_ALL_BRAND,
  GET_ERROR,
  GET_NOW_PAGE_BRAND,
} from "../types/type";

export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "My Error" + err,
    });
  }
};

export const getAllBrandPage = (pageNow) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/brands?limit=${GET_NOW_PAGE_BRAND}&page=${pageNow}`
    );
    dispatch({
      type: GET_ALL_BRAND,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "My Error" + err,
    });
  }
};
