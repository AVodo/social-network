const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likeCount: '15'},
        {id: 2, message: 'First', likeCount: '11'},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 90
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case ADD_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }

        default:
            return state;

    }

}

export const addPostActionCreator = () => ( {type: ADD_POST} )

export const addPostTextActionCreator = (text) => {
    return {type: ADD_POST_TEXT, postText: text}
}

export default profileReducer;