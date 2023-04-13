import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  colorBackgroundCategory,
  alearSectionFinsh,
} from "../types/type";

// this is variable value default
const inital = {
  category: [],
  loading: true,
  colorBackgroundCategory,
  alearSectionFinsh,
};

const reducerCategory = (state = inital, action) => {
  switch (action.type) {
    // here if === GET_ALL_CATEGORY
    case GET_ALL_CATEGORY:
      // get {1 => allData , 2 => category this is action (payload) , 3 => loading = false done all data catagory}
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      // get {1 => allData , 2 => category this is action (payload) , 3 => loading = false done all data catagory}
      return {
        category: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default reducerCategory;
