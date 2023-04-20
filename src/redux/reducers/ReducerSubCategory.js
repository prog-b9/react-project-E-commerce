import {
  CREATE_SUB_CATEGORY,
  GET_ALL_SUB_CATEGORY,
  GET_ERROR,
} from "../types/type";

const inital = {
  subCategory: [],
  loading: true,
};
export const reducerSubCategory = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        subCategory: action.payload,
        loading: false,
      };
    case GET_ALL_SUB_CATEGORY:
      return {
        subCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        subCategory: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
