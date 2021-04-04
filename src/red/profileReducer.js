const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";

const profileReducer = (state, action) => {

    switch(action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 90
            }
            state.newPostText = '';
            state.postsData.push(newPost);
            return state;

        case ADD_POST_TEXT:
            state.newPostText = action.postText;
            return state;

        default:
            return state;

    }

}

export const addPostActionCreator = () => ( {type: ADD_POST} )

export const addPostTextActionCreator = (text) => {
    return {type: ADD_POST_TEXT, postText: text}
}

export default profileReducer;