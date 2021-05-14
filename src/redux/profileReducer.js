import {profileAPI} from "../api/api";


const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "GET_STATUS";

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likeCount: '15'},
        {id: 2, message: 'First', likeCount: '11'},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postText,
                likeCount: 90
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;

    }

}
// Actions
export const addPost = (postText) => ( {type: ADD_POST, postText} );
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const setUserStatus = (status) => ({type: SET_STATUS, status});

// Thunks
export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setUserStatus(status));
        }
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
    });
}


export default profileReducer;