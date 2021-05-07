const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW_MORE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
//const GO_TO_USER_PROFILE = "GO_TO_USER_PROFILE";


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
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const showMore = () => ({type: SHOW_MORE});
export const setUsers = (newUsers) => ({type: SET_USERS, newUsers});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
//export const goToUserProfile = (userId) => ({type: GO_TO_USER_PROFILE, userId})


export default usersReducer;

