import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => {
            dispatch(addPostActionCreator());
        },
        postText: (text) => {
            dispatch(addPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;