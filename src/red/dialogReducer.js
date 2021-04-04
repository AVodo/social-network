const ADD_MESSAGE_TO_DIALOG = "ADD-MESSAGE-TO-DIALOG";
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT";

const dialogReducer = (state, action) => {

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

export default dialogReducer;