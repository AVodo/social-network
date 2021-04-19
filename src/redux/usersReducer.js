const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";


const initialState = {
    users: []
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
                users: [...state.users, ...action.newUsers]
            }
        case SHOW_MORE:
            return;
        default:
            return state;

    }

}

export const followAC = (userId) => ( {type: FOLLOW, userId} );

export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} );

export const showMoreAC = () => ({type: SHOW_MORE});

export const setUsersAC = (newUsers) => ({type: SET_USERS, newUsers});

export default usersReducer;

