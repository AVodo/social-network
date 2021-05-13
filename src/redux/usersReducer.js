import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW_MORE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
    users: [],
    count: 5,
    totalCount: 0,
    page: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                //users: [...state.users, ...action.newUsers]
                users: [...action.newUsers]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;

    }

}

// Action Creators
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const showMore = () => ({type: SHOW_MORE});
export const setUsers = (newUsers) => ({type: SET_USERS, newUsers});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

// Thunk Creators
export const getUsers = (page, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, count).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalCount(response.data.totalCount));
        });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId));
            }
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        usersAPI.followUser(userId).then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId));
            }
        })
    }
}


export default usersReducer;

