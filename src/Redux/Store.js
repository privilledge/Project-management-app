// store.js

import { legacy_createStore as createStore } from "redux";
import emailReducer from "./emailReducer";

const Store = createStore(emailReducer);

export default Store;
