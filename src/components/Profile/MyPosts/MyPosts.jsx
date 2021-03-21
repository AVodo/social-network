import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.state
        .map(post => <Post message={post.message} like={post.likeCount}/>);

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;