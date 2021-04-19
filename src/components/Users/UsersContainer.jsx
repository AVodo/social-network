import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;