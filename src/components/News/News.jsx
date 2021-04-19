import React from "react";
import {addNewsActionCreator, addNewsTextActionCreator} from '../../redux/newsReducer'
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {

    let posts = props.newsData.map(post => <NewsPost text={post.postText} />);

    let newNewsElement = React.createRef();

    let newsText = () => {
        let text = newNewsElement.current.value;
        props.newsText(text);
    }

    let addNews = () => {
        props.addNews();
    }

    return (
        <div>

            <h1>News</h1>

            <textarea onChange={newsText} ref={newNewsElement} value={props.newNewsText}/>
            <button onClick={addNews}>add news</button>

            {posts}

        </div>
    );
}

export default News;