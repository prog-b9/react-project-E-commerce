import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../rootReducer/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composeEnhancers);
