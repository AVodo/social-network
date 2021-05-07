import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sideBarReducer from "./sideBarReducer";
import newsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);


export default store;