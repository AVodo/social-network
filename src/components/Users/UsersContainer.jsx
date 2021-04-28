import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import UsersCl from "./UsersCl";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        startFollow: (userId) => {
            dispatch(followAC(userId));
        },
        startUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (newUsers) => {
            dispatch(setUsersAC(newUsers));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCl);

export default UsersContainer;