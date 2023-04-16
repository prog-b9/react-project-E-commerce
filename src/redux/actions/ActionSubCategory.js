import { useCreateData } from "../../hooks/useCreateData";
import { CREATE_SUB_CATEGORY, GET_ERROR } from "../types/type";

export const createSubCategory = (formData) => async (dispatch) => {
  try {
    const response =await useCreateData("/api/v1/subcategories", formData);
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
