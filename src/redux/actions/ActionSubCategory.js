import { useCreateData } from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";
import {
  CREATE_SUB_CATEGORY,
  GET_ALL_SUB_CATEGORY,
  GET_ERROR,
} from "../types/type";

export const getAllSubCategory = (idCategory) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories/${idCategory}/subcategories`
    );
    dispatch({
      type: GET_ALL_SUB_CATEGORY,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "My Error : " + err,
    });
  }
};

export const createSubCategory = (formData) => async (dispatch) => {
  try {
    const response = await useCreateData("/api/v1/subcategories", formData);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "My Error : " + err,
    });
  }
};
