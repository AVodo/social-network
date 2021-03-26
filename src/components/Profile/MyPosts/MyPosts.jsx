import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.state
        .map(post => <Post message={post.message} like={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPosts }>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;