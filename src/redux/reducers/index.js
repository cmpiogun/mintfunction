import { combineReducers } from "redux";
import Mint from "./Mint";
import Auth from "./Auth";
import Collectibles from "./Collectibles";

const reducers = combineReducers({
  auth: Auth,
  mint: Mint,
  collectibles: Collectibles
});
export default reducers;
