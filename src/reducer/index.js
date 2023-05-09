import { combineReducers } from "redux";
import { contactViewer } from "./addReducer";

export default combineReducers({
    contacts: contactViewer,
})