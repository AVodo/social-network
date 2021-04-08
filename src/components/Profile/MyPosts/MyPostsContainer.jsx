import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    }

    let postText = (text) => {
        props.dispatch(addPostTextActionCreator(text));
    }

    return (
        <MyPosts addPosts={addPosts}
                 postText={postText}
                 newPostText={props.state.newPostText}
                 postsData={props.state.postsData}/>
    );
}

export default MyPostsContainer;