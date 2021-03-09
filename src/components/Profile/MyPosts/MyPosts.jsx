import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='hello' like='15' />
            <Post message='first' like='10' />
        </div>
    )
}

export default MyPosts