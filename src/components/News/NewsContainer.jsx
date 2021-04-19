import React from "react";
import {addNewsActionCreator, addNewsTextActionCreator} from '../../redux/newsReducer'
import News from "./News";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData,
        newNewsText: state.newsPage.newNewsText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newsText: (text) => {
            dispatch(addNewsTextActionCreator(text));
        },
        addNews: () => {
            dispatch(addNewsActionCreator());
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;