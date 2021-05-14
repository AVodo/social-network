import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let posts = props.postsData
        .map(post => <Post message={post.message} like={post.likeCount}/>);

    let addPost = (formData) => {
        props.addPost(formData.postText);
    }

    return (
        <div>
            My posts
            <div>
                <AddPostReduxForm onSubmit={addPost} />
            </div>
            {posts}
        </div>
    );
}

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"postText"} component={"textarea"}/>
        <button>Add post</button>
    </form>
}

const AddPostReduxForm = reduxForm({form: "pastText"})(AddPostForm);

export default MyPosts;