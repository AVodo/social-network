const ADD_MESSAGE_TO_DIALOG = "ADD-MESSAGE-TO-DIALOG";
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        {id: '1', name: 'Andr'},
        {id: '2', name: 'Vova'},
        {id: '3', name: 'Kate'},
        {id: '4', name: 'Maxi'},
        {id: '5', name: 'Kate'},
    ],
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'hello'},
        {id: '3', message: 'hello'},
        {id: '4', message: 'how are u?'}
    ],
    newDialogMessage: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE_TO_DIALOG:
            let newMessage = {
                id: 4,
                message: state.newDialogMessage
            }
            state.newDialogMessage = '';
            state.messagesData.push(newMessage);
            return state;

        case ADD_MESSAGE_TEXT:
            state.newDialogMessage = action.messageText;
            return state;

        default:
            return state;

    }

}

export const addMessageToDialogActionCreator = () => ({type: ADD_MESSAGE_TO_DIALOG});

export const addMessageTextActionCreator = (text) => {
    return {type: ADD_MESSAGE_TEXT, messageText: text}
}

export default dialogReducer;