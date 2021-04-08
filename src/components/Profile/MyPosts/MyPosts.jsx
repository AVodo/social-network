import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.postsData
        .map(post => <Post message={post.message} like={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.addPosts();
    }

    let postText = () => {
        let text = newPostElement.current.value;
        props.postText(text);
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={ postText } ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPosts }>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;