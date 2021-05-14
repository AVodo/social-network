import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;