const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW_MORE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";


const initialState = {
    users: [],
    count: 5,
    totalCount: 100,
    page: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return  {
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
        default:
            return state;

    }

}

export const followAC = (userId) => ( {type: FOLLOW, userId} );

export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} );

export const showMoreAC = () => ({type: SHOW_MORE});

export const setUsersAC = (newUsers) => ({type: SET_USERS, newUsers});

export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});

export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default usersReducer;

