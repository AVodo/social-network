import React from "react";
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";


const mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friendsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);

export default FriendsBlockContainer;