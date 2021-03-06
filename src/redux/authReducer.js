import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state;
    }

}

// Action Creators
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

// Thunk Creators
export const getAuthUserData = () => {
    return (dispatch) => {
        profileAPI.setAuthData().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    }
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0){
            dispatch(getAuthUserData());
        }
    })
}

export const logOut = (email, password, rememberMe) => (dispatch) => {
    authAPI.logOut().then(response => {
        if (response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}


export default authReducer;

