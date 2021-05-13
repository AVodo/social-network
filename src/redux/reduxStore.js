import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sideBarReducer from "./sideBarReducer";
import newsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;