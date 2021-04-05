import React from "react";
import {addNewsActionCreator, addNewsTextActionCreator} from '../../redux/newsReducer'
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {

    let posts = props.state.newsData.map(post => <NewsPost text={post.postText} />);

    let newNewsElement = React.createRef();

    let newsText = () => {
        let text = newNewsElement.current.value;
        props.dispatch(addNewsTextActionCreator(text));
    }

    let addNews = () => {
        props.dispatch(addNewsActionCreator());
    }

    return (
        <div>

            <h1>News</h1>

            <textarea onChange={newsText} ref={newNewsElement} value={props.state.newNewsText}/>
            <button onClick={addNews}>add news</button>

            {posts}

        </div>
    );
}

export default News;