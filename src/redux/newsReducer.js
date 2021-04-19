const ADD_NEWS = 'ADD-NEWS';
const ADD_NEWS_TEXT = 'ADD-NEWS-TEXT';

let initialState = {
    newsData: [
        {id: '1', postText: 'today is a good weather', likeCount: '15'},
        {id: '2', postText: 'bad weather', likeCount: '3'},
    ],
    newNewsText: ''
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEWS:
            let newPost = {
                id: 3,
                postText: state.newNewsText,
                likeCount: 16
            }
            return {
                ...state,
                newsData: [...state.newsData, newPost],
                newNewsText: ''
            }
        case ADD_NEWS_TEXT:
            return {
                ...state,
                newNewsText: action.newsText
            }
        default:
            return state;
    }
}

export const addNewsActionCreator = () => {
    return {type: ADD_NEWS}
}

export const addNewsTextActionCreator = (text) => {
    return {type: ADD_NEWS_TEXT, newsText: text}
}


export default newsReducer;