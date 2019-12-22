import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/UserReducer";
import CartReducer from "./cart/CartReducer";
import DirectoryReducer from "./directory/DirectoryReducer";
import ShopReducer from "./shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);
