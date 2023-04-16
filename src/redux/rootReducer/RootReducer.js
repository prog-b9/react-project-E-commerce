import { combineReducers } from "redux";
import reducerCategory from "../reducers/ReducerCategory";
import { reducerBrand } from "../reducers/ReducerBrand";
import { reducerSubCategory } from "../reducers/ReducerSubCategory";

export const rootReducer = combineReducers({
  rootCategory: reducerCategory,
  rootBrand : reducerBrand,
  rootSubCategory:reducerSubCategory
});
// export rootReducer;
// export rootReducer;
