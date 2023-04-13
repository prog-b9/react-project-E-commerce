import { combineReducers } from "redux";
import reducerCategory from "../reducers/ReducerCategory";
import { reducerBrand } from "../reducers/ReducerBrand";

export const rootReducer = combineReducers({
  rootCategory: reducerCategory,
  rootBrand : reducerBrand
});
// export rootReducer;
// export rootReducer;
