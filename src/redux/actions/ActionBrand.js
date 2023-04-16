import { useCreateDataWithImage } from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";
import {
  CREATE_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_NOW_PAGE_BRAND,
} from "../types/type";

// this is fetch api (Get All Brand )

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

// this is fetch api (Get All Brand with pages)

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
      payload: "My Error : " + err,
    });
  }
};

// this is fetch api (create Brand)
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useCreateDataWithImage("/api/v1/brands", formData);
    dispatch({
      type: CREATE_BRAND,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "My Error : " + err,
    });
  }
};
