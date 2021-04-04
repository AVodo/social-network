import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, addPostTextActionCreator} from "../../../red/profileReducer";



const MyPosts = (props) => {

    let posts = props.state
        .map(post => <Post message={post.message} like={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    }

    let postText = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostTextActionCreator(text));
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={postText} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPosts }>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;