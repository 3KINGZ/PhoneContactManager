import { combineReducers } from "redux";

import contacts from "./contact.reducer";
import history from "./history.reducer";

const rootReducer = combineReducers({ contacts, history });

export default rootReducer;
