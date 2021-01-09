import { combineReducers } from "redux";
import addedToCart from "./addedReducer";
import defaultReducer from "./defaultReducer";
import selectedReducer from './selectedReducer'
import addedToCartReducer from './addedToCartReducer'
import selectedForViewing from './selectedForViewing'

export const rootReducer : {} = combineReducers({
    State : defaultReducer,
    addedToCartReducer, 
    selectedForViewing,
});
// addedToCart,
// selectedReducer,