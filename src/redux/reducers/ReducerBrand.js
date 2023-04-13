import { GET_ALL_BRAND, GET_ERROR, alearSectionFinsh } from "../types/type";

const inital = {
  brand: [],
  loading: true,
  alearSectionFinsh,
};

export const reducerBrand = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
